// Scroll motion for every page (DESIGN.md section 7). Loaded once from Layout.
//
// The intro (letters rising, art fading up, the band, cards dealing in, graph edges drawing) is
// plain CSS in src/styles/motion.css, so it starts with the first paint and needs no JavaScript.
// This file adds what CSS can't do in every browser: scroll-linked effects with GSAP ScrollTrigger,
// and Lenis smooth scrolling for mouse and trackpad.
//
// Everything runs inside gsap.matchMedia(). With prefers-reduced-motion: reduce nothing here
// runs, Lenis stays off, and every element keeps its final state. Scroll effects use fromTo()
// with explicit start values so they never capture a half-finished CSS intro as their start.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

const root = document.documentElement;
const $ = <T extends Element = HTMLElement>(sel: string, scope: ParentNode = document) => scope.querySelector<T>(sel);
const $$ = <T extends Element = HTMLElement>(sel: string, scope: ParentNode = document) => [...scope.querySelectorAll<T>(sel)];

// ---------- Home: the wordmark replays the intro ----------
window.addEventListener('rk:replay', () => {
  const hero = $('[data-hero]');
  if (!hero || !window.matchMedia('(prefers-reduced-motion: no-preference)').matches) return;
  hero.classList.remove('play');
  void hero.offsetWidth;
  hero.classList.add('play');
});

// The skip link must still move keyboard focus when Lenis handles the anchor scroll.
$('.skip-link')?.addEventListener('click', () => $('#main')?.focus({ preventScroll: true }));

const mm = gsap.matchMedia();

mm.add(
  {
    motion: '(prefers-reduced-motion: no-preference)',
    fine: '(pointer: fine)',
    desktop: '(min-width: 1100px)',
  },
  (context) => {
    const { motion, fine, desktop } = context.conditions as { motion: boolean; fine: boolean; desktop: boolean };

    if (!motion) {
      // Final states only. The Home nav avatar is visible from the start.
      root.classList.remove('motion');
      return;
    }
    root.classList.add('motion');

    // ---------- Lenis smooth scroll, mouse and trackpad only ----------
    let lenis: Lenis | undefined;
    const raf = (time: number) => lenis?.raf(time * 1000);
    const onMenu = (e: Event) => {
      if ((e as CustomEvent<{ open: boolean }>).detail?.open) lenis?.stop();
      else lenis?.start();
    };
    if (fine) {
      lenis = new Lenis({ anchors: true, autoRaf: false });
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);
      window.addEventListener('rk:menu', onMenu);
    }

    // ---------- Poster hero ----------
    const hero = $('[data-hero]');
    if (hero) {
      const range = (end: number) => ({ trigger: document.body, start: 0, end, scrub: true });

      const word = $('[data-hero-word]', hero);
      if (word) {
        gsap.fromTo(word, { y: 0, scale: 1, opacity: 1 }, { y: -160, scale: 0.96, opacity: 0.1, ease: 'none', scrollTrigger: range(900) });
      }

      const art = $('[data-hero-art]', hero);
      if (art) {
        gsap.fromTo(art, { y: 0, scale: 1, opacity: 1 }, { y: 90, scale: 0.82, opacity: 0, ease: 'none', scrollTrigger: range(860) });
      }

      // Captions and the bottom row fade and lift; the vertical side labels only fade, since
      // they already carry a translate and rotation.
      const fades = $$('[data-hero-fade]', hero);
      const sides = fades.filter((el) => el.classList.contains('ph__side'));
      const rest = fades.filter((el) => !sides.includes(el));
      if (rest.length) {
        gsap.fromTo(rest, { y: 0, opacity: 1 }, { y: -30, opacity: 0, ease: 'none', scrollTrigger: range(500) });
      }
      if (sides.length) {
        gsap.fromTo(sides, { opacity: 1 }, { opacity: 0, ease: 'none', scrollTrigger: range(500) });
      }
    }

    // ---------- Home: the nav avatar fades in after the hero ----------
    const avatar = $('[data-nav-avatar]');
    if (avatar) {
      gsap.fromTo(
        avatar,
        { opacity: 0, scale: 0.3 },
        { opacity: 1, scale: 1, ease: 'none', scrollTrigger: { trigger: document.body, start: 560, end: 860, scrub: true } },
      );
    }

    // ---------- Blocks reveal 60 px upward as they enter ----------
    // Only blocks still below the screen start hidden, so nothing visible blinks out on load.
    const below = $$('[data-reveal]').filter((el) => el.getBoundingClientRect().top > window.innerHeight);
    if (below.length) {
      gsap.set(below, { opacity: 0, y: 60 });
      ScrollTrigger.batch(below, {
        start: 'top 95%',
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'expo.out',
            stagger: 0.08,
            overwrite: true,
            // Hand transform back to CSS so hover lifts keep working.
            clearProps: 'transform,opacity',
          }),
      });
    }

    // ---------- Big section headings drift sideways, desktop only ----------
    if (desktop) {
      for (const el of $$('[data-drift]')) {
        const dir = el.dataset.drift === 'right' ? -1 : 1;
        gsap.fromTo(
          el,
          { xPercent: 4 * dir },
          { xPercent: -4 * dir, ease: 'none', scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true } },
        );
      }
    }

    // Fonts can change heights after load; re-measure once they settle.
    void document.fonts.ready.then(() => ScrollTrigger.refresh());

    return () => {
      window.removeEventListener('rk:menu', onMenu);
      gsap.ticker.remove(raf);
      lenis?.destroy();
      lenis = undefined;
    };
  },
);
