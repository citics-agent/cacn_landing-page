const iconSize = { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5" } as const;

const problems = [
  {
    title: "Thiếu nguồn hàng",
    desc: "Khan hiếm, phụ thuộc quan hệ cá nhân",
    icon: <svg {...iconSize}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>,
  },
  {
    title: "Thiếu nguồn khách",
    desc: "Không có hệ thống phân phối lead ổn định",
    icon: <svg {...iconSize}><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>,
  },
  {
    title: "Thiếu công cụ",
    desc: "Định giá, pháp lý, tài chính không tích hợp",
    icon: <svg {...iconSize}><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" /></svg>,
  },
  {
    title: "Thiếu hệ thống hợp tác",
    desc: "Không minh bạch vai trò, hoa hồng",
    icon: <svg {...iconSize}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></svg>,
  },
];

const solutions = [
  {
    title: "Nguồn hàng đa dạng",
    desc: "Ngân hàng, Sơ cấp, Thứ cấp",
    icon: <svg {...iconSize}><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg>,
  },
  {
    title: "Phân phối lead tự động",
    desc: "Hợp tác giữa các Agent",
    icon: <svg {...iconSize}><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg>,
  },
  {
    title: "Tích hợp một nền tảng",
    desc: "Định giá, pháp lý, tài chính",
    icon: <svg {...iconSize}><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>,
  },
  {
    title: "Mạng lưới chuẩn hoá",
    desc: "Ghi nhận vai trò, hoa hồng minh bạch",
    icon: <svg {...iconSize}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></svg>,
  },
];

export default function Comparison() {
  return (
    <section className="py-12 lg:py-16 bg-[#f0f4fa]" id="comparison">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-[50px]">
        <h2 className="text-h2 font-extrabold tracking-[-0.5px] mb-4 text-center text-blue reveal">
          Vì sao C-ACN được xây dựng?
        </h2>
        <p className="text-gray-500 text-center max-w-2xl mx-auto mb-14 leading-[1.7] reveal reveal-delay-1">
          Nỗi đau của thị trường — Môi giới hiện nay đang đối mặt với hàng loạt thách thức: nguồn hàng phân mảnh, khách hàng khó tiếp cận, công cụ rời rạc và thiếu một hệ thống hợp tác minh bạch.
        </p>

        {/* Mobile: paired rows — problem → solution */}
        <div className="mt-10 mb-10 md:hidden reveal">
          {/* Column headers */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <span className="text-sm font-extrabold text-amber">Vấn đề</span>
            <span className="text-sm font-extrabold text-blue text-right">Giải pháp</span>
          </div>

          {/* Paired rows */}
          <div className="space-y-3">
            {problems.map((prob, i) => {
              const sol = solutions[i];
              return (
                <div key={i} className="grid grid-cols-[1fr_auto_1fr] gap-2 items-center">
                  {/* Problem */}
                  <div className="rounded-xl bg-white px-3 py-3 shadow-[0_2px_10px_rgba(0,0,0,0.06)] text-center">
                    <div className="text-amber mx-auto mb-1.5 flex justify-center">{prob.icon}</div>
                    <strong className="text-[12px] font-bold text-gray-700 leading-tight block">{prob.title}</strong>
                  </div>

                  {/* Arrow */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0741DA" strokeWidth="2" strokeLinecap="round" className="shrink-0 opacity-30">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>

                  {/* Solution */}
                  <div className="rounded-xl bg-blue px-3 py-3 shadow-[0_2px_10px_rgba(7,65,218,0.15)] text-center">
                    <div className="text-white mx-auto mb-1.5 flex justify-center">{sol.icon}</div>
                    <strong className="text-[12px] font-bold text-white leading-tight block">{sol.title}</strong>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Desktop: full diagram */}
        <div className="mt-14 mb-14 reveal hidden md:block">
          {/* Labels */}
          <div className="flex justify-between mb-6 px-[60px]">
            <span className="text-base font-extrabold text-amber">Vấn đề thị trường</span>
            <span className="text-base font-extrabold text-blue">C-ACN giải quyết</span>
          </div>

          {/* Main diagram */}
          <div className="relative flex items-center justify-center">
            {/* SVG connector lines */}
            <svg className="absolute inset-0 w-full h-full z-[1] pointer-events-none" viewBox="0 0 896 456" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Sơ đồ kết nối: 4 vấn đề thị trường bên trái được C-ACN giải quyết bằng 4 giải pháp bên phải">
              <defs>
                <marker id="arr-gray" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                  <path d="M0,0 L8,4 L0,8 L2,4 Z" fill="#9ca3af" />
                </marker>
                <marker id="arr-blue" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                  <path d="M0,0 L8,4 L0,8 L2,4 Z" fill="#0741DA" />
                </marker>
              </defs>
              <polyline points="310,48 334,48 381,168" fill="none" stroke="#9ca3af" strokeWidth="1.5" markerEnd="url(#arr-gray)" />
              <polyline points="310,168 334,168 363,198" fill="none" stroke="#9ca3af" strokeWidth="1.5" markerEnd="url(#arr-gray)" />
              <polyline points="310,288 334,288 363,258" fill="none" stroke="#9ca3af" strokeWidth="1.5" markerEnd="url(#arr-gray)" />
              <polyline points="310,408 334,408 381,288" fill="none" stroke="#9ca3af" strokeWidth="1.5" markerEnd="url(#arr-gray)" />
              <polyline points="515,168 562,48 586,48" fill="none" stroke="#0741DA" strokeWidth="1.5" markerEnd="url(#arr-blue)" />
              <polyline points="533,198 562,168 586,168" fill="none" stroke="#0741DA" strokeWidth="1.5" markerEnd="url(#arr-blue)" />
              <polyline points="533,258 562,288 586,288" fill="none" stroke="#0741DA" strokeWidth="1.5" markerEnd="url(#arr-blue)" />
              <polyline points="515,288 562,408 586,408" fill="none" stroke="#0741DA" strokeWidth="1.5" markerEnd="url(#arr-blue)" />
            </svg>

            <div className="flex flex-col gap-6 z-[2] shrink-0 w-[310px]">
              {problems.map((item, i) => (
                <div key={i} className="flex items-center gap-3 group">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)] flex items-center justify-center shrink-0 text-amber group-hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)] group-hover:text-[#d4a000] transition-all">
                    {item.icon}
                  </div>
                  <div className="h-24 w-[250px] rounded-2xl bg-white flex flex-col items-center justify-center px-6 text-center shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:scale-[1.03] hover:shadow-[0_8px_32px_rgba(255,191,1,0.25)] transition-all">
                    <strong className="text-sm font-bold text-gray-600 leading-tight">{item.title}</strong>
                    <small className="text-xs text-gray-400 mt-1 leading-snug">{item.desc}</small>
                  </div>
                </div>
              ))}
            </div>

            <div className="z-[2] px-12 shrink-0">
              <div className="w-[180px] h-[180px] rounded-full p-1 bg-[conic-gradient(from_0deg,#0741DA,#11DAEF,#0741DA)] flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-[#0a1e5e] flex flex-col items-center justify-center gap-0.5 shadow-[0_8px_40px_rgba(7,65,218,0.3)]">
                  <div className="flex items-center -space-x-1 mb-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="z-[1]"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>
                  </div>
                  <span className="text-turquoise text-lg font-extrabold tracking-[0.08em]">C-ACN</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6 z-[2] shrink-0 w-[310px]">
              {solutions.map((item, i) => (
                <div key={i} className="flex items-center gap-3 justify-end group">
                  <div className="h-24 w-[250px] rounded-2xl bg-blue flex flex-col items-center justify-center px-6 text-center shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:scale-[1.03] hover:shadow-[0_8px_32px_rgba(7,65,218,0.35)] transition-all">
                    <strong className="text-sm font-bold text-white leading-tight">{item.title}</strong>
                    <small className="text-xs text-white/70 mt-1 leading-snug">{item.desc}</small>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)] flex items-center justify-center shrink-0 text-blue group-hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)] transition-all">
                    {item.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
