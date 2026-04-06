export default function FinalCta() {
  return (
    <section
      className="grain relative py-12 lg:py-20 text-center bg-gradient-cta"
    >
      <div className="max-w-[800px] mx-auto px-6 lg:px-[50px] relative z-10">
        <h2 className="text-h2 font-extrabold tracking-[-0.5px] text-white mb-4 reveal">
          Sẵn sàng phát triển sự nghiệp môi giới cùng Citics?
        </h2>
        <p className="text-white/60 mb-8 reveal reveal-delay-1">
          Đăng ký ngay để bắt đầu hành trình chuyên nghiệp của bạn
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center items-center reveal reveal-delay-2">
          <a
            href="#form1"
            className="w-full sm:w-auto text-center bg-amber text-blue font-bold text-base px-10 py-4 rounded-[50px] hover:bg-amber-hover hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,191,1,0.4)] active:bg-amber-active active:translate-y-0 transition-all"
          >
            Nhận tư vấn
          </a>
          <a
            href="https://agent.citics.vn/dang-ky"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center border-2 border-white/50 text-white font-bold text-base px-10 py-4 rounded-[50px] hover:border-white hover:bg-white/10 hover:-translate-y-0.5 active:bg-white/[0.18] active:translate-y-0 transition-all"
          >
            Tạo tài khoản miễn phí
          </a>
        </div>
      </div>
    </section>
  );
}
