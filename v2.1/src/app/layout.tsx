import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { BASE_PATH } from "@/lib/config";

const TIKTOK_PIXEL_ID = "D81961JC77UEPF9K2560";

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
    <html lang="vi" className={`${inter.variable} scroll-smooth no-js`}>
      <body className="font-sans antialiased">
        {children}
        <Script id="tiktok-pixel" strategy="afterInteractive">
          {`!function (w, d, t) {
  w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
  ttq.load('${TIKTOK_PIXEL_ID}');
  ttq.page();
}(window, document, 'ttq');`}
        </Script>
      </body>
    </html>
  );
}
