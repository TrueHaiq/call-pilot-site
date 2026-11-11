import { animate, inView, stagger } from "motion";
import Lenis from "lenis";

export const ease = {
  out: [0.16, 1, 0.3, 1],
  inOut: [0.65, 0, 0.35, 1],
} as const;

export const spring = { type: "spring", stiffness: 400, damping: 30 } as const;

export const reducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** 1 in LTR, -1 in RTL: multiply horizontal offsets by this so motion follows reading direction. */
export const dirSign = () => (document.documentElement.dir === "rtl" ? -1 : 1);

// Reduced motion keeps a short opacity fade and drops all movement.
const reveal = () =>
  reducedMotion()
    ? { keyframes: { opacity: [0, 1] }, options: { duration: 0.2, ease: "easeOut" as const } }
    : {
        keyframes: { opacity: [0, 1], y: [16, 0], filter: ["blur(6px)", "blur(0px)"] },
        options: { duration: 0.7, ease: ease.out },
      };

export function initSmoothScroll() {
  if (reducedMotion()) return null;
  return new Lenis({ autoRaf: true, lerp: 0.1 });
}

export function initReveals(root: ParentNode = document) {
  const { keyframes, options } = reveal();
  const staggerItems = !reducedMotion();

  root.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
    const delay = Number(el.dataset.revealDelay ?? 0);
    inView(el, () => void animate(el, keyframes, { ...options, delay }), { amount: 0.2 });
  });

  root.querySelectorAll<HTMLElement>("[data-reveal-stagger]").forEach((parent) => {
    const children = Array.from(parent.children) as HTMLElement[];
    const gap = Number(parent.dataset.revealStagger || 0.06);
    // Eased delays shrink along the list so the group reads as a wave, not a metronome.
    const delay = staggerItems ? stagger(gap, { ease: "easeOut" }) : 0;
    inView(parent, () => void animate(children, keyframes, { ...options, delay }), {
      amount: 0.2,
    });
  });
}
