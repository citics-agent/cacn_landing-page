export default function FinalCta() {
  return (
    <section
      className="grain relative py-12 lg:py-16 text-center bg-gradient-cta"
    >
      <div className="max-w-[800px] mx-auto px-6 lg:px-[50px] relative z-10">
        <h2 className="text-h2 font-extrabold tracking-[-0.5px] text-white mb-4 reveal">
          Sẵn sàng phát triển sự nghiệp môi giới cùng Citics?
        </h2>
        <p className="text-white/60 mb-8 reveal reveal-delay-1">
          Đăng ký ngay để bắt đầu hành trình chuyên nghiệp của bạn
        </p>
        <div className="reveal reveal-delay-2">
          <a
            href="#form1"
            className="inline-block bg-amber text-blue font-bold text-base px-10 py-4 rounded-[50px] hover:bg-amber-hover hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,191,1,0.4)] active:bg-amber-active active:translate-y-0 transition-all"
          >
            Nhận tư vấn miễn phí
          </a>
        </div>
      </div>
    </section>
  );
}
