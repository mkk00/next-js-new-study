import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <img src="/logo.png" alt="A server surrounded by magic sparkles." />
      <h1>Welcome to this NextJS Course!</h1>
      <p>🔥 Let&apos;s get started! 🔥</p>
      <>
        <p>
          • <a href="/about">Go About Page</a>
        </p>
        <span>
          이 페이지는 <strong>서버</strong>에서 실행되는 페이지입니다.
        </span>
      </>
      <>
        <p>
          • <Link href="/about">Update About page</Link>
        </p>
        <span>
          이 페이지는 <strong>클라이언트</strong>에서 실행되는 페이지입니다.
        </span>
      </>
    </main>
  )
}
