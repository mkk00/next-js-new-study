import Link from 'next/link'

const specialMeals = [
  { id: 0, menu: 'hamburger' },
  { id: 1, menu: 'chicken' },
  { id: 2, menu: 'egg' },
  { id: 3, menu: 'ice-cream' },
]

export default function MealsPage() {
  return (
    <main>
      <h1>Meals Page</h1>
      <>
        <p>
          • <Link href="/meals/share">share page</Link>
        </p>
        <p>
          • <Link href="/meals/community">community page</Link>
        </p>
      </>
      <h2>- Special Meals! -</h2>
      {specialMeals.map((name) => (
        <p key={name.id}>
          • <Link href={`/meals/` + name.menu}>{name.menu} page</Link>
        </p>
      ))}
      <button>
        <Link href="/">back</Link>
      </button>
    </main>
  )
}
