<h1>Frontend</h1>

<h2>Branch 전략</h2>
develop: 프론트 개발 브랜치<br>
feature/~: 기능 개발 브랜치<br>
feature/~에서 개발 한 다음 develop 브랜치에 pull request 한 다음 merge 할 것

<h2>개발 환경</h2>
<h3>CRA + Typescript</h3>

<code>npx create-react-app my-app --template typescript</code>
<br>
명령어로 한번에 typescript까지 cra로 설치해보았다

<hr>
<h3>SASS</h3>

현재 styled-component와 scss중에서 뭘 선택할지 고민중이다.<br>
효율적인 측면에서는 styled-component를 쓰는게 맞긴하나, 개인적으로는 css in js 보다 css in css를 선호하기 때문에<br>
scss로 방향을 잡고, 협의를 통해서 프로젝트 도입할때 바꿀까 생각중이다.

<hr>
<h3>React Router Dom v6</h3>

React Router Dom으로 내비게이션 설정

<hr>

<h3>Redux, Redux-toolkit</h3>

Recoil이나 Zustand에 비해서 불필요한 세팅 코드가 분명히 많지만,<br> 아무래도 Redux가 Legacy코드가 많기 때문에<br> 아직 숙련도가 덜 되어서 Redux로 상태관리를 하기로 결정 했다.<br>
로그인/회원가입에 사용될 예정

<hr>

<h3>Axios</h3>

마찬가지로 http통신할때 fetch 대신에 Axios를 사용한 이유는 아무래도 개발 하면서 많은 자료들을 보게 될텐데,<br> fetch가 Axios보다 더 나중에 나오기도 했고, 오래된 자료나 튜토리얼에서 axios를 주로 다뤘기 때문에<br> 아직 숙련도가 부족하여 안정적으로 axios를 사용하게 되었습니다

<hr>

<h3>폴더 구조</h3>

<pre>
📦src
 ┣ 📂assets
 ┃ ┣ 📂icons
 ┃ ┃ ┗ 📜mood.png
 ┃ ┗ 📂imgs
 ┃ ┃ ┗ 📜mango.webp
 ┣ 📂components
 ┃ ┣ 📂Filter
 ┃ ┃ ┗ 📜filter.tsx
 ┃ ┣ 📂Map
 ┃ ┃ ┗ 📜map.tsx
 ┃ ┣ 📂RestaurantInfo
 ┃ ┃ ┗ 📜restaurantinfo.tsx
 ┃ ┣ 📂Restaurants
 ┃ ┃ ┗ 📜restaurants.tsx
 ┃ ┣ 📂ReviewWrite
 ┃ ┃ ┗ 📜reviewwrite.tsx
 ┃ ┣ 📂Reviews
 ┃ ┃ ┗ 📜reviews.tsx
 ┃ ┗ 📂Search
 ┃ ┃ ┗ 📜search.tsx
 ┣ 📂pages
 ┃ ┣ 📂Main
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂Restaurants
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂ReviewWritePage
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┗ 📂SearchResult
 ┃ ┃ ┗ 📜index.tsx
 ┣ 📂store
 ┃ ┗ 📜index.tsx
 ┣ 📂style
 ┃ ┗ 📂font
 ┃ ┃ ┗ 📜폰트정해지면채울예정. txt
 ┣ 📜App.scss
 ┣ 📜App.test.tsx
 ┣ 📜App.tsx
 ┣ 📜index.scss
 ┣ 📜index.tsx
 ┣ 📜logo.svg
 ┣ 📜react-app-env.d.ts
 ┣ 📜reportWebVitals.ts
 ┗ 📜setupTests.ts
</pre>

Component 단위로 Filter, Map, ReviewWrite, Search등의 기능들을 뺐고,<br> Page는 Main, 레스토랑 정보를 보여주는 Restaurants, 리뷰를 쓰는 페이지인 ReviewWritePage, 검색결과를 보여주는 SearchResult 페이지등으로 일단 나눠놓았다.