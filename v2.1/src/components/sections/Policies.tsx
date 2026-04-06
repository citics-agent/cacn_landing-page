"use client";

import Image from "next/image";
import { useState } from "react";

const policies = [
  { id: "overview", label: "Tổng quan", img: "/assets/policy-overview-new.svg" },
  { id: "mortgages", label: "Mortgages", img: "/assets/policy-mortgages-new.svg" },
  { id: "value", label: "Value", img: "/assets/policy-value-new.svg" },
  { id: "buyer-secondary", label: "Buyer Thứ cấp", img: "/assets/policy-buyer-secondary-new.svg" },
  { id: "buyer-primary", label: "Buyer Sơ cấp", img: "/assets/policy-buyer-primary-new.svg" },
];

export default function Policies() {
  const [active, setActive] = useState("overview");
  const current = policies.find((p) => p.id === active)!;

  return (
    <section className="py-12 lg:py-20 bg-white" id="policies">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-[50px]">
        <h2 className="text-h2 font-extrabold tracking-[-0.5px] mb-8 reveal reveal-delay-1">
          Chính sách & Chương trình khuyến mại
        </h2>
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide md:flex-wrap reveal reveal-delay-2" role="tablist" aria-label="Chính sách">
          {policies.map((p) => (
            <button
              type="button"
              key={p.id}
              role="tab"
              aria-selected={active === p.id}
              aria-controls={`tabpanel-${p.id}`}
              id={`tab-${p.id}`}
              onClick={() => setActive(p.id)}
              className={`px-5 py-2.5 rounded-[50px] text-sm font-bold transition-all duration-300 whitespace-nowrap shrink-0 ${
                active === p.id
                  ? "bg-blue text-white shadow-[0_4px_20px_rgba(7,65,218,0.3)]"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
        <div
          role="tabpanel"
          id={`tabpanel-${current.id}`}
          aria-labelledby={`tab-${current.id}`}
          className="rounded-[20px] overflow-hidden border border-gray-200 shadow-[0_2px_10px_rgba(7,65,218,0.07)] reveal reveal-delay-3 aspect-[3/2]"
        >
          <Image
            src={current.img}
            alt={`Chính sách ${current.label} - Citics Agent`}
            width={1200}
            height={800}
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
