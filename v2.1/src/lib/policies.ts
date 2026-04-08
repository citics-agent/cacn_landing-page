import { BASE_PATH } from "./config";

/**
 * Thêm campaign mới: thêm 1 dòng vào đây + tạo folder public/assets/policies/{id}/
 * rồi drop desktop.{png,jpg,jpeg} + mobile.{png,jpg,jpeg} vào.
 */
export const policies = [
  { id: "overview", label: "Chính sách hoa hồng", ext: "jpg" as const },
  { id: "referral", label: "Thưởng giới thiệu", ext: "jpg" as const },
  { id: "khuyenmaihomes", label: "Thưởng nóng niêm yết", ext: "jpg" as const },
  { id: "khuyenmaimortgages", label: "Thưởng vay thế chấp", ext: "jpg" as const },
];

export type PolicyId = (typeof policies)[number]["id"];

export function policyImage(id: string, variant: "desktop" | "mobile", ext: "png" | "jpg" | "jpeg" = "png") {
  return {
    webp: `${BASE_PATH}/assets/policies/${id}/${variant}.webp`,
    fallback: `${BASE_PATH}/assets/policies/${id}/${variant}.${ext}`,
  };
}
