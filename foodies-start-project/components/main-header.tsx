'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import logoImg from '@/assets/logo.png'
import styled, { css } from 'styled-components'

export default function MainHeader() {
  const pathname = usePathname()

  return (
    <Header>
      <Logo>
        <Link href="/">
          <img src={logoImg.src} alt="접시에 담긴 음식" />
          NextLevel Food
        </Link>
      </Logo>

      <nav>
        <MenuList>
          <li>
            <StyledLink href="/meals" isActive={pathname === '/meals'}>
              Browse Meals
            </StyledLink>
          </li>
          <li>
            <StyledLink href="/community" isActive={pathname === '/community'}>
              Foods community
            </StyledLink>
          </li>
        </MenuList>
      </nav>
    </Header>
  )
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;

  @media (min-width: 768px) {
    padding: 2rem 10%;
  }
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  text-decoration: none;
  color: #ddd6cb;
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 0.15rem;
  text-transform: uppercase;
  font-size: 1.5rem;

  & img {
    width: 5rem;
    height: 5rem;
    object-fit: contain;
    filter: drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.5));
  }
`

const MenuList = styled.nav`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 1.5rem;
  font-size: 1.25rem;

  & a {
    text-decoration: none;
    color: #ddd6cb;
    font-weight: bold;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
  }

  & a:hover,
  & a:active {
    background: linear-gradient(90deg, #ff8a05, #f9b331);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 18px rgba(248, 190, 42, 0.8);
  }
`

const StyledLink = styled(Link)<{ isActive: boolean }>`
  ${({ isActive }) =>
    isActive &&
    css`
      background: linear-gradient(90deg, #ff8a05, #f9b331);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    `}
`
