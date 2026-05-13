<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

## 📦 Project Context — CACN Landing Page v2.1

### Stack
- **Framework**: Next.js 16 (static export) → output: `out/`
- **Deploy**: Folder `out/` được đẩy lên server cty dưới path `/cacn_landing-page`
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
| Telegram Bot | `@CACN_Admin_bot` (ID: 8552567496) |
| Telegram Group | `[Bot] CACN Registration` — type: **supergroup** |
| Telegram Chat ID | `-1003853673796` (supergroup, đã verify 2026-04-13) |

> ⚠️ **QUAN TRỌNG**: `NEXT_PUBLIC_GSHEET_URL` trong `.env.local` **không được commit** và **không có trên server**. URL Apps Script phải hardcode trực tiếp trong `EformMain.tsx`.

### Deployment Checklist
1. Sửa code → `npm run build` → kiểm tra folder `out/`
2. Zip `out/` → đẩy lên server
3. Nếu tạo **new deployment** trên Apps Script → phải update URL trong `EformMain.tsx` + rebuild

### Incidents Log
| Date | Issue | Root Cause | Fix |
|---|---|---|---|
| 2026-04-13 | E-form lỗi sau khi publish | `NEXT_PUBLIC_GSHEET_URL` = `""` trên server do thiếu `.env.local` | Hardcode URL trực tiếp trong `EformMain.tsx` |
| 2026-04-13 | Telegram không nhận noti | Group upgrade lên Supergroup → Chat ID đổi từ `-5271365897` → `-1003853673796` | Cập nhật Chat ID trong Apps Script + redeploy |
| 2026-04-13 | Telegram Bot privacy mode | Bot không nhận messages thường trong group | Tắt Privacy Mode qua @BotFather → kick & add lại bot |
