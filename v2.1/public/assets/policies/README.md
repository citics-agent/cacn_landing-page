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
2. Upload 2 file (hỗ trợ PNG, JPG, JPEG):
   - `desktop.{png,jpg,jpeg}` — kích thước **900 x 600 px**
   - `mobile.{png,jpg,jpeg}` — kích thước **330 x 330 px**

### Bước 2: Thêm config
Mở file `src/lib/policies.ts`, thêm 1 dòng vào mảng `policies`:

```ts
export const policies = [
  { id: "overview", label: "Tổng quan", ext: "png" },
  { id: "km-gioi-thieu", label: "KM Giới thiệu", ext: "jpg" },
  { id: "km-ch", label: "KM CH", ext: "jpg" },
  { id: "km-cm", label: "KM CM", ext: "jpg" },
  { id: "tên-campaign", label: "Tên hiển thị", ext: "jpg" },  // <-- thêm dòng này
];
```

> **Lưu ý:** `id` phải trùng với tên folder, `ext` phải trùng với đuôi file hình đã upload.

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
- Hỗ trợ file `.png`, `.jpg`, `.jpeg`
- Tên file phải đúng: `desktop.{ext}` và `mobile.{ext}`
- WebP được tạo tự động, không cần upload
- Nếu cập nhật hình, chỉ cần thay file PNG rồi build lại
