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

## Sửa nội dung từng mục

Mọi nội dung nằm trong `docs/index.html`. Tìm theo `id` của mục (Ctrl+F). Số dòng dưới đây chỉ là gần đúng, có thể lệch khi file thay đổi.

| Mục trên trang | Tìm trong `docs/index.html` | Cách sửa |
|---|---|---|
| Chính sách (5 tab: Tổng quan, Mortgages, Value, Buyer Thứ cấp, Buyer Sơ cấp) | `id="policies"`, khoảng dòng 751-775 | Mỗi tab là một ảnh SVG `docs/assets/policy-*-new.svg`. Đổi chính sách: thay file ảnh (giữ nguyên tên) hoặc đổi `src` của thẻ `<img>` |
| Hình ảnh hoạt động | Khoảng dòng 933-963, 11 thẻ `<img src="assets/events/...">` | Bỏ ảnh mới vào `docs/assets/events/`, thêm một thẻ `<img>` mới giống các thẻ có sẵn |
| Tin tức | Khoảng dòng 1169 trở đi, các khối `news-card` | Mỗi tin có ảnh (`src`, thường là link ngoài), tiêu đề trong `<h4>`, link bài trong thẻ `<a class="link">`. Thêm tin: sao chép một khối `news-card` rồi sửa |
| Câu hỏi thường gặp, hotline, email | Khoảng dòng 1155 và 1333-1341 | Sửa chữ trực tiếp. Hotline và email có ở cả phần câu hỏi lẫn chân trang, nhớ sửa cả hai |
| Form đăng ký, nơi nhận lead | `docs/main.js`, `GOOGLE_SCRIPT_URL` khoảng dòng 601 | Trỏ tới Apps Script ghi vào Google Sheet (tab "Agent Registrations" và "Store Registrations") |

Ảnh mới nên dưới 500 KB, rộng từ 700 px. Nếu có file `.webp`, nên giữ cả `.webp` lẫn `.jpg/.png` như các ảnh hiện có.

## Đưa lên live

Sửa trong `docs/`, commit và push lên `main`. CI/CD tự cập nhật site, chờ vài phút rồi Ctrl+F5. Site không đổi: xem tab Actions của repo, rồi nhờ AI (Claude Code, ChatGPT...) kiểm tra: đưa link repo và mô tả lỗi. Chỉ báo Tech nếu AI xác định lỗi nằm ở phía Vercel hoặc domain.

## Form đăng ký

`docs/main.js` POST JSON sang Google Apps Script. Code Apps Script mẫu nằm ở `docs/google-apps-script.js`: ghi dữ liệu vào Google Sheet (tab "Agent Registrations", "Store Registrations") và gửi email thông báo.

Đổi người nhận email hoặc Sheet: sửa `CONFIG` trong Apps Script, Deploy → **New deployment** (Web app, Execute as: Me, Anyone), rồi cập nhật `GOOGLE_SCRIPT_URL` trong `docs/main.js` nếu URL đổi.

## Lưu ý an toàn

- Repo đang public: không commit token, key, mật khẩu.
- Không force-push, không xoá branch `main`.
- Thay đổi lớn: tạo branch riêng, test xong mới merge vào `main`.
