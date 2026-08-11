import { useEffect, useRef, useState } from "react";

export function useCountUp(target, { duration = 1800, decimals = 0 } = {}) {
  const [value, setValue] = useState(0);
  const [ref, setRef] = useState(null);
  const started = useRef(false);

  useEffect(() => {
    if (!ref) return undefined;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setValue(target);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setValue(target * eased);
              if (progress < 1) requestAnimationFrame(tick);
              else setValue(target);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, target, duration]);

  const display = decimals > 0 ? value.toFixed(decimals) : Math.round(value).toLocaleString("pt-BR");

  return [setRef, display];
}
