import { animate, inView, scroll, stagger } from "motion";
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
  return new Lenis({ autoRaf: true, lerp: 0.1, anchors: { offset: -96 } });
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

/**
 * In-view sequences: a container with [data-seq-group] plays its [data-seq] children once,
 * as a wave, when it scrolls into view. Gap and start delay come from data attributes.
 */
export function initSequences(root: ParentNode = document) {
  if (reducedMotion()) return;
  document.documentElement.classList.add("motion-ready");
  root.querySelectorAll<HTMLElement>("[data-seq-group]").forEach((group) => {
    const gap = Number(group.dataset.seqGroup || 0.12);
    const start = Number(group.dataset.seqStart || 0.15);
    const items = Array.from(group.querySelectorAll<HTMLElement>("[data-seq]"));
    inView(
      group,
      () => void animate(items, { opacity: [0, 1], y: [8, 0] }, { duration: 0.5, ease: ease.out, delay: stagger(gap, { startDelay: start, ease: "easeOut" }) }),
      { amount: 0.4 },
    );
  });
}

/**
 * Scroll parallax for decorative layers. [data-parallax="px"] moves that many pixels:
 * range "leave" (default) while its section scrolls out the top, "enter" while it scrolls in.
 */
export function initParallax(root: ParentNode = document) {
  if (reducedMotion()) return;
  root.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
    const distance = Number(el.dataset.parallax || 40);
    const section = el.closest<HTMLElement>("section, [data-parallax-root]") ?? el;
    const enter = el.dataset.parallaxRange === "enter";
    scroll(animate(el, { y: enter ? [distance, 0] : [0, distance] }, { ease: "linear" }), {
      target: section,
      offset: enter ? ["start end", "start start"] : ["start start", "end start"],
    });
  });
}
