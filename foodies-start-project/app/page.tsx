import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started!
      </h1>
      <p>
        • <Link href="/meals">Go Meals Page!</Link>
      </p>
      <p>
        • <Link href="/meals/share">Go share page</Link>
      </p>
      <p>
        • <Link href="/community">Go Community Page!</Link>
      </p>
    </>
  )
}
