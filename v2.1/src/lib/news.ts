import { BASE_PATH } from "./config";

/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  NEWS DATA — Cập nhật tin tức hiển thị trên landing page    ║
 * ╚══════════════════════════════════════════════════════════════╝
 *
 * Cách thêm tin mới:
 *   1. Thêm object vào ĐẦU array (tin mới nhất hiển thị trước)
 *   2. Mỗi tin cần 3 field:
 *      - title: Tiêu đề bài báo (hiển thị tối đa 2 dòng trên card)
 *      - img:   URL ảnh thumbnail (khuyến nghị >= 700px width, tỉ lệ ~16:10)
 *               - Dùng URL external: "https://..."
 *               - Dùng ảnh local:    `${BASE_PATH}/assets/ten-file.jpg`
 *      - url:   Link bài báo gốc (mở tab mới khi click)
 *   3. Build lại: npm run build
 *
 * Ví dụ:
 *   {
 *     title: "Tiêu đề tin mới",
 *     img: "https://example.com/thumbnail.jpg",
 *     url: "https://example.com/bai-viet",
 *   },
 */
export const newsItems = [
  {
    title: "Citics và VPBank hợp tác xây dựng hệ sinh thái tài chính & bất động sản số",
    img: "https://cafefcdn.com/zoom/700_438/203337114487263232/2025/9/23/photo1758595209303-1758595209411563251734-1758620272912240529498.jpg",
    url: "https://cafef.vn/citics-va-vpbank-hop-tac-xay-dung-he-sinh-thai-tai-chinh-bat-dong-san-so-188250923163751796.chn",
  },
  {
    title: "Citics ra mắt Trợ lý AI CiCi — Tiên phong ứng dụng AI vào nghiệp vụ BĐS & tài chính",
    img: "https://c-content.citics.vn/wp-content/uploads/2025/12/KV-AI_ver-Citics-Group_Horizonal_thumb-3-scaled.png",
    url: "https://citics.vn/tin-tuc/citics-ra-mat-tro-ly-ai-cici-tien-phong-ung-dung-ai-vao-nghiep-vu-bat-dong-san-tai-chinh",
  },
  {
    title: "BHS Property và Citics ký kết hợp tác chiến lược, triển khai mô hình phân phối mới",
    img: "https://c-content.sgp1.digitaloceanspaces.com/wp-content/uploads/2026/01/12091614/BHS05345-scaled.jpg",
    url: "https://citics.vn/tin-tuc/bhs-property-va-citics-ky-ket-hop-tac-chien-luoc-trien-khai-mo-hinh-phan-phoi-moi",
  },
  {
    title: "Citics bắt tay TIEC: Môi giới BĐS được \"tiếp sức\" bằng công nghệ và kiến thức chuyên sâu",
    img: "https://c-content.citics.vn/wp-content/uploads/2025/09/IMG_7268-min-1.png",
    url: "https://citics.vn/chi-tiet-tuyen-dung/4413",
  },
  {
    title: "Startup công nghệ BĐS Việt huy động thành công hơn 2 triệu USD vòng pre-series A",
    img: `${BASE_PATH}/assets/news-vneconomy.jpeg`,
    url: "https://vneconomy.vn/mot-startup-cong-nghe-bat-dong-san-viet-huy-dong-thanh-cong-hon-2-trieu-usd-von-vong-pre-series-a.htm",
  },
];
