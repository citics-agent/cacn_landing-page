"use client";

import Image from "next/image";
import { useState } from "react";
import { BASE_PATH } from "@/lib/config";

const footerSections = [
  {
    title: "Về Citics",
    links: [
      { label: "Giới thiệu", href: "https://www.citics.vn/ve-chung-toi", external: true },
      { label: "Tin tức", href: "https://www.citics.vn/ds-tin-tuc", external: true },
      { label: "Tuyển dụng", href: "https://www.citics.vn/tuyen-dung", external: true },
      { label: "Liên hệ", href: "https://www.citics.vn/lien-he", external: true },
    ],
  },
  {
    title: "Dịch vụ",
    links: [
      { label: "Dành cho Ngân hàng", href: "https://value.citics.vn/", external: true },
      { label: "Dành cho môi giới BĐS", href: "https://agent.citics.vn/", external: true },
      { label: "Dành cho công ty Thẩm định", href: "https://valuer.citics.vn/", external: true },
    ],
  },
  {
    title: "Hỗ trợ",
    links: [
      { label: "Tài liệu ứng dụng", href: "https://docs.citics.vn/", external: true },
      { label: "Câu hỏi thường gặp", href: "https://www.citics.vn/cau-hoi-thuong-gap", external: true },
    ],
  },
  {
    title: "Văn bản & Pháp lý",
    links: [
      { label: "Điều khoản sử dụng", href: "https://www.citics.vn/phap-ly-chi-tiet/dieu-khoan-su-dung", external: true },
      { label: "Chính sách bảo mật", href: "https://www.citics.vn/phap-ly-chi-tiet/chinh-sach-bao-mat", external: true },
      { label: "Chính sách riêng tư", href: "https://www.citics.vn/phap-ly-chi-tiet/chinh-sach-rieng-tu", external: true },
      { label: "Pháp lý", href: "https://www.citics.vn/phap-ly", external: true },
    ],
  },
];

function FooterAccordion({ title, links }: { title: string; links: { label: string; href: string; external?: boolean }[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button
        type="button"
        className="w-full flex items-center justify-between py-4 text-sm font-bold text-white"
        onClick={() => setOpen(!open)}
      >
        {title}
        <svg className={`w-4 h-4 text-white/40 transition-transform duration-300 ${open ? "rotate-180" : ""}`} viewBox="0 0 16 16" fill="none">
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <ul className={`overflow-hidden transition-all duration-300 ${open ? "max-h-60 pb-4" : "max-h-0"}`}>
        {links.map((link, i) => (
          <li key={i} className="mb-2.5">
            <a
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="text-white/50 hover:text-white text-sm transition-colors duration-300"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-8">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-[50px]">

        {/* Desktop: grid columns */}
        <div className="hidden md:grid grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {footerSections.map((col, i) => (
            <div key={i}>
              <h4 className="font-bold mb-4 text-sm">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href={link.href}
                      {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="text-white/50 hover:text-white text-sm transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4 className="font-bold mb-4 text-sm">Tải ứng dụng</h4>
            <div className="flex gap-3">
              <div className="text-center">
                <Image src={`${BASE_PATH}/assets/qr-android.png`} alt="Quét mã QR để tải ứng dụng Citics Agent trên Android" width={80} height={80} className="rounded-lg" />
                <a href="https://play.google.com/store/apps/details?id=vn.citics.agent" target="_blank" rel="noopener noreferrer" className="block mt-2">
                  <span className="text-xs text-white/40">Android</span>
                </a>
              </div>
              <div className="text-center">
                <Image src={`${BASE_PATH}/assets/qr-ios.png`} alt="Quét mã QR để tải ứng dụng Citics Agent trên iOS" width={80} height={80} className="rounded-lg" />
                <a href="https://apps.apple.com/vn/app/citics-agent/id6504488573" target="_blank" rel="noopener noreferrer" className="block mt-2">
                  <span className="text-xs text-white/40">iOS</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: accordion */}
        <div className="md:hidden mb-8">
          {footerSections.map((section, i) => (
            <FooterAccordion key={i} title={section.title} links={section.links} />
          ))}
          <div className="pt-6">
            <h4 className="font-bold mb-4 text-sm">Tải ứng dụng</h4>
            <div className="flex gap-4">
              <div className="text-center">
                <Image src={`${BASE_PATH}/assets/qr-android.png`} alt="Quét mã QR để tải ứng dụng Citics Agent trên Android" width={80} height={80} className="rounded-lg" />
                <span className="text-xs text-white/40 mt-1.5 block">Android</span>
              </div>
              <div className="text-center">
                <Image src={`${BASE_PATH}/assets/qr-ios.png`} alt="Quét mã QR để tải ứng dụng Citics Agent trên iOS" width={80} height={80} className="rounded-lg" />
                <span className="text-xs text-white/40 mt-1.5 block">iOS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Company info */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <Image src={`${BASE_PATH}/assets/Logo_citics_main_w.png`} alt="Citics" width={100} height={32} className="h-8 w-auto mb-4" />
          <p className="text-white/50 text-sm mb-3 max-w-xl leading-relaxed">
            La Bàn Cho Mọi Quyết Định Bất Động Sản. Nền tảng bất động sản số ứng dụng dữ liệu & AI, giúp người dùng tự tin làm chủ hành trình an cư và đầu tư!
          </p>
          <p className="text-white/30 text-xs mb-3">
            Căn LV1-00.16, Tầng trệt, Thủ Thiêm Lake View 1 - Số 19 Đường Ven Hồ Trung Tâm, Phường An Khánh, TP. Hồ Chí Minh
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-x-4 sm:gap-x-6 gap-y-2 text-white/40 text-xs">
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              <strong className="text-white/60">1900 633075</strong>
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-10 7L2 7" /></svg>
              <strong className="text-white/60">cacn@citics.com.vn</strong>
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>
              ĐKKD: <strong className="text-white/60">0315391639</strong>
            </span>
          </div>
        </div>

        {/* Bottom: copyright + social */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">&copy; {new Date().getFullYear()} Bản quyền thuộc về Citics.vn</p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/CiticsAgent" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white/40 hover:text-amber transition-colors duration-300">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            </a>
            <a href="https://www.tiktok.com/@citics_agent" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-white/40 hover:text-amber transition-colors duration-300">
              <svg className="w-5 h-5" viewBox="0 0 32 32" fill="currentColor"><path d="M16.708 0.027C18.453 0 20.188 0.016 21.921 0c.131 1.979.865 3.978 2.267 5.391C25.59 6.828 27.56 7.558 29.504 7.786v4.851c-1.828-.061-3.661-.458-5.318-1.236a15.2 15.2 0 0 1-2.055-1.199c-.01 4.674.017 9.346-.027 14.012-.113 1.929-.802 3.834-1.992 5.363C18.258 32.025 15.261 33.508 12.209 33.486c-1.876.052-3.74-.498-5.323-1.502C4.275 30.316 2.571 27.381 2.405 24.334c-.021-.588-.029-1.176-.002-1.761.22-2.705 1.544-5.27 3.577-7.011 2.301-2.012 5.514-2.975 8.499-2.391.028 1.997-.057 3.995-.057 5.992-1.202-.411-2.594-.41-3.737.165-.868.425-1.585 1.127-2.029 1.988-.36.659-.456 1.425-.437 2.163.156 1.97 1.95 3.663 3.938 3.57 1.298.017 2.541-.66 3.29-1.705.227-.312.441-.65.502-1.032.158-1.36.106-2.724.123-4.09.012-6.738-.017-13.474.017-20.209l.619.014z" /></svg>
            </a>
            <a href="https://www.youtube.com/@Citics.Official" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-white/40 hover:text-amber transition-colors duration-300">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>
            </a>
            <a href="https://zalo.me/citicsvn" target="_blank" rel="noopener noreferrer" aria-label="Zalo" className="text-white/40 hover:text-amber transition-colors duration-300">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.04 2 11c0 2.76 1.44 5.22 3.68 6.82V22l3.86-2.12c.78.22 1.6.34 2.46.34 5.52 0 10-4.04 10-9S17.52 2 12 2zm.88 12.2H9.2l-.02-.02c-.04-.06-.06-.14-.06-.22 0-.12.04-.24.12-.34l3.24-4.44h-3.2c-.22 0-.4-.16-.44-.38v-.04c0-.24.18-.42.42-.42h3.72c.04.04.08.1.1.16.02.08.04.16.02.24-.02.08-.04.14-.08.2L9.78 13.4h3.08c.24 0 .42.18.42.42 0 .22-.18.38-.4.38z" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
