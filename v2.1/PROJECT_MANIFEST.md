# 🧠 C-ACN LANDING PAGE: KNOWLEDGE MANIFEST

> **Mục đích:** File này lưu trữ bối cảnh (context), trạng thái hiện tại và các quyết định kỹ thuật của dự án. AI đọc file này trước tiên để lấy ngữ cảnh mà không cần phải cào lại toàn bộ code gây tốn token.

## 1. 🏗️ ARCHITECTURE & TECH STACK
- **Framework:** Next.js 16 (App Router) + React 19.
- **Styling:** Tailwind CSS 4.
- **Deployment:** Static Export (`out/` folder đổi thành `docs/` build), Host trên Github Pages (`agent.citics.vn`). Project base path khi deploy Github Pages: `/cacn_landing-page`.
- **Form Submission (EformMain.tsx):** 
  - Gửi dữ liệu về Google Sheets thông qua Google Apps Script (`no-cors` mode).
  - Có tích hợp bắn notification về Telegram.
  - *Lưu ý hiện tại:* Có 2 biến `SCRIPT_URL` trong file, nhưng App đang ăn vào biến cục bộ (Local scope) nằm bên trong hàm `handleSubmit`. Nó đang chạy ổn định.

## 2. 🗂️ FILE STRUCTURE HIGHLIGHTS
- `src/components/sections/` chứa các block nội dung của Landing Page (Hero, EformMain, ...).
- `src/lib/policies.ts`: Nơi config các banner/chính sách. Cần bỏ ảnh vào `public/assets/policies/{id}/` rồi chạy script tự động convert ảnh sang định dạng WebP tối ưu.
- `src/app/layout.tsx`: Nơi chứa toàn bộ cấu hình SEO, Metadata, OpenGraph phục vụ share lên Social.

## 3. 🎯 CURRENT STATUS (Cập nhật: T4/2026)
- **Status:** Landing Page form submission đã được debug thành công. Data đổ về bảng tính bình thường qua App Script.
- **Pending/Todo (Option cho đợt review sau):** 
  - Refactor lại `EformMain.tsx` để xóa biến dư thừa `SCRIPT_URL`.
  - Có thể config chuẩn PWA/manifest.json và cập nhật UI section theo version thiết kế mới nhất nếu phát sinh.

## 4. 🤖 AI INSTRUCTIONS (For Next Encounter)
- Đừng thay đổi `no-cors` fetch ở App Script form, vì nó xử lý triệt để cross-origin issue dù không read được response.
- Nếu build lỗi ảnh, kiểm tra folder `policies`.
- Đọc lướt qua setup trong `README.md` nếu động chạm đến việc setup/deploy.
