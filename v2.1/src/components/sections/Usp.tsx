const uspItems = [
  {
    title: "Công cụ & đào tạo miễn phí",
    desc: "Truy cập 32 triệu dữ liệu BĐS đã được số hoá. Tra cứu nhanh chóng nhờ trợ lý AI CiCi. Tham gia các chương trình đào tạo phát triển nghề.",
    blob: "usp-blob-1",
  },
  {
    title: "Hoa hồng không giới hạn",
    desc: "Gia tăng thu nhập với cùng một BĐS từ nhiều dịch vụ: định giá, vay thế chấp, mua bán và dịch vụ hậu giao dịch.",
    blob: "usp-blob-2",
  },
  {
    title: "Chuẩn hoá hợp tác",
    desc: "Phân vai rõ ràng giữa các bên. Quy trình hợp tác chuẩn hoá trên hệ thống. Dữ liệu giao dịch minh bạch.",
    blob: "usp-blob-3",
  },
  {
    title: "Đảm bảo tuân thủ & quyền lợi",
    desc: "Quyền lợi được ghi nhận và bảo vệ bằng hệ thống. Hỗ trợ môi giới đủ điều kiện hoạt động theo chuẩn pháp lý.",
    blob: "usp-blob-4",
  },
];

export default function Usp() {
  return (
    <section className="py-12 lg:py-20 bg-white" id="usp">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-[50px]">
        <div className="text-xs font-bold text-blue tracking-[2.5px] uppercase mb-2 reveal">
          Why Citics
        </div>
        <h2 className="text-h2 font-extrabold tracking-[-0.5px] leading-[1.2] mb-12 reveal reveal-delay-1">
          Vì sao hàng nghìn môi giới chọn<br />Citics Agent để phát triển sự nghiệp?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {uspItems.map((item, i) => (
            <div
              key={i}
              className={`relative bg-blue rounded-[20px] p-6 min-h-[280px] text-white flex flex-col justify-between overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(7,65,218,0.35)] transition-all duration-300 reveal reveal-delay-${i + 1}`}
            >
              <div className={`usp-blob ${item.blob}`} />
              <div className="relative z-10">
                <h3 className="text-[22px] font-extrabold mb-3">{item.title}</h3>
              </div>
              <p className="relative z-10 text-white/80 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
