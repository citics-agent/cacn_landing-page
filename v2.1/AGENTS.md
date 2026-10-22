<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

## 📦 Project Context — CACN Landing Page v2.1

### Stack
- **Framework**: Next.js 16 (static export) → output: `out/`
- **Deploy**: push lên branch `v2.1` thì CI/CD tự build và cập nhật site join-agent.citics.vn (xác nhận 2026-10-22). Ghi chú cũ về zip `out/` đẩy lên server không còn là quy trình chính
- **Styling**: Tailwind CSS
- **Backend**: Google Apps Script (không có server riêng)

### Architecture
```
Browser (Next.js static) → POST → Google Apps Script Web App
                                       ↓              ↓
                                  Google Sheet    Telegram Bot
```

### Key Config
| Item | Value / Location |
|---|---|
| Apps Script URL | Hardcoded trong `src/components/sections/EformMain.tsx` line 5 |
| Google Sheet | Tab: `Registrations` |
| Telegram Bot | **Đã revoke (2026-10-22), hiện không còn thông báo Telegram.** Các dòng Telegram bên dưới chỉ là lịch sử |
| Telegram Group | `[Bot] CACN Registration` — type: **supergroup** |
| Telegram Chat ID | `-1003853673796` (supergroup, đã verify 2026-04-13) |

> ⚠️ **QUAN TRỌNG**: `NEXT_PUBLIC_GSHEET_URL` **không được code đọc**. URL Apps Script nằm cứng trong `EformMain.tsx` (biến `SCRIPT_URL`). Không cần file `.env` để chạy hay build.

### Deployment Checklist
1. Sửa code → `npm run dev` kiểm tra (`npm run build` nếu cần thử build)
2. Commit và push lên `v2.1`, CI/CD tự deploy. Không thấy đổi: xem tab Actions của repo
3. Nếu tạo **new deployment** trên Apps Script → phải update URL trong `EformMain.tsx` rồi push

Xem thêm `README.md` ở thư mục gốc của repo để biết cách sửa từng mục nội dung.

### Incidents Log
| Date | Issue | Root Cause | Fix |
|---|---|---|---|
| 2026-04-13 | E-form lỗi sau khi publish | `NEXT_PUBLIC_GSHEET_URL` = `""` trên server do thiếu `.env.local` | Hardcode URL trực tiếp trong `EformMain.tsx` |
| 2026-04-13 | Telegram không nhận noti | Group upgrade lên Supergroup → Chat ID đổi từ `-5271365897` → `-1003853673796` | Cập nhật Chat ID trong Apps Script + redeploy |
| 2026-04-13 | Telegram Bot privacy mode | Bot không nhận messages thường trong group | Tắt Privacy Mode qua @BotFather → kick & add lại bot |
