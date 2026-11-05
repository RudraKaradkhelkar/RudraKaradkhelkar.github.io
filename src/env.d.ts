// wawoff2 ships no types. Only decompress() is used, at build time, by src/lib/fit.ts.
declare module 'wawoff2' {
  export function decompress(input: Uint8Array): Promise<Uint8Array>;
  export function compress(input: Uint8Array): Promise<Uint8Array>;
}
