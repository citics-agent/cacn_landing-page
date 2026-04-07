import Image from "next/image";
import { BASE_PATH } from "@/lib/config";

const s = "var(--color-amber)";
const iconProps = { viewBox: "0 0 24 24", fill: "none", className: "w-5 h-5 sm:w-7 sm:h-7" } as const;
const strokeProps = { stroke: s, strokeWidth: "2", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

const benefits = [
  {
    text: "Miễn phí tra cứu 32 triệu dữ liệu bất động sản",
    icon: <svg {...iconProps}><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" {...strokeProps}/></svg>,
  },
  {
    text: "Miễn phí công cụ: tính lãi vay & trợ lý AI CiCi",
    icon: <svg {...iconProps}><path d="M12 2a7 7 0 017 7v3a7 7 0 01-14 0V9a7 7 0 017-7z" {...strokeProps}/><path d="M8 10h.01M16 10h.01M9 15c1 1 5 1 6 0" {...strokeProps}/></svg>,
  },
  {
    text: "Độc quyền hệ thống quản trị C-ACN",
    icon: <svg {...iconProps}><rect x="3" y="3" width="7" height="7" rx="1" {...strokeProps}/><rect x="14" y="3" width="7" height="7" rx="1" {...strokeProps}/><rect x="3" y="14" width="7" height="7" rx="1" {...strokeProps}/><rect x="14" y="14" width="7" height="7" rx="1" {...strokeProps}/></svg>,
  },
  {
    text: "Hoa hồng không giới hạn, lên đến 80% cho mỗi dịch vụ",
    icon: <svg {...iconProps}><path d="M12 2l2.5 7.5H22l-6 4.5 2.5 7.5L12 17l-6.5 4.5 2.5-7.5-6-4.5h7.5z" {...strokeProps} strokeLinejoin="round"/></svg>,
  },
  {
    text: "Nhận 200.000đ khi đăng tin nguồn hàng",
    footnote: "Khi listing được xác thực trên hệ thống",
    icon: <svg {...iconProps}><rect x="5" y="3" width="14" height="18" rx="2" {...strokeProps}/><path d="M9 9h6M9 13h4" {...strokeProps}/></svg>,
  },
];

export default function Hero() {
  return (
    <section
      className="grain relative min-h-screen flex items-center overflow-hidden bg-gradient-hero"
      id="hero"
    >
      <div className="max-w-[1200px] w-full mx-auto px-6 lg:px-[50px] pt-24 pb-16 lg:pt-32 lg:pb-20 relative z-10">
        {/* Mobile: Image on top, before everything */}
        <div className="flex justify-center lg:hidden mb-8 reveal">
          <Image
            src={`${BASE_PATH}/assets/hero-1920x1080.png`}
            alt="Citics Agent - Môi giới BĐS thế hệ mới"
            width={1920}
            height={1080}
            priority
            className="w-full h-auto max-w-[320px] mx-auto"
          />
        </div>

        {/* Hero Top — centered headline */}
        <div className="text-center text-white mb-12 lg:mb-16">
          <h1 className="text-h1 font-black leading-[1.1] mb-6 max-w-3xl mx-auto reveal">
            La Bàn Cho Môi Giới Bất Động Sản Thế Hệ Mới
          </h1>
          <p className="text-base lg:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed reveal reveal-delay-1">
            Giúp môi giới làm chủ sự nghiệp bất động sản, biến mỗi giao dịch thành nhiều nguồn thu nhập với mô hình quản trị và hợp tác mạng lưới trên toàn quốc
          </p>
        </div>

        {/* Hero Bottom — checklist + image */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Content */}
          <div className="lg:w-[48%] flex-shrink-0 text-white">
            <ul className="space-y-4 mb-4 reveal reveal-delay-2">
              {benefits.map((item) => (
                <li key={item.text} className="flex items-start gap-2.5 sm:gap-3 text-[14px] sm:text-lg">
                  <span className="flex-shrink-0 mt-0.5">
                    {item.icon}
                  </span>
                  <span>
                    {item.text}
                    {"footnote" in item && item.footnote && (
                      <span className="block text-white/50 text-xs mt-1">* {item.footnote}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mt-8 reveal reveal-delay-3">
              <a
                href="#form1"
                className="w-full sm:w-auto text-center bg-amber text-blue font-bold text-sm px-8 py-4 rounded-[50px] hover:bg-amber-hover hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,191,1,0.4)] active:bg-amber-active active:translate-y-0 transition-all"
              >
                Đăng ký ngay
              </a>
              <a
                href="https://agent.citics.vn/dang-ky"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center border-2 border-white/50 text-white font-bold text-sm px-8 py-4 rounded-[50px] hover:border-white hover:bg-white/10 hover:-translate-y-0.5 active:bg-white/[0.18] active:translate-y-0 transition-all"
              >
                Tạo tài khoản miễn phí
              </a>
            </div>
          </div>

          {/* Image — desktop only */}
          <div className="hidden lg:block lg:w-[52%] flex-shrink-0 reveal reveal-delay-2">
            <Image
              src={`${BASE_PATH}/assets/hero-1920x1080.png`}
              alt="Citics Agent - Môi giới BĐS thế hệ mới"
              width={1920}
              height={1080}
              priority
              className="w-full h-auto max-w-[640px] lg:max-w-none mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
