"use client";

import { useState } from "react";

const faqItems = [
  {
    q: "C-ACN là gì và hoạt động như thế nào?",
    a: "CACN là hệ điều hành quản trị và hợp tác thống nhất cho mạng lưới Citics Agent trên toàn quốc.\n\nCACN kết nối môi giới bất động sản, chuyên viên tài chính, định giá và pháp lý vào một mạng lưới chung với chuẩn vận hành, phân vai rõ ràng và dữ liệu được ghi nhận trên nền tảng Citics Agent.\n\nNhờ đó, CACN bảo vệ quyền lợi các bên, nâng cao hiệu quả phối hợp và tạo nền tảng để Citics mở rộng dịch vụ trên quy mô toàn quốc.",
  },
  { q: "Điều kiện để tham gia C-ACN?", a: "Bạn cần đăng ký tài khoản trên app Citics Agent, hoàn thành khoá đào tạo cơ bản và được xác minh bởi đội ngũ C-ACN. Quy trình hoàn toàn miễn phí và được hỗ trợ từ A-Z." },
  { q: "Hoa hồng được tính như thế nào?", a: "Hoa hồng được ghi nhận cho từng dịch vụ trong cùng một giao dịch: môi giới mua bán, định giá, tín dụng, pháp lý. Bạn có thể tham gia nhiều vai trò để gia tăng thu nhập từ một BĐS duy nhất." },
  { q: "Tôi có cần kinh nghiệm môi giới không?", a: "Không bắt buộc. Citics cung cấp chương trình đào tạo miễn phí từ cơ bản đến nâng cao, cùng công cụ AI hỗ trợ và mạng lưới mentor giúp bạn bắt đầu sự nghiệp môi giới chuyên nghiệp." },
  { q: "Làm sao để liên hệ hỗ trợ?", a: "Bạn có thể liên hệ qua hotline 1900 633075, email cacn@citics.com.vn, hoặc trực tiếp qua app Citics Agent. Đội ngũ C-ACN hỗ trợ 24/7." },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-12 lg:py-16 bg-solutions" id="faq">
      <div className="max-w-[800px] mx-auto px-6 lg:px-[50px]">
        <h2 className="text-h2 font-extrabold tracking-[-0.5px] mb-10 reveal reveal-delay-1">
          Bạn cần biết thêm?
        </h2>
        <div className="space-y-3">
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className={`bg-white rounded-[20px] overflow-hidden shadow-[0_2px_10px_rgba(7,65,218,0.07)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 reveal reveal-delay-${Math.min(i + 1, 5)}`}>
                <button
                  type="button"
                  className="w-full text-left px-4 py-4 sm:px-6 sm:py-5 flex items-center justify-between font-extrabold text-[14px] sm:text-[15px]"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-question-${i}`}
                >
                  {item.q}
                  <span className={`text-xl text-blue ml-4 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`} aria-hidden="true">+</span>
                </button>
                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-question-${i}`}
                  className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-5" : "max-h-0"}`}
                >
                  <div className="px-4 sm:px-6 text-gray-600 text-sm leading-[1.7] whitespace-pre-line">
                    {item.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
