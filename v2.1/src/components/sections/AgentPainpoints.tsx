const painpoints = [
  "Làm nhiều việc, nhiều vai nhưng thu nhập không tăng tương xứng",
  "Có khách nhưng thiếu nguồn hàng hoặc ngược lại, làm giảm cơ hội chốt deal",
  "Không kiểm soát được toàn bộ giao dịch, dễ bị mất khách, mất deal mà không biết lý do",
  'Dễ bị "cắt cầu", mất quyền lợi khi hợp tác. Khi xảy ra tranh chấp không được bảo vệ',
  "Thiếu công cụ và mạng lưới hỗ trợ, khó mở rộng hay gia tăng thu nhập bền vững",
];

export default function AgentPainpoints() {
  return (
    <section className="grain relative py-12 lg:py-20 bg-gradient-hero overflow-hidden" id="painpoints">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-[50px] relative z-10">
        <h2 className="text-h2 font-extrabold tracking-[-0.5px] text-white text-center mb-12 reveal">
          Dù ở vai trò nào, phần lớn môi giới đều gặp
          <br />
          <span className="text-amber">những khó khăn chung</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 reveal reveal-delay-1">
          {painpoints.map((text, i) => (
            <div
              key={i}
              className={`group bg-white/[0.04] border border-white/[0.08] rounded-2xl px-4 py-4 sm:px-6 sm:py-6 hover:bg-white/[0.1] hover:border-amber/30 hover:shadow-[0_12px_40px_rgba(255,191,1,0.15)] hover:scale-[1.03] transition-all duration-300 cursor-default ${
                i === painpoints.length - 1 ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex gap-3 items-baseline">
                <span className="text-[15px] font-black text-amber tracking-wide shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-amber text-[15px] leading-relaxed transition-all duration-300">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-h3 font-extrabold tracking-[-0.5px] text-white text-center mt-14 max-w-3xl mx-auto leading-[1.3] reveal reveal-delay-2">
          Citics cung cấp hệ điều hành quản trị và hợp tác thống nhất {" "}
          <span className="text-amber">cho mạng lưới môi giới trên toàn quốc.</span>
        </h3>
        <div className="flex justify-center mt-6 reveal reveal-delay-3">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.25">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
