'use client'

import Link from 'next/link'
import styled from 'styled-components'

export default function MealsDetailPage({
  params,
}: {
  params: {
    slug: string
  }
}) {
  return (
    <>
      <Title>
        {params.slug} <span>is...</span>
      </Title>
      <P>Special!!</P>
      <button>
        <Link href="/meals">back</Link>
      </button>
    </>
  )
}

const Title = styled.h1`
  color: #bd3df4;

  span {
    color: #f4c33d;
  }
`

const P = styled.p`
  color: #fff;
  font-size: 4rem;
  font-style: italic;
  font-weight: bold;
  text-decoration: underline;
`
