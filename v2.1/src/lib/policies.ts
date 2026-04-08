import { BASE_PATH } from "./config";

/**
 * Thêm campaign mới: thêm 1 dòng vào đây + tạo folder public/assets/policies/{id}/
 * rồi drop desktop.png + mobile.png vào.
 */
export const policies = [
  { id: "overview", label: "Tổng quan" },
  { id: "km-gioi-thieu", label: "KM Giới thiệu" },
  { id: "km-ch", label: "KM CH" },
  { id: "km-cm", label: "KM CM" },
] as const;

export type PolicyId = (typeof policies)[number]["id"];

export function policyImage(id: string, variant: "desktop" | "mobile") {
  return {
    webp: `${BASE_PATH}/assets/policies/${id}/${variant}.webp`,
    png: `${BASE_PATH}/assets/policies/${id}/${variant}.png`,
  };
}
