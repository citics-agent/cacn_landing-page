"use client";

import { useState, FormEvent } from "react";

const SCRIPT_URL = process.env.NEXT_PUBLIC_GSHEET_URL ?? "";

const agentRoles = [
  "Agent Buyer (Thứ cấp)",
  "Agent Buyer (Sơ cấp)",
  "Agent Listing",
  "Agent Mortgages",
  "Agent Value",
];

type Status = "idle" | "loading" | "success" | "error";

export default function EformMain() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [cityValue, setCityValue] = useState("");
  const [occupationValue, setOccupationValue] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    // Validate
    const newErrors: Record<string, string> = {};
    if (!fd.get("name")?.toString().trim()) newErrors.name = "Vui lòng nhập họ và tên";
    const phone = fd.get("phone")?.toString().trim() || "";
    if (!phone) newErrors.phone = "Vui lòng nhập số điện thoại";
    else if (!/^0\d{9}$/.test(phone.replace(/\s/g, ""))) newErrors.phone = "Số điện thoại phải đúng 10 số";
    if (!fd.get("city")) newErrors.city = "Vui lòng chọn thành phố";
    else if (fd.get("city") === "Khác" && !fd.get("cityOther")?.toString().trim()) newErrors.cityOther = "Vui lòng nhập tỉnh/thành phố";
    if (!fd.get("experience")) newErrors.experience = "Vui lòng chọn kinh nghiệm";

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setStatus("loading");

    const payload = {
      name: fd.get("name"),
      phone: phone.replace(/\s/g, ""),
      city: fd.get("city") === "Khác" ? fd.get("cityOther")?.toString().trim() : fd.get("city"),
      referral: fd.get("referral")?.toString().trim() || "",
      occupation: fd.get("occupation") === "Khác" ? fd.get("occupationOther")?.toString().trim() || "" : fd.get("occupation")?.toString().trim() || "",
      experience: fd.get("experience"),
      agentType: fd.getAll("agentType").join(", "),
      courseInterest: fd.get("courseInterest") === "on",
    };

    if (!SCRIPT_URL) {
      setStatus("error");
      return;
    }

    try {
      const res = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("success");
      setCityValue("");
      setOccupationValue("");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const successCard = status === "success";

  const inputClass = (name: string) =>
    `w-full border-[1.5px] rounded-xl px-3 py-2.5 md:px-4 md:py-3.5 text-sm md:text-[15px] focus:border-blue focus:shadow-[0_0_0_3px_rgba(7,65,218,0.12)] focus:outline-none transition-all ${
      errors[name] ? "border-red-400" : "border-gray-200"
    }`;

  return (
    <section className="grain relative py-12 lg:py-16 bg-gradient-hero" id="form1">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-[50px] relative z-10">
        <div className="text-center mb-10">
          <div className="text-xs font-bold text-amber tracking-[2.5px] uppercase mb-2 reveal">
            Đăng ký nhận tư vấn
          </div>
          <h2 className="text-h2 font-extrabold tracking-[-0.5px] text-white mb-3 reveal reveal-delay-1">
            Tham gia Citics Agent ngay hôm nay
          </h2>
          <p className="text-white/60 reveal reveal-delay-2">
            Điền thông tin bên dưới. Đội ngũ Citics Agent sẽ liên hệ bạn trong 24 giờ làm việc.
          </p>
        </div>

        <div className="bg-white rounded-[20px] p-4 md:p-8 max-w-3xl mx-auto shadow-[0_32px_80px_rgba(7,65,218,0.32)] reveal reveal-delay-3">
          {successCard ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-3">Đăng ký thành công!</h3>
              <p className="text-gray-500 mb-6">Đội ngũ Citics Agent sẽ liên hệ bạn trong 24 giờ làm việc.</p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="text-blue font-bold text-sm hover:underline"
              >
                Đăng ký thêm
              </button>
            </div>
          ) : (
          <form className="space-y-3 md:space-y-4" onSubmit={handleSubmit} noValidate>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="f-name" className="text-sm font-semibold text-gray-700 mb-1 block">Họ và tên <span className="text-red-400">*</span></label>
                <input id="f-name" type="text" name="name" placeholder="Nguyễn Văn A" aria-describedby={errors.name ? "err-name" : undefined} className={inputClass("name")} />
                {errors.name && <p id="err-name" className="text-red-400 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="f-phone" className="text-sm font-semibold text-gray-700 mb-1 block">Số điện thoại <span className="text-red-400">*</span></label>
                <input id="f-phone" type="tel" name="phone" placeholder="0901 234 567" maxLength={12} aria-describedby={errors.phone ? "err-phone" : undefined} className={inputClass("phone")} />
                {errors.phone && <p id="err-phone" className="text-red-400 text-xs mt-1">{errors.phone}</p>}
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="f-city" className="text-sm font-semibold text-gray-700 mb-1 block">Thành phố <span className="text-red-400">*</span></label>
                <select id="f-city" name="city" value={cityValue} onChange={(e) => setCityValue(e.target.value)} aria-describedby={errors.city ? "err-city" : undefined} className={`${inputClass("city")} appearance-none bg-white`}>
                  <option value="" disabled>Chọn thành phố</option>
                  <option>Hồ Chí Minh</option>
                  <option>Hà Nội</option>
                  <option>Đà Nẵng</option>
                  <option>Khác</option>
                </select>
                {errors.city && <p id="err-city" className="text-red-400 text-xs mt-1">{errors.city}</p>}
                {cityValue === "Khác" && (
                  <div className="mt-2">
                    <label htmlFor="f-cityOther" className="sr-only">Tỉnh/thành phố khác</label>
                    <input id="f-cityOther" type="text" name="cityOther" placeholder="Nhập tỉnh/thành phố" aria-describedby={errors.cityOther ? "err-cityOther" : undefined} className={inputClass("cityOther")} />
                    {errors.cityOther && <p id="err-cityOther" className="text-red-400 text-xs mt-1">{errors.cityOther}</p>}
                  </div>
                )}
              </div>
              <div>
                <label htmlFor="f-referral" className="text-sm font-semibold text-gray-700 mb-1 block">SĐT người giới thiệu</label>
                <input id="f-referral" type="tel" name="referral" placeholder="0901 234 567" className={inputClass("referral")} />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="f-occupation" className="text-sm font-semibold text-gray-700 mb-1 block">Nghề nghiệp hiện tại</label>
                <select id="f-occupation" name="occupation" value={occupationValue} onChange={(e) => setOccupationValue(e.target.value)} className={`${inputClass("occupation")} appearance-none bg-white`}>
                  <option value="" disabled>Chọn nghề nghiệp</option>
                  <option>Môi giới BĐS</option>
                  <option>Kinh doanh / Sales</option>
                  <option>Ngân hàng / Tài chính</option>
                  <option>Nhân viên văn phòng</option>
                  <option>Sinh viên</option>
                  <option>Tự do / Freelancer</option>
                  <option>Khác</option>
                </select>
                {occupationValue === "Khác" && (
                  <div className="mt-2">
                    <label htmlFor="f-occupationOther" className="sr-only">Nghề nghiệp khác</label>
                    <input id="f-occupationOther" type="text" name="occupationOther" placeholder="Nhập nghề nghiệp" className={inputClass("occupationOther")} />
                  </div>
                )}
              </div>
              <div>
                <label htmlFor="f-experience" className="text-sm font-semibold text-gray-700 mb-1 block">Kinh nghiệm <span className="text-red-400">*</span></label>
                <select id="f-experience" name="experience" defaultValue="" aria-describedby={errors.experience ? "err-experience" : undefined} className={`${inputClass("experience")} appearance-none bg-white`}>
                  <option value="" disabled>Chọn kinh nghiệm</option>
                  <option>Chưa có kinh nghiệm</option>
                  <option>Dưới 1 năm</option>
                  <option>1-3 năm</option>
                  <option>Trên 3 năm</option>
                </select>
                {errors.experience && <p id="err-experience" className="text-red-400 text-xs mt-1">{errors.experience}</p>}
              </div>
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-2 block">
                Loại Agent <span className="text-gray-400 font-normal text-xs">Chọn một hoặc nhiều vai trò</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {agentRoles.map((role) => (
                  <label key={role} className="cursor-pointer">
                    <input type="checkbox" name="agentType" value={role} className="peer hidden" />
                    <span className="inline-block border-[1.5px] border-gray-200 rounded-full px-4 py-2.5 text-sm font-medium peer-checked:bg-blue peer-checked:text-white peer-checked:border-blue hover:border-blue/30 transition-all">
                      {role}
                    </span>
                  </label>
                ))}
              </div>
            </div>
            <label className="flex items-start gap-2.5 text-sm text-gray-600">
              <input type="checkbox" name="courseInterest" className="mt-1 accent-blue" />
              <span>Tôi có quan tâm đến khoá học Chứng nhận bồi dưỡng kiến thức môi giới BĐS</span>
            </label>
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-amber text-blue font-bold py-4 rounded-[50px] hover:bg-amber-hover hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,191,1,0.4)] active:bg-amber-active active:translate-y-0 transition-all text-sm disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
            >
              {status === "loading" ? "Đang gửi..." : "Nhận tư vấn miễn phí"}
            </button>
            {status === "error" && (
              <p className="text-red-400 text-sm text-center">Có lỗi xảy ra, vui lòng thử lại.</p>
            )}
          </form>
          )}
        </div>
      </div>
    </section>
  );
}
