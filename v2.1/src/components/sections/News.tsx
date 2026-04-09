"use client";

import { useRef } from "react";
import { newsItems } from "@/lib/news";

export default function News() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const firstCard = scrollRef.current.firstElementChild as HTMLElement | null;
    const amount = firstCard ? firstCard.offsetWidth + 20 : 340; // card width + gap
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="py-12 lg:py-16 bg-lavender-light" id="news">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-[50px]">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-h2 font-extrabold tracking-[-0.5px] reveal reveal-delay-1">
              Citics có gì mới?
            </h2>
          </div>
          <div className="flex gap-2 reveal reveal-delay-1">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Tin trước"
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-white transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Tin tiếp theo"
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-white transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
            </button>
          </div>
        </div>
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide reveal reveal-delay-2"
        >
          {newsItems.map((item, i) => (
            <a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-[280px] sm:w-[300px] md:w-[320px] bg-white rounded-[20px] overflow-hidden shadow-[0_2px_10px_rgba(7,65,218,0.07)] hover:-translate-y-1.5 hover:shadow-[0_12px_32px_rgba(7,65,218,0.15)] transition-all duration-300 group snap-start"
            >
              <img
                src={item.img}
                alt={item.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <h4 className="font-extrabold text-sm leading-snug mb-3 line-clamp-2">{item.title}</h4>
                <span className="text-blue text-sm font-bold group-hover:underline">
                  Đọc thêm →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
