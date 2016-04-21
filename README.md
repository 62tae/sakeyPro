환영합니다!!
============

이 프로젝트는 초보들의 MEAN Stack 협업 프로젝트입니다.

MEAN Stack 예제들을 통해서 진행하고 있으며, Github을 사용한 협업을 테스트하고 있습니다.

**프로젝트 진행중인 예제**
http://jasonwatmore.com/post/2015/12/09/MEAN-Stack-User-Registration-and-Login-Example.aspx#app-folder
https://github.com/cornflourblue/mean-stack-registration-login-example


**애니메이션 효과 적용**
http://jasonwatmore.com/post/2016/01/20/Angular-ngAnimate-Tutorial-with-UI-Router.aspx
# 1. Node & npm 설치

프로젝트를 진행하기 위해서 몇가지 설치해야 할 것들이 있습니다.

https://nodejs.org/en/

최신버전인 5.1x 버전을 설치합니다.

# Package.Json
> npm init 생성( 이곳에는 이미 Package.json 파일 존재 생성 안해도 됨)

> 사용될 모듈들 설치 And 저장
  npm install 'Modules Name' --save
  ex) npm install express --save
  --save 안 할시 Package.json 에 저장 안됨

# Modules 설치

> $npm install

angularJS 1.5.3 버전을 설치합니다.

# 참고 라이브러리 / API / Framework

- Github README Markdown: https://guides.github.com/features/mastering-markdown/
- Node Js: https://nodejs.org/en/
- Angular Js: https://angularjs.org/
- Angular Animate: https://docs.angularjs.org/api/ngAnimate
- Angular Material: https://material.angularjs.org/latest/
- BootStrap: http://getbootstrap.com/
- BootStrap Angular: https://angular-ui.github.io/bootstrap/
- Jquery: http://jquery.com/
- MongoDB: https://www.mongodb.org/
- React: http://reactkr.github.io/react/docs/getting-started-ko-KR.html

- APIs
    - daum API: http://developers.daum.net/
    - kakao API: https://developers.kakao.com/
    - Naver API:http://developer.naver.com/wiki/pages/OpenAPI
    - google API: https://console.developers.google.com/

# 해야 할 것!

1. Node JS 서버 설치
2. Index.html 수정
3. FrondEnd 꾸미기
4. Angular App 제작

# 파일 구조!
```
sakeyApp/
├── app/                               * Angular 메인 페이지
│   ├── account/                       * Account 페이지
│   │   ├── index.html                 * Account 페이지 뷰어
│   │   └── index.controller.js        * Account 페이지 컨트롤러
│   ├── app-content/                   * 페이지 소스 파일들
│   │   ├── angular.min.js             * Angular 1.x 소스파일
│   │   ├── app.less                   * 상품페이지 및 전체 디자인 Css파일
│   │   └── app.css                    * 메인 페이지 디자인 CSS파일
│   ├── app-service/                   * 앱 서비스 폴더
│   │   ├── flash.service.js           * 플래쉬 서비스 기능
│   │   ├── product.service.js         * 상품 추가 기능 및 관리 기능 Js파일
│   │   └── user.service.js            * 유저 컨트롤 기능
│   ├── home/                          * 메인 홈 페이지 폴더
│   │   ├── index.html                 * 홈 페이지 뷰어
│   │   └── index.controller.js        * 홈 페이지 컨트롤러
│   ├── products/                      * 상품페이지 폴더
│   │   ├── add-edit.html              * 상품 추가 슬라이더 
│   │   ├── add-edit.controller.js     * 상품 추가 슬라이더 기능 Js
│   │   ├── index.html                 * 상품 페이지 뷰어
│   │   └── index.controller.js        * 상품 페이지 컨트롤러
│   ├── app.js/                        * Angular 루트 Js
│   └── index.html/                    * Angular 루트 파일
│
├── views/                             * 보여지는 부분
│   ├── partials/                      * 자주 사용되는 부분 분리
│   │   ├── header.ejs/                * header
│   │   ├── footer.ejs/                * footer
│   ├── login.ejs/                     * 로그인 페이지 (ejs 루트파일)
│   ├── register.ejs/                  * 회원가입 페이지
│   └── skeleton.html/                 * 전체 폼 디자인시 사용한 유령파일
│
├── package.json                       * Our javascript dependencies
├── server.js                          * 서버 생성 파일
└── README.md                          * GitHub 페이지 설명 파일
```
