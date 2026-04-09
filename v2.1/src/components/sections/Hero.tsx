import Image from "next/image";
import { BASE_PATH } from "@/lib/config";

const s = "var(--color-amber)";
const iconProps = { viewBox: "0 0 24 24", fill: "none", className: "w-7 h-7 sm:w-9 sm:h-9 lg:w-9 lg:h-9" } as const;
const strokeProps = { stroke: s, strokeWidth: "2", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

const benefits = [
  {
    text: <>Miễn phí tra cứu <span className="text-amber font-semibold">32 triệu</span> dữ liệu bất động sản</>,
    icon: <svg {...iconProps}><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" {...strokeProps}/></svg>,
  },
  {
    text: <>Miễn phí công cụ: tính lãi vay & <span className="text-amber font-semibold">trợ lý AI CiCi</span></>,
    icon: <svg {...iconProps}><path d="M12 2a7 7 0 017 7v3a7 7 0 01-14 0V9a7 7 0 017-7z" {...strokeProps}/><path d="M8 10h.01M16 10h.01M9 15c1 1 5 1 6 0" {...strokeProps}/></svg>,
  },
  {
    text: <>Độc quyền <span className="text-amber font-semibold">hệ thống quản trị C-ACN</span></>,
    icon: <svg {...iconProps}><rect x="3" y="3" width="7" height="7" rx="1" {...strokeProps}/><rect x="14" y="3" width="7" height="7" rx="1" {...strokeProps}/><rect x="3" y="14" width="7" height="7" rx="1" {...strokeProps}/><rect x="14" y="14" width="7" height="7" rx="1" {...strokeProps}/></svg>,
  },
  {
    text: <>Hoa hồng không giới hạn, lên đến <span className="text-amber font-semibold">80%</span> cho mỗi dịch vụ</>,
    icon: <svg {...iconProps}><path d="M12 2l2.5 7.5H22l-6 4.5 2.5 7.5L12 17l-6.5 4.5 2.5-7.5-6-4.5h7.5z" {...strokeProps} strokeLinejoin="round"/></svg>,
  },
  {
    text: <>Nhận <span className="text-amber font-semibold">200.000đ</span> khi đăng tin nguồn hàng</>,
    footnote: "Khi listing được xác thực trên hệ thống",
    icon: <svg {...iconProps}><rect x="5" y="3" width="14" height="18" rx="2" {...strokeProps}/><path d="M9 9h6M9 13h4" {...strokeProps}/></svg>,
  },
  {
    text: <><span className="text-amber font-semibold">Ưu đãi học phí</span> dành cho khoá chứng nhận hành nghề môi giới bất động sản</>,
    footnote: "Theo tiêu chuẩn của sở xây dựng",
    icon: <svg {...iconProps}><path d="M22 10v6M2 10l10-7 10 7-10 7z" {...strokeProps}/><path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5" {...strokeProps}/></svg>,
  },
];

export default function Hero() {
  return (
    <section
      className="grain relative min-h-screen flex items-center overflow-hidden bg-gradient-hero"
      id="hero"
    >
      <div className="max-w-[1200px] w-full mx-auto px-6 lg:px-[50px] pt-14 pb-16 lg:pt-20 lg:pb-20 relative z-10">
        {/* Mobile: Image on top, before everything */}
        <div className="flex justify-center lg:hidden mb-4 reveal">
          <Image
            src={`${BASE_PATH}/assets/hero-1920x1080.png`}
            alt="Citics Agent - Môi giới BĐS thế hệ mới"
            width={1920}
            height={1080}
            priority
            className="w-[130%] max-w-none h-auto"
          />
        </div>

        {/* Centered headline on top */}
        <div className="text-center text-white mb-4 lg:mb-14">
          <h1 className="text-h1 lg:!text-[40px] xl:!text-[46px] font-extrabold leading-tight reveal">
            La Bàn Cho Môi Giới Bất Động Sản Thế Hệ Mới
          </h1>
        </div>

        {/* Content LEFT + Image RIGHT */}
        <div className="flex flex-col lg:flex-row items-center gap-0 lg:gap-6">
          {/* Content */}
          <div className="lg:w-[45%] flex-shrink-0 text-white text-center lg:text-left">
            <p className="text-[14px] sm:text-[17px] lg:text-[15px] text-white/80 max-w-2xl lg:max-w-none mx-auto lg:mx-0 leading-relaxed mb-5 lg:mb-10 reveal reveal-delay-1">
              Giúp môi giới làm chủ sự nghiệp bất động sản, biến mỗi giao dịch thành nhiều nguồn thu nhập với mô hình quản trị và hợp tác mạng lưới trên toàn quốc
            </p>
            <ul className="space-y-1.5 sm:space-y-7 lg:space-y-5 mb-4 sm:mb-8 text-left reveal reveal-delay-2">
              {benefits.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[16px] sm:text-[20px] lg:text-[17px]">
                  <span className="flex-shrink-0 mt-0.5">
                    {item.icon}
                  </span>
                  <span>
                    {item.text}
                    {"footnote" in item && item.footnote && (
                      <span className="block text-white/50 text-xs sm:text-base lg:text-sm mt-0.5">* {item.footnote}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex justify-center lg:justify-start mt-6 sm:mt-10 lg:mt-14 reveal reveal-delay-3">
              <a
                href="#form1"
                className="w-full sm:w-auto text-center bg-amber text-blue font-bold text-[15px] px-10 py-4 rounded-[50px] hover:bg-amber-hover hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,191,1,0.4)] active:bg-amber-active active:translate-y-0 transition-all"
              >
                Nhận tư vấn miễn phí
              </a>
            </div>
          </div>

          {/* Image — desktop only, prominent on the right */}
          <div className="hidden lg:block lg:w-[55%] flex-shrink-0 reveal reveal-delay-1">
            <Image
              src={`${BASE_PATH}/assets/hero-1920x1080.png`}
              alt="Citics Agent - Môi giới BĐS thế hệ mới"
              width={1920}
              height={1080}
              priority
              className="w-[115%] h-auto max-w-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
