"use client";

import Image from "next/image";
import { useState } from "react";
import { BASE_PATH } from "@/lib/config";

const steps = [
  {
    num: 1, title: "Tải app & Đăng ký dịch vụ",
    desc: "Tải ứng dụng Citics Agent trên App Store (iOS) hoặc Google Play (Android) về điện thoại và đăng ký dịch vụ.",
    img: `${BASE_PATH}/assets/step1-main.png`,
    subSteps: [
      { num: "1.1", title: "Đăng ký dịch vụ trên app", img: `${BASE_PATH}/assets/dangkydichvu1.jpg` },
      { num: "1.2", title: "Bấm xác nhận & đăng ký", img: `${BASE_PATH}/assets/dangkydichvu2.jpg` },
      { num: "1.3", title: "Xác thực thông tin tài khoản lần đầu", img: `${BASE_PATH}/assets/dangkydichvu3.jpg` },
      { num: "1.4", title: "Xác thực qua CCCD", img: `${BASE_PATH}/assets/dangkydichvu4.jpg` },
    ],
  },
  { num: 2, title: "Hội nhập & Đào tạo", desc: "Nhận cuộc gọi tư vấn từ đội ngũ C-ACN và xác nhận lịch đào tạo phù hợp.", img: `${BASE_PATH}/assets/step2-main.png` },
  { num: 3, title: "Thực hiện đào tạo", desc: "Tham gia khóa đào tạo online/offline để nắm vững quy trình và công cụ hỗ trợ.", img: `${BASE_PATH}/assets/step3-main.png` },
  { num: 4, title: "Hoàn thành & Kích hoạt vai trò", desc: "Hoàn tất đào tạo, kích hoạt tài khoản Agent và bắt đầu hoạt động kinh doanh.", img: `${BASE_PATH}/assets/step4-main.png` },
];

export default function HowToJoin() {
  const [activeStep, setActiveStep] = useState(0);
  const [activeSubStep, setActiveSubStep] = useState<string | null>(null);

  const current = steps[activeStep];
  const displayImg = activeSubStep
    ? current.subSteps?.find((s) => s.num === activeSubStep)?.img
    : current.img;

  return (
    <section className="py-12 lg:py-16 bg-solutions" id="journey">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-[50px]">
        <h2 className="text-h2 font-extrabold tracking-[-0.5px] mb-10 reveal reveal-delay-1">
          4 bước để tham gia
        </h2>

        <div className="flex flex-col lg:flex-row gap-10 reveal reveal-delay-2">
          {/* Left: Image */}
          <div className="flex-1 flex items-center justify-center order-first lg:order-none">
            <div className="relative w-full max-w-[280px] sm:max-w-sm">
              <Image
                src={displayImg || current.img}
                alt={current.title}
                width={400}
                height={700}
                className="w-full h-auto rounded-[20px] shadow-[0_20px_60px_rgba(7,65,218,0.22)]"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right: Steps with vertical timeline */}
          <div className="flex-1 relative">
            <div className="space-y-3">
              {steps.map((step, i) => (
                <div key={i}>
                  <button
                    type="button"
                    onClick={() => { setActiveStep(i); setActiveSubStep(null); }}
                    className={`w-full text-left p-4 sm:p-5 rounded-[20px] transition-all duration-300 ${
                      activeStep === i
                        ? "bg-blue text-white shadow-[0_12px_32px_rgba(7,65,218,0.3)]"
                        : "bg-white border border-gray-200 hover:border-blue/20 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
                    }`}
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <span className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm font-black flex-shrink-0 relative z-[1] ${
                        activeStep === i ? "bg-amber text-blue" : "bg-gray-100 text-gray-500"
                      }`}>
                        {step.num}
                      </span>
                      <div>
                        <h3 className="font-extrabold text-[15px] sm:text-base">{step.title}</h3>
                        {activeStep === i && (
                          <p className="text-body-sm mt-1.5 text-white/70 leading-relaxed">{step.desc}</p>
                        )}
                      </div>
                    </div>
                  </button>

                  {activeStep === i && step.subSteps && (
                    <div className="ml-10 sm:ml-14 mt-2 space-y-1">
                      {step.subSteps.map((sub) => (
                        <button
                          type="button"
                          key={sub.num}
                          onClick={() => setActiveSubStep(sub.num)}
                          className={`w-full text-left text-sm px-4 py-2.5 rounded-xl transition-all duration-300 ${
                            activeSubStep === sub.num
                              ? "bg-blue-light text-white font-semibold"
                              : "text-gray-500 hover:bg-gray-100"
                          }`}
                        >
                          <span className="font-bold mr-2">{sub.num}</span>
                          {sub.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
