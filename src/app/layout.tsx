import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "THE 12 - 부동산 전문 파트너 네트워크",
  description: "수강생이 아닌, 미래의 협력 파트너를 찾습니다. 17년차 부동산 전문가가 직접 운영하는 강남역 오피스텔 스터디.",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
