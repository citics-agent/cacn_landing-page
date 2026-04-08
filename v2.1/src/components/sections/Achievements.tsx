"use client";

import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, threshold = 0.5) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1600;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, threshold]);

  return { ref, display: count.toLocaleString("vi-VN") };
}

export default function Achievements() {
  const { ref, display } = useCountUp(5000);

  return (
    <section className="grain relative py-12 lg:py-16 bg-gradient-hero">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-[50px] relative z-10">
        <h2 className="text-h2 font-extrabold tracking-[-0.5px] text-white text-center reveal">
          Hơn{" "}
          <span ref={ref} className="text-amber">
            {display}
          </span>{" "}
          môi giới<br /> trở thành đối tác Citics Agent trong <span className="text-amber">2 năm</span>
        </h2>
      </div>
    </section>
  );
}
