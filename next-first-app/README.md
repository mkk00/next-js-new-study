# Next.js

Next.js 는 SSR을 지원한다.
SSR은 서버에서 HTML을 생성하여 클라이언트로 전송하는 방식이다.
하지만 Next.js 는 SSR만 사용하는 것이 아니라 CSR 및 SSG도 함께 사용할 수 있다.

1. [서버 컴포넌트 이해하기](#서버-컴포넌트-이해하기)
2. [Next.js의 라우팅](#nextjs의-라우팅)
3. [Layout 컴포넌트](#layout-컴포넌트)
4. [보호된 파일명](#보호된-파일명)
5. [동적 라우팅(dynamic routes)](#동적-라우팅dynamic-routes)
   - [params prop](#params-prop)
   - [Generating Static Params](#generating-static-params)
   - [catch all segments](#catch-all-segments)
   - [typescript params 타입](#typescript-params-타입)

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

<br/>

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

<br/>

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

<br/>

## 보호된 파일명

`layout.js`, `page.js`, `icon.png`(파비콘) 와 같은 파일은 Next.js 프로젝트를 구성하는 데 자동으로 이용된다.
Next.js가 `components` 와 같은 폴더명은 app 폴더 내부에서 **라우팅에 관여하지 못하도록** 자동으로 처리해준다.

### app 폴더 내부에서 생성될 때 보호되는 파일명들

- `page.js`
- `layout.js`
- `not-found.js`
- `error.js` : 기타 에러 폴백 페이지
- `loading.js`
- `route.js` : API 경로 생성(데이터 반환 페이지)

<br/>

## 동적 라우팅(dynamic routes)

동적 라우팅 시 정확한 세그먼트 이름을 모르거나, **동적 데이터**로부터 라우트를 만들 때 동적 세그먼트를 사용한다.

동적 세그먼트는 대괄호를 붙여서 만들 수 있다.<br/>

ex. `[id]`, `[slug]`

- `app/blog/[slug]/page.js` : 동일한 page.js 파일이지만, 다른 경로 분할값이 생성된다.

- `slog` 식별자는 경로에 값이 할당될 때 정확한 값에 접근할 수 있도록 해준다.

### params prop

동적 세그먼트는 layout, page, route, generateMetadata 함수로부터 `params prop`을 전달받는다.

```javascript
export default function Page({ params }) {
  return <div>My Post: {params.slug}</div>
}
```

| route                     | url       | `params`        |
| ------------------------- | --------- | --------------- |
| `app/blog/[slug]/page.js` | `/blog/a` | `{ slug: 'a' }` |
| `app/blog/[slug]/page.js` | `/blog/b` | `{ slug: 'b' }` |
| `app/blog/[slug]/page.js` | `/blog/c` | `{ slug: 'c' }` |

<br/>

### Generating Static Params

`generateStaticParams` 함수는 **정적 경로를 생성**하는데 사용된다.
이 함수는 빌드 시에 동적 라우트를 미리 생성하여 경로를 미리 준비한다.

- 빠른 탐색
- 정적 페이지 제공
  - 미리 생성되면 서버 리소스를 덜 사용한다.
- 자동 메모이제이션을 통한 성능 향상
  - 메모이제이션을 통해 동일한 요청에 대해 한 번만 함수를 실행한다.

```javascript
export async function generateStaticParams() {
  const posts = await fetch('https://.../posts').then((res) => res.json())

  return posts.map((post) => ({
    slug: post.slug,
  }))
}
```

<br/>

### Catch-all Segments

- 특정 경로의 **모든 하위 경로를 매칭**할 수 있게 해주는 기능으로 대괄호에 `...`을 추가하여 구현할 수 있다.(`[...slug]`)
  <br/>
- `app/shop/[...slog]/page.js` 는 `/shop/clothes` 뿐만 아니라 `/shop/tops`, `/shop/clothes/t-shirts` 등에도 일치한다.
  <br/>

| route                        | url           | `params`                    |
| ---------------------------- | ------------- | --------------------------- |
| `app/blog/[...slug]/page.js` | `/blog/a`     | `{ slug: ['a'] }`           |
| `app/blog/[...slug]/page.js` | `/blog/a/b`   | `{ slug: ['a', 'b'] }`      |
| `app/blog/[...slug]/page.js` | `/blog/a/b/c` | `{ slug: ['a', 'b', 'c'] }` |

<br/>

### Optional Catch-all Segments

- 특정 경로의 **선택적으로 매칭**할 수 있게 해주는 기능으로 대괄호 안에 ...를 포함한 대괄호로 구현할 수 있다.(`[[...slug]]`)
  <br/>
- 매개변수 없이도 경로가 일치한다. (`/blog`)
  <br/>

| route                          | url           | `params`                    |
| ------------------------------ | ------------- | --------------------------- |
| `app/blog/[[...slug]]/page.js` | `/blog`       | `{}`                        |
| `app/blog/[[...slug]]/page.js` | `/blog/a`     | `{ slug: ['a'] }`           |
| `app/blog/[[...slug]]/page.js` | `/blog/a/b`   | `{ slug: ['a', 'b'] }`      |
| `app/blog/[[...slug]]/page.js` | `/blog/a/b/c` | `{ slug: ['a', 'b', 'c'] }` |

<br/>

### typescript params 타입

| route                               | type                                     |
| ----------------------------------- | ---------------------------------------- |
| `app/blog/[slug]/page.js`           | `{ slug: string }`                       |
| `app/shop/[...slug]/page.js`        | `{ slug: string[] }`                     |
| `app/shop/[[...slug]]/page.js`      | `{ slug?: string[] }`                    |
| `app/[categoryId]/[itemId]/page.js` | `{ categoryId: string, itemId: string }` |
