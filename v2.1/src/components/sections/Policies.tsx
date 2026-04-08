"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { policies, policyImage } from "@/lib/policies";

const ROTATION_INTERVAL = 5000;

function PolicyImage({ id, label, ext, isActive }: { id: string; label: string; ext: "png" | "jpg" | "jpeg"; isActive: boolean }) {
  const [loaded, setLoaded] = useState(false);
  const desktop = policyImage(id, "desktop", ext);
  const mobile = policyImage(id, "mobile", ext);

  const markLoaded = () => setLoaded(true);

  // Handle cached images: when React attaches the ref, check if already loaded
  const imgRef = useCallback((img: HTMLImageElement | null) => {
    if (img?.complete && img.naturalWidth > 0) setLoaded(true);
  }, []);

  return (
    <div
      className={`w-full h-full transition-opacity duration-200 ${
        isActive ? "relative opacity-100" : "absolute inset-0 opacity-0 pointer-events-none"
      }`}
    >
      {/* Desktop image */}
      <picture className="hidden lg:block w-full h-full">
        <source srcSet={desktop.webp} type="image/webp" />
        <img
          ref={imgRef}
          src={desktop.fallback}
          alt={`Chính sách ${label} - Citics Agent`}
          className="w-full h-full object-contain"
          onLoad={markLoaded}
          onError={markLoaded}
          loading={isActive ? "eager" : "lazy"}
        />
      </picture>
      {/* Mobile image */}
      <picture className="lg:hidden block w-full h-full">
        <source srcSet={mobile.webp} type="image/webp" />
        <img
          ref={imgRef}
          src={mobile.fallback}
          alt={`Chính sách ${label} - Citics Agent`}
          className="w-full h-full object-contain"
          onLoad={markLoaded}
          onError={markLoaded}
          loading={isActive ? "eager" : "lazy"}
        />
      </picture>
      {/* Loading skeleton — fades out when loaded */}
      <div className={`absolute inset-0 bg-gray-100 flex items-center justify-center transition-opacity duration-300 ${loaded ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
        <div className="flex flex-col items-center gap-2">
          <svg className="w-8 h-8 text-gray-300 animate-spin" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-20" />
            <path d="M12 2a10 10 0 019.95 9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <span className="text-gray-400 text-sm">Đang tải...</span>
        </div>
      </div>
    </div>
  );
}

export default function Policies() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!autoRotate) return;
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % policies.length);
    }, ROTATION_INTERVAL);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [autoRotate]);

  function handleTabClick(index: number) {
    setAutoRotate(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
    setActiveIndex(index);
  }

  return (
    <section className="py-12 lg:py-16 bg-white" id="policies">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-[50px]">
        <h2 className="text-h2 font-extrabold tracking-[-0.5px] mb-8 reveal reveal-delay-1">
          Chính sách & Chương trình khuyến mại
        </h2>

        <div className="flex flex-col lg:flex-row gap-6 reveal reveal-delay-2">
          {/* Left — tabs */}
          <div className="relative lg:w-1/6 flex-shrink-0">
            <div ref={tabsRef} className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-y-auto lg:max-h-[400px] p-3 -m-3 scrollbar-hide">
              {policies.map((p, i) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => handleTabClick(i)}
                  className={`relative text-left px-4 py-3 rounded-xl font-bold text-sm whitespace-nowrap lg:whitespace-normal transition-all duration-300 shrink-0 overflow-hidden ${
                    activeIndex === i
                      ? "bg-blue text-white shadow-[0_4px_20px_rgba(7,65,218,0.3)]"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {p.label}
                  {activeIndex === i && autoRotate && (
                    <span
                      key={`progress-${i}-${activeIndex}`}
                      className="absolute bottom-0 left-0 h-[3px] bg-white/50 rounded-full animate-[tabProgress_5s_linear]"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right — image viewer */}
          <div className="w-[330px] h-[330px] mx-auto lg:mx-0 lg:w-[900px] lg:h-[600px] relative rounded-[20px] overflow-hidden border border-gray-200 shadow-[0_2px_10px_rgba(7,65,218,0.07)]">
            {policies.map((p, i) => (
              <PolicyImage key={p.id} id={p.id} label={p.label} ext={p.ext} isActive={activeIndex === i} />
            ))}
          </div>

          {/* Page indicator — mobile only */}
          <div className="lg:hidden flex items-center justify-center gap-3 mt-4">
            <button
              type="button"
              aria-label="Trước"
              onClick={() => {
                const prev = (activeIndex - 1 + policies.length) % policies.length;
                handleTabClick(prev);
                if (tabsRef.current) {
                  const btn = tabsRef.current.children[prev] as HTMLElement;
                  btn?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
                }
              }}
              className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <span className="text-sm font-semibold text-gray-500">{activeIndex + 1} / {policies.length}</span>
            <button
              type="button"
              aria-label="Tiếp"
              onClick={() => {
                const next = (activeIndex + 1) % policies.length;
                handleTabClick(next);
                if (tabsRef.current) {
                  const btn = tabsRef.current.children[next] as HTMLElement;
                  btn?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
                }
              }}
              className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
