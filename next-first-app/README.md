# Next.js

Next.js 는 SSR을 지원한다.
SSR은 서버에서 HTML을 생성하여 클라이언트로 전송하는 방식이다.
하지만 Next.js 는 SSR만 사용하는 것이 아니라 CSR 및 SSG도 함께 사용할 수 있다.

## 서버 컴포넌트 이해하기

Next.js의 컴포넌트는 **서버 컴포넌트**이기 때문에 클라이언트 사이드에서 실행되는 코드를 입력하면 작동하지 않는다.<br/>

```javascript
function Home() {
  console.log('서버에서 실행') // 터미널에서 확인 가능
  return <div>Hello</div>
}
```

<br/>

클라이언트에서 실행해야하는 코드는 `useEffect` 훅을 사용하면 된다.<br/>

```javascript
export async function getServerSideProps() {
  console.log('서버에서 실행')
  return { props: {} }
}
```

## Next.js의 라우팅

## `<Link>` 컴포넌트 VS `<a>` 태그

### Next.js의 페이지 렌더링 방식

- url 입력하여 페이지 이동 시 : **서버에서 렌더링**하여 완전한 페이지를 보여줌
- 링크를 통해 페이지 이동 시 : Next.js가 SPA를 허용하고 **클라이언트에서 UI 업데이트**

<br/>

### a 태그 사용 시

a 태그를 사용하여 링크 이동 시 Next.js의 장점을 따르지 못한다.

\*\* 브라우저의 새로고침 버튼을 눌러보면 순간적으로 `X` 로 변경되는데, 이는 서버 사이드 렌더링으로 매번 새로운 페이지를 불러온다는 것이다.
<br/>

### Link 컴포넌트 사용 시

내부 링크가 있을 경우 앵커(\<a>) 요소 대신 \<Link> 컴포넌트를 사용해야 한다. 이는 Next.js가 SPA에 머물 수 있도록 보장해준다.<br/>

|   \<Link> 컴포넌트    |    \<a> 태그     |
| :-------------------: | :--------------: |
|          CSR          |       SSR        |
| 페이지 전환 속도 향상 |                  |
|   사용자 경험 개선    | 사용자 경험 저하 |

<br/>

```javascript
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Link href="/about">Update About page</Link>
    </main>
  )
}
```

<br/>

## Layout 컴포넌트

- Next.js 의 전반적인 레이아웃을 나타내는 컴포넌트로 루트 디렉토리(app)에 최소 1개는 꼭 필요하다.
- 페이지별로 layout.js 을 정의할 수 있다.
- 컴포넌트 명은 정해진 것은 아니다.

```javascript
export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
```

### 레이아웃 컴포넌트에 head 태그가 없는 이유

- metadata 에 의해 설정
- Next.js로 인해 자동으로 설정

```javascript
export const metadata = {
  title: 'NextJS Study',
  description: 'my NextJS study!',
}
```

### children

현재 활성된 페이지의 pages.js 파일
