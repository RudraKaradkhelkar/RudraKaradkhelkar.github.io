// Projects level select (DESIGN.md section 7, "selection charm").
//
// Clicking a cover, the arrow buttons, the keyboard arrows, or (on phones) swiping the cover row
// selects a level: the cover scales to 1.05 with a quick squash (.46 s), the accent ring draws in
// and pulses, the detail strip swaps, and a short Web Audio tick plays if the nav sound toggle
// is on. Sound is off until the visitor turns it on. Port of pick(), charm(), and tick() from
// design-handoff/design/Projects.dc.html.

const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isPhone = () => window.matchMedia('(max-width: 767px)').matches;

let audio: AudioContext | undefined;

/** Two short triangle blips, 1250 Hz then 1875 Hz, exactly as in the design. */
export function tick() {
  if (document.documentElement.dataset.sound !== 'on') return;
  try {
    const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AC) return;
    audio ??= new AC();
    const ac = audio;
    if (ac.state === 'suspended') void ac.resume();
    const t0 = ac.currentTime + 0.01;
    for (const [freq, at, len] of [
      [1250, 0, 0.05],
      [1875, 0.045, 0.07],
    ] as const) {
      const osc = ac.createOscillator();
      const gain = ac.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, t0 + at);
      gain.gain.setValueAtTime(0.0001, t0 + at);
      gain.gain.exponentialRampToValueAtTime(0.16, t0 + at + 0.006);
      gain.gain.exponentialRampToValueAtTime(0.0001, t0 + at + len);
      osc.connect(gain);
      gain.connect(ac.destination);
      osc.start(t0 + at);
      osc.stop(t0 + at + len + 0.02);
    }
  } catch {
    // Audio is a nicety; never let it break selection.
  }
}

export function initLevelSelect() {
  const root = document.querySelector<HTMLElement>('[data-level-select]');
  const row = root?.querySelector<HTMLElement>('[data-level-row]');
  if (!root || !row) return;

  const covers = [...row.querySelectorAll<HTMLButtonElement>('button[data-level]')];
  const ids = covers.map((c) => c.dataset.level!);
  const details = [...document.querySelectorAll<HTMLElement>('[data-level-detail]')];
  const controls = document.querySelector<HTMLElement>('[data-level-controls]');
  let current = covers.findIndex((c) => c.classList.contains('is-selected'));
  if (current < 0) current = 0;
  let ringTimer = 0;
  let scrollLock = false;

  const charm = (cover: HTMLButtonElement) => {
    window.clearTimeout(ringTimer);
    cover.classList.remove('ring-on', 'pop');
    if (reduceMotion()) {
      cover.classList.add('ring-on');
      tick();
      return;
    }
    // Restart the squash and the ring animation.
    void cover.offsetWidth;
    ringTimer = window.setTimeout(() => {
      cover.classList.add('pop', 'ring-on');
      tick();
    }, 40);
  };

  /** Scroll the phone row so the cover sits in the middle. */
  const center = (cover: HTMLButtonElement, smooth: boolean) => {
    if (!isPhone()) return;
    const slot = cover.parentElement!;
    const left = slot.offsetLeft + slot.offsetWidth / 2 - row.clientWidth / 2;
    scrollLock = true;
    row.scrollTo({ left, behavior: smooth && !reduceMotion() ? 'smooth' : 'auto' });
    window.setTimeout(() => (scrollLock = false), smooth ? 600 : 50);
  };

  const select = (index: number, opts: { focus?: boolean; scroll?: boolean } = {}) => {
    const next = (index + covers.length) % covers.length;
    const changed = next !== current;
    current = next;
    covers.forEach((c, i) => {
      const on = i === next;
      c.classList.toggle('is-selected', on);
      c.setAttribute('aria-pressed', String(on));
      if (!on) c.classList.remove('ring-on', 'pop');
    });
    if (changed) {
      for (const d of details) {
        const on = d.dataset.levelDetail === ids[next];
        d.toggleAttribute('data-active', on);
        d.setAttribute('aria-hidden', String(!on));
        d.toggleAttribute('inert', !on);
        if (on && !reduceMotion()) {
          d.classList.remove('is-in');
          void d.offsetWidth;
          d.classList.add('is-in');
        }
      }
    }
    const cover = covers[next]!;
    charm(cover);
    if (opts.scroll !== false) center(cover, true);
    if (opts.focus) cover.focus({ preventScroll: true });
  };

  covers.forEach((c, i) => c.addEventListener('click', () => select(i)));
  controls?.querySelector('[data-level-prev]')?.addEventListener('click', () => select(current - 1));
  controls?.querySelector('[data-level-next]')?.addEventListener('click', () => select(current + 1));

  // Keyboard arrows move the selection while focus is in the level select or its controls.
  const onKey = (e: KeyboardEvent) => {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
    if (e.altKey || e.ctrlKey || e.metaKey) return;
    e.preventDefault();
    const onCover = covers.includes(document.activeElement as HTMLButtonElement);
    select(current + (e.key === 'ArrowLeft' ? -1 : 1), { focus: onCover });
  };
  row.addEventListener('keydown', onKey);
  controls?.addEventListener('keydown', onKey);

  // Phones: swiping the row selects the cover that comes to rest in the middle.
  let settle = 0;
  const onSettle = () => {
    if (scrollLock || !isPhone()) return;
    const mid = row.scrollLeft + row.clientWidth / 2;
    let best = current;
    let bestDist = Infinity;
    covers.forEach((c, i) => {
      const slot = c.parentElement!;
      const d = Math.abs(slot.offsetLeft + slot.offsetWidth / 2 - mid);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    });
    // The locked cover can be swiped to but not selected: only unlocked covers count, and only
    // when one of them is actually centered.
    const slot = covers[best]!.parentElement!;
    if (best !== current && bestDist < slot.offsetWidth / 2) select(best, { scroll: false });
  };
  row.addEventListener(
    'scroll',
    () => {
      window.clearTimeout(settle);
      settle = window.setTimeout(onSettle, 120);
    },
    { passive: true },
  );

  // Turning the sound on plays the tick once, as in the design, so the visitor hears it.
  window.addEventListener('rk:sound', (e) => {
    if ((e as CustomEvent<{ on: boolean }>).detail?.on) tick();
  });

  // Keep the selected cover centered on phones when the layout changes.
  const phoneQuery = window.matchMedia('(max-width: 767px)');
  phoneQuery.addEventListener('change', () => center(covers[current]!, false));
  center(covers[current]!, false);

  // First charm after the intro has played (1.3 s in the design), or right away with reduced motion.
  const first = covers[current]!;
  if (reduceMotion()) first.classList.add('ring-on');
  else window.setTimeout(() => charm(first), 1300);
}
