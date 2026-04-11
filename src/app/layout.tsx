import type { Metadata } from "next";
import "./globals.css";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "THE 12 - 부동산 전문 파트너 네트워크",
  description:
    "수강생이 아닌, 미래의 협력 파트너를 찾습니다. 17년차 부동산 전문가가 직접 운영하는 강남역 오피스텔 스터디.",
  openGraph: {
    title: "THE 12 - 부동산 전문 파트너 네트워크",
    description:
      "17년차 부동산 전문가가 직접 운영하는 소수 정예 실무 스터디. 공인중개사 1기 모집중.",
    images: ["/og.png"],
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "THE 12 - 부동산 전문 파트너 네트워크",
    description:
      "17년차 부동산 전문가가 직접 운영하는 소수 정예 실무 스터디.",
    images: ["/og.png"],
  },
  metadataBase: new URL("https://the12.co.kr"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}
