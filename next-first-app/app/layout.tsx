import type { Metadata } from 'next'
import StyledComponentsRegistry from '../lib/registry'

export const metadata: Metadata = {
  title: 'NextJS Course App',
  description: 'my first NextJS app!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
