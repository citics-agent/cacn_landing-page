"use client";

import Image from "next/image";
import { useRef, useEffect, useCallback } from "react";

const eventImages = [
  { file: "VIUS-3.jpg", alt: "Sự kiện VIUS - Citics Agent networking" },
  { file: "VIUS-8.jpg", alt: "Sự kiện VIUS - Chia sẻ kinh nghiệm môi giới" },
  { file: "VIUS-50.jpg", alt: "Sự kiện VIUS - Đào tạo Agent" },
  { file: "VIUS-94.jpg", alt: "Sự kiện VIUS - Giao lưu Agent Citics" },
  { file: "IMG_0157.jpg", alt: "Hoạt động đào tạo Citics Agent" },
  { file: "IMG_0468.jpg", alt: "Hội thảo bất động sản Citics" },
  { file: "IMG_3249.jpg", alt: "Team building Citics Agent" },
  { file: "IMG_3324.jpg", alt: "Workshop nghiệp vụ môi giới" },
  { file: "IMG_3357.jpg", alt: "Sự kiện kết nối Agent Citics" },
  { file: "IMG_9903.jpg", alt: "Lễ trao giải Agent xuất sắc" },
  { file: "IMG_9982.jpg", alt: "Hoạt động cộng đồng Citics Agent" },
];

export default function Events() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const getScrollAmount = () => {
    const firstCard = scrollRef.current?.firstElementChild as HTMLElement | null;
    return firstCard ? firstCard.offsetWidth + 20 : 308;
  };

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "left" ? -getScrollAmount() : getScrollAmount(), behavior: "smooth" });
  };

  const startAuto = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      if (!scrollRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const amount = (scrollRef.current.firstElementChild as HTMLElement | null)?.offsetWidth ?? 288;
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: amount + 20, behavior: "smooth" });
      }
    }, 3000);
  }, []);

  useEffect(() => {
    startAuto();
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, [startAuto]);

  const pauseAuto = () => {
    if (autoRef.current) clearInterval(autoRef.current);
    setTimeout(() => startAuto(), 8000);
  };

  return (
    <section className="py-12 lg:py-20 bg-white" id="events">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-[50px]">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-h2 font-extrabold tracking-[-0.5px] reveal reveal-delay-1">
              Hoạt động dành riêng cho Agent của Citics
            </h2>
          </div>
          <div className="hidden md:flex gap-2 reveal reveal-delay-1">
            <button
              type="button"
              onClick={() => { scroll("left"); pauseAuto(); }}
              aria-label="Xem ảnh trước"
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <button
              type="button"
              onClick={() => { scroll("right"); pauseAuto(); }}
              aria-label="Xem ảnh tiếp theo"
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
            </button>
          </div>
        </div>
        <div
          ref={scrollRef}
          role="region"
          aria-label="Carousel ảnh sự kiện Citics Agent"
          tabIndex={0}
          className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide reveal reveal-delay-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue/30 rounded-[20px]"
        >
          {eventImages.map((img, i) => (
            <div key={i} className="flex-shrink-0 w-56 sm:w-64 md:w-72 snap-start group">
              <Image
                src={`/assets/events/${img.file}`}
                alt={img.alt}
                width={400}
                height={300}
                className="w-full h-52 object-cover rounded-[20px] shadow-[0_2px_10px_rgba(7,65,218,0.07)] group-hover:shadow-[0_12px_32px_rgba(7,65,218,0.15)] group-hover:-translate-y-1 transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
