import Image from "next/image";
import { BASE_PATH } from "@/lib/config";

export default function CacnModel() {
  return (
    <section className="py-12 lg:py-20 bg-lavender-light" id="cacn">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-[50px]">
        <h2 className="text-h2 font-extrabold tracking-[-0.5px] leading-[1.2] mb-6 reveal">
          Citics Agent Cooperation Network (C-ACN) là gì?
        </h2>
        <div className="rounded-[20px] overflow-hidden shadow-[0_20px_60px_rgba(7,65,218,0.22)] reveal reveal-delay-3">
          {/* Desktop banner */}
          <Image
            src={`${BASE_PATH}/assets/CACN-revise-1920x1080.png`}
            alt="Citics Agent Cooperation Network"
            width={1920}
            height={1080}
            className="hidden md:block w-full h-auto"
            loading="lazy"
          />
          {/* Mobile banner */}
          <Image
            src={`${BASE_PATH}/assets/CACN-revise-1080x1080.png`}
            alt="Citics Agent Cooperation Network"
            width={1080}
            height={1080}
            className="md:hidden w-full h-auto"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
