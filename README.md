# TOB(TakeOutBook) 웹사이트제작_개인프로젝트_React

## 🔗 Deployment URL

[TOB 웹사이트로 이동 : https://takeoutbook.kr ](https://takeoutbook.kr/)


## 📌Summary

옛 도서대여점의 감성을 살려서 e-book이 아닌 실물도서를 구독회원에 한해서 대여해주는 플랫폼 웹 사이트입니다. 

- 저의 *첫 개인 프로젝트* 이며, 상업적 용도가 아닌 개인 포트폴리오에 사용될 목적으로 제작 되었습니다.
- 리액트 라이브러리를 사용하였고 함수형 컴포넌트 위주로 코딩했습니다. 상태관리를 통해 조건부 렌더링을 구현했습니다.
- styled-components 라이브러리를 사용함으로 기능과 디자인을 분리하지 않고 원페이지 컴포넌트로 구성했습니다.
- 반응형 웹으로 제작하여 다양한 디바이스에서도 원활하게 작업물을 보실 수 있습니다


<br/>


## 🌐Development Environment

- **frontend** :  JavaScript   React   styled-components
- **deployment** :  Netlify

<br/>

## 📁Directory

페이지 기준으로 폴더를 정리하였습니다. 

![directory](https://user-images.githubusercontent.com/92903653/165244059-f7f3d7df-f329-4d35-99c2-a47ef3fa36ba.png)

- **폴더** : 컴포넌트 구성하는 하위 컴포넌트와 함수를 모음
- **폴더명과 동일한 js파일** : 메인 컴포넌트
- **index** : 폴더내 컴포넌트들을 호출한 파일
- **components**  : 폴더내에서 사용되는   컴포넌트들의 집합 폴더
- **function**:  폴더 내에서 재사용되는 함수를 따로 모은 폴더

<br/>

## 🔧 Service

### ✅  알라딘 실시간 베스트셀러

실 알라딘 OPEN API 서버에서 도서 정보를 받아와 실시간으로 알라딘 IT 베스트셀러 도서들을 보여줍니다.

![bestsellers](https://user-images.githubusercontent.com/92903653/165244868-dfd3cc1c-0c69-4c31-ae75-e09278f4c106.png)

도서 이미지를 클릭시, 해당 도서의 알라딘 판매페이지로 이동합니다.

반응형 웹사이트를 위해  스크롤 바를 추가해주었습니다.

### ✅  대여가능도서 리스트

DB에 담겨진 대여 도서를 불러옵니다.

![books](https://user-images.githubusercontent.com/92903653/165244894-9b910123-17b4-48b1-aabc-efa57baaa78b.png)

![books_rent](https://user-images.githubusercontent.com/92903653/165244902-9ac38aaf-9394-49ee-a6aa-30b7de4b5b51.png)

대여 불가 도서는 blur처리를 주었습니다. 

도서 카드를 클릭 시 상세페이지로 이동할 수 있는 링크 기능을 추가하였습니다.

### ✅  도서 상세페이지 ( 대여 )

링크 기능을 통해 해당하는 도서의 상세페이지로 이동 할 수 있습니다.
![book_detail](https://user-images.githubusercontent.com/92903653/165244922-80108e32-353c-426f-9384-c18cf8930466.png)

대여버튼 클릭시 로그인 상태 , 구독 정보에 따라 호출하는 모달창을 달리 했습니다.

![modal_rent](https://user-images.githubusercontent.com/92903653/165244964-25b75bba-900f-4629-853a-654e403e7eae.png)![modal_subscribe](https://user-images.githubusercontent.com/92903653/165244973-f16927f0-5845-43b0-b636-7e913805cfec.png)

### ✅  회원가입/로그인
실시간 유효성 검사를 하고 유효성 검사를 통과하면 가입하기 버튼이 활성화 됩니다.

![register-notvalid](https://user-images.githubusercontent.com/92903653/165247096-3ae1d092-8edc-473a-9290-2137c11c9dc2.png)
### ✅  로그인 여부에 따른 헤더 구성

로그인 하지 않은 사용자에게는 아래와 같은 헤더가 보입니다.
![header-default](https://user-images.githubusercontent.com/92903653/165245364-91b201e3-6bd7-4303-a014-d84f086c95ae.png)


로그인 후에는 로그인 상태에 따라 조건부 헤더가 렌더링 됩니다.
![header-login](https://user-images.githubusercontent.com/92903653/165245389-fe77c49d-88af-401a-abf1-cb5a75725bdd.png)


### ✅  마이페이지 ( 구독현황, 대여 도서 현황)

로그인한 사용자는 마이페이지로 이동이 가능해집니다.
![mysubscribe](https://user-images.githubusercontent.com/92903653/165245419-89090a84-133e-44fc-80af-d47a557c2a50.png)


- 구독현황
    
    유저의 구독정보를 확인하고 구독/해지를 할 수 있습니다.
    
![myrent](https://user-images.githubusercontent.com/92903653/165245434-86b183da-00e5-4e0a-8bff-128b422ce888.png)


- 대여현황
    
    유저가 대여하고 있는 책의 정보, 반납한 책의 정보를 확인 할 수 있습니다.

