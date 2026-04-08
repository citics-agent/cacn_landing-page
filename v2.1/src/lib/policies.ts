import { BASE_PATH } from "./config";

/**
 * Thêm campaign mới: thêm 1 dòng vào đây + tạo folder public/assets/policies/{id}/
 * rồi drop desktop.{png,jpg,jpeg} + mobile.{png,jpg,jpeg} vào.
 */
export const policies = [
  { id: "overview", label: "Tổng quan", ext: "png" as const },
  { id: "km-gioi-thieu", label: "KM Giới thiệu", ext: "jpg" as const },
  { id: "km-ch", label: "KM CH", ext: "jpg" as const },
  { id: "km-cm", label: "KM CM", ext: "jpg" as const },
];

export type PolicyId = (typeof policies)[number]["id"];

export function policyImage(id: string, variant: "desktop" | "mobile", ext: "png" | "jpg" | "jpeg" = "png") {
  return {
    webp: `${BASE_PATH}/assets/policies/${id}/${variant}.webp`,
    fallback: `${BASE_PATH}/assets/policies/${id}/${variant}.${ext}`,
  };
}
