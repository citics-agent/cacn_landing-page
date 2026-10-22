# Citics Join Agent Landing Page (C-ACN v2.1)

Landing page đăng ký tham gia mạng lưới hợp tác C-ACN (Citics Agent Cooperation Network) cho môi giới BĐS: quản lý đội nhóm, kết nối mạng lưới, tăng thu nhập hoa hồng.

- Live: https://join-agent.citics.vn (host trên Vercel của Citics do team Tech quản lý, CI/CD tự cập nhật khi push)
- Repo: `citics-agent/cacn_landing-page`, branch `v2.1` (bản này)
- Branch `main` là trang khác (agentnetwork, HTML thuần). Đừng nhầm hai branch.
- Stack: Next.js 16 (static export) + React 19 + Tailwind CSS 4 + TypeScript

## Chạy trên máy

Cần Node.js 20 trở lên.

```bash
git clone https://github.com/citics-agent/cacn_landing-page.git
cd cacn_landing-page
git checkout v2.1
cd v2.1
cp .env.example .env.local
npm install
npm run dev
```

Mở http://localhost:3000/cacn_landing-page.

Biến môi trường trong `.env.local`:

| Biến | Ý nghĩa |
|---|---|
| `NEXT_PUBLIC_GSHEET_URL` | URL web app Google Apps Script nhận form đăng ký |
| `NEXT_PUBLIC_BASE_PATH` | Base path của trang, mặc định `/cacn_landing-page` |

Lấy `NEXT_PUBLIC_GSHEET_URL` tại: mở Google Sheet nhận lead của Join Agent → Extensions → Apps Script → Deploy → Manage deployments → copy Web app URL (xin quyền Sheet từ Jayden). Không điền token/key vào các biến `NEXT_PUBLIC_*` vì chúng lộ ra trình duyệt.

## Lệnh

| Lệnh | Việc làm |
|---|---|
| `npm run dev` | Chạy dev |
| `npm run build` | Đổi ảnh chính sách sang WebP rồi build tĩnh ra `out/` |
| `npm run convert:policies` | Chỉ đổi ảnh chính sách PNG/JPG sang WebP |
| `npm run lint` | Kiểm tra ESLint |

## Cấu trúc

```
v2.1/
├── public/assets/           Ảnh, banner, chính sách
│   └── policies/{id}/       Banner desktop + mobile của từng chính sách
├── src/
│   ├── app/                 page, layout, globals.css
│   ├── components/sections/ Các section (Hero, Policies, Faq...)
│   └── lib/                 policies.ts (dữ liệu chính sách), config.ts (hotline, email, địa chỉ)
└── scripts/convert-policies.mjs   Đổi ảnh sang WebP
```

## Việc MKT hay làm

**Thêm banner chính sách mới**
1. Thêm một mục vào `v2.1/src/lib/policies.ts`.
2. Tạo thư mục `v2.1/public/assets/policies/{id}/`.
3. Bỏ `desktop.png` (hoặc `.jpg`) và `mobile.png` vào thư mục đó.
4. Chạy `npm run build` (tự đổi sang WebP).

**Đổi hotline, email, địa chỉ**: sửa `v2.1/src/lib/config.ts`.

**Tracking**: TikTok Pixel đã gắn, event `SubmitForm` bắn khi đăng ký thành công.

## Đưa lên live

1. Sửa code, chạy thử bằng `npm run dev`.
2. Commit và push lên branch `v2.1`.
3. CI/CD tự build và cập nhật site (`.github/workflows/deploy.yml` build lên GitHub Pages, base path `/cacn_landing-page`; site live join-agent.citics.vn chạy trên Vercel của Tech). Chờ vài phút rồi Ctrl+F5.

Sau vài phút site không đổi: xem tab Actions của repo, rồi báo Tech hoặc Jayden.

## Lưu ý an toàn

- Repo đang public: không commit token, key, mật khẩu, không commit `.env.local`.
- Không force-push, không xoá branch `main` hay `v2.1`.
- Thay đổi lớn: tạo branch riêng, test xong mới merge vào `v2.1`.
