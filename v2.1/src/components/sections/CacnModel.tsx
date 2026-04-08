import Image from "next/image";
import { BASE_PATH } from "@/lib/config";

export default function CacnModel() {
  return (
    <section className="py-12 lg:py-16 bg-lavender-light" id="cacn">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-[50px]">
        <div className="text-center mb-6 reveal">
          <span className="inline-block bg-blue/10 text-blue text-xs sm:text-sm font-bold uppercase tracking-[0.15em] px-4 py-1.5 rounded-full mb-4">
            Citics giới thiệu
          </span>
          <h2 className="text-h2 font-extrabold tracking-[-0.5px] leading-[1.2]">
            <span className="text-blue">hệ điều hành quản trị và kết nối mạng lưới</span>
            <br />
            <span className="bg-gradient-to-r from-blue-bright to-turquoise bg-clip-text text-transparent">môi giới thế hệ mới</span>
          </h2>
        </div>
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
