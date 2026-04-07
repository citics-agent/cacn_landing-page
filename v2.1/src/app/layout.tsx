import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BASE_PATH } from "@/lib/config";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agent.citics.vn"),
  title: "Citics Agent - La Bàn Cho Môi Giới BĐS Thế Hệ Mới",
  description:
    "Nền tảng bất động sản số ứng dụng dữ liệu & AI, giúp môi giới làm chủ nghề và mở khóa tăng trưởng thu nhập bền vững.",
  icons: {
    icon: `${BASE_PATH}/assets/C-Ribbon2-noshadow.svg`,
  },
  openGraph: {
    title: "Citics Agent - La Bàn Cho Môi Giới BĐS Thế Hệ Mới",
    description:
      "Nền tảng bất động sản số ứng dụng dữ liệu & AI, giúp môi giới làm chủ nghề và mở khóa tăng trưởng thu nhập bền vững.",
    url: "https://agent.citics.vn",
    siteName: "Citics Agent",
    images: [{ url: `${BASE_PATH}/assets/hero-1920x1080.png`, width: 1920, height: 1080 }],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Citics Agent - La Bàn Cho Môi Giới BĐS Thế Hệ Mới",
    description:
      "Nền tảng bất động sản số ứng dụng dữ liệu & AI, giúp môi giới làm chủ nghề và mở khóa tăng trưởng thu nhập bền vững.",
    images: [`${BASE_PATH}/assets/hero-1920x1080.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
