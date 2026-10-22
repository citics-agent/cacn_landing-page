# Citics Agent Network Landing Page (agentnetwork)

Landing page giới thiệu mạng lưới hợp tác C-ACN (Citics Agent Cooperation Network) cho môi giới BĐS.

- Live: https://agentnetwork.citics.vn
- Repo: `citics-agent/cacn_landing-page`, branch `main` (bản này)
- Branch `v2.1` là trang khác (join-agent, Next.js). Đừng nhầm hai branch.
- Stack: HTML + CSS + JavaScript thuần, không cần build

## Chạy trên máy

Không cần cài gì. Từ thư mục `docs/` chạy:

```bash
git clone https://github.com/citics-agent/cacn_landing-page.git
cd cacn_landing-page
git checkout main
cd docs
python3 -m http.server 8000
```

Mở http://localhost:8000.

## Cấu trúc

```
docs/
├── index.html              Toàn bộ nội dung trang
├── style.css               Giao diện
├── main.js                 Hiệu ứng, form đăng ký (GOOGLE_SCRIPT_URL ở khoảng dòng 601)
├── google-apps-script.js   Bản sao code backend nhận form (xem bên dưới)
└── assets/                 Ảnh, banner, logo
```

Sửa chữ: `docs/index.html`. Sửa màu, bố cục: `docs/style.css`. Thay ảnh: bỏ file mới vào `docs/assets/` rồi đổi đường dẫn trong `index.html`.

## Đưa lên live

Sửa trong `docs/`, commit và push lên `main`. CI/CD tự cập nhật site, chờ vài phút rồi Ctrl+F5. Site không đổi: xem tab Actions của repo, rồi báo Tech hoặc Jayden.

## Form đăng ký

`docs/main.js` POST JSON sang Google Apps Script. Code Apps Script mẫu nằm ở `docs/google-apps-script.js`: ghi dữ liệu vào Google Sheet (tab "Agent Registrations", "Store Registrations") và gửi email thông báo.

Đổi người nhận email hoặc Sheet: sửa `CONFIG` trong Apps Script, Deploy → **New deployment** (Web app, Execute as: Me, Anyone), rồi cập nhật `GOOGLE_SCRIPT_URL` trong `docs/main.js` nếu URL đổi.

## Lưu ý an toàn

- Repo đang public: không commit token, key, mật khẩu.
- Không force-push, không xoá branch `main`.
- Thay đổi lớn: tạo branch riêng, test xong mới merge vào `main`.
