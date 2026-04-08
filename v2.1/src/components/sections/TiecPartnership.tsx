import Image from "next/image";
import { BASE_PATH } from "@/lib/config";

export default function TiecPartnership() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 lg:px-[50px] relative z-10">
      <div className="rounded-[20px] overflow-hidden shadow-[0_20px_60px_rgba(7,65,218,0.22)] reveal">
        {/* Desktop banner */}
        <Image
          src={`${BASE_PATH}/assets/TIEC-1920x500.webp`}
          alt="Bồi dưỡng nghiệp vụ môi giới bất động sản - TIEC"
          width={1920}
          height={500}
          className="hidden md:block w-full h-auto brightness-[1.15] contrast-[1.05]"
          loading="lazy"
        />
        {/* Mobile banner */}
        <Image
          src={`${BASE_PATH}/assets/TIEC-1080x500.webp`}
          alt="Bồi dưỡng nghiệp vụ môi giới bất động sản - TIEC"
          width={1080}
          height={500}
          className="md:hidden w-full h-auto brightness-[1.15] contrast-[1.05]"
          loading="lazy"
        />
      </div>
    </div>
  );
}
