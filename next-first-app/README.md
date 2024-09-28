# Next.js
Next.js 는 SSR을 지원한다.
SSR은 서버에서 HTML을 생성하여 클라이언트로 전송하는 방식이다.
하지만 Next.js 는 SSR만 사용하는 것이 아니라 CSR 및 SSG도 함께 사용할 수 있다.

## 서버 컴포넌트 이해하기
Next.js의 컴포넌트는 **서버 컴포넌트**이기 때문에 클라이언트 사이드에서 실행되는 코드를 입력하면 작동하지 않는다.<br/>

```javascript
function Home () {
  console.log('서버에서 실행') // 터미널에서 확인 가능
  return <div>Hello</div>
}
```
<br/>

클라이언트에서 실행해야하는 코드는 `useEffect` 훅을 사용하면 된다.<br/>
```javascript
  export async function getServerSideProps() {
    console.log("서버에서 실행");
    return { props: {} };
  }
```


