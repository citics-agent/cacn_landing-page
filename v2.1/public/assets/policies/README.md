# Policies - Hướng dẫn thêm hình ảnh

## Cấu trúc folder

```
public/assets/policies/
├── overview/
│   ├── desktop.png    (900 x 600 px)
│   └── mobile.png     (330 x 330 px)
├── km-gioi-thieu/
│   ├── desktop.png
│   └── mobile.png
├── km-ch/
│   ├── desktop.png
│   └── mobile.png
├── km-cm/
│   ├── desktop.png
│   └── mobile.png
└── README.md
```

## Thêm campaign mới

### Bước 1: Tạo folder + upload hình
1. Tạo folder mới tại `public/assets/policies/{tên-campaign}/`
2. Upload 2 file:
   - `desktop.png` — kích thước **900 x 600 px**
   - `mobile.png` — kích thước **330 x 330 px**

### Bước 2: Thêm config
Mở file `src/lib/policies.ts`, thêm 1 dòng vào mảng `policies`:

```ts
export const policies = [
  { id: "overview", label: "Tổng quan" },
  { id: "km-gioi-thieu", label: "KM Giới thiệu" },
  { id: "km-ch", label: "KM CH" },
  { id: "km-cm", label: "KM CM" },
  { id: "tên-campaign", label: "Tên hiển thị" },  // <-- thêm dòng này
];
```

> **Lưu ý:** `id` phải trùng với tên folder đã tạo ở Bước 1.

### Bước 3: Build
```bash
npm run build
```
Script sẽ tự convert PNG sang WebP (nhẹ hơn ~70%) trước khi build.

## Chạy convert riêng (không cần build)
```bash
npm run convert:policies
```

## Lưu ý
- Chỉ hỗ trợ file `.png`
- Tên file phải đúng: `desktop.png` và `mobile.png`
- WebP được tạo tự động, không cần upload
- Nếu cập nhật hình, chỉ cần thay file PNG rồi build lại
