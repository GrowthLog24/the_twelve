import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'THE 12 · 2026 공인중개사 1기',
  description: '수강생이 아닌, 미래의 협력 파트너를 찾습니다. 강남역 17층 · 소규모 정예 · 17년 전문가 직접 운영',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
