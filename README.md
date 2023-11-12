# 🧑‍💻 프로젝트 소개

---

## 🙂**기획 배경**

- **위치 기반을 통한 동네 소일거리 의뢰 앱 개발**
- 동네 주민들이 일상적인 불편함을 소일거리 의뢰를 통해 해결할 수 있는 동네 소일거리 의뢰 앱을 개발하고자 합니다.

## 😎 **해결 컨셉**

- 같은 동네에 사는 소일거리 의뢰자와 수행자를 연결해 줍니다.
- 지도를 기반으로 주변 소일거리를 찾을 수 있습니다.
- 실시간 채팅을 통해 의뢰에 대한 세부사항과 진행상황을 논의할 수 있습니다.

## 🤩 **기대 효과**

- 간편한 소일거리를 찾고 싶은 이들에게 저비용으로 일을 수행할 수 있는 기회를 제공하여 부가적인 수입을 얻을 수 있습니다.
- 이용자들에게는 간편한 심부름 의뢰와 믿을 수 있는 심부름 수행자를 제공하여 시간과 노력을 절약할 수 있습니다.

# 🛠️기술 스택

---

**FrontEnd**  

`React` `ReactRouter` `TypeScript` `Recoil` `React-portals` `Vite` `Axios` `json-server` `React-Icons` `esLint` 

---

**BackEnd**

`java` `Springboot` `Spring Security` `Spring batch` `JPA` `QueryDsl` `Socket` `Stomp`

---

**Database**   

`AWS` `MySQL` `Redis`

---

**Deploy**     

`AWS` `Vercel`

---

**API** 

`KaKao Map` `KaKao Login`

---

Cooperate

`Slack` `GitHub`

---

## ⚙️ Architecture

---
![화면 캡처 2023-08-17 213337](https://github.com/my-neighborhood-solver/frontend/assets/105287510/80ec55e9-f109-4203-a4e3-e3b5b8b4dbcc)


## 📑 **ERD**

---
![neighborHelper (1)](https://github.com/my-neighborhood-solver/frontend/assets/105287510/a890a73d-b341-4c7e-b2b0-c0871360f214)


## ☄️ 회고 및 트러블 슈팅

---

### **Front-End**

### react-props 문제
- 검색 페이지에서 검색후에는 조회페이지로 데이터가 잘 받아졌는데, 작성 페이지에서 조회페이지로 넘어갈 경우 데이터가 넘어가 지지 않았다.
- 문제는 검색 페이지에서 검색 후 해당 아이템을 클릭 시 props로 Link태그를 타고 넘어가게 로직을 구성했었던 점이다.
- 당연히 작성페이지에서는 props를 넘겨주지 않았으므로 조회페이지에서 죄다 undefined로 나타났다.
- 작성 페이지에서 props로 내려주면 가능하겠지만, 작성 페이지는 submit으로 해당 페이지를 마무리 하기 때문에 Link로 넘어가는 검색 페이지와 다른 로직을 작성해야 했다.
- useEffect를 사용하여 먼저 데이터를 불러들여오고 그에 맞는 데이터를 조회페이지로 넘어가께끔 사용했다.
- 결과적으로 검색 페이지에서 props도 필요없어졌기 때문에 해당 로직을 삭제하였다.

### CORS 설정
- 서버와 로컬주소가 주소 즉, 리소스가 다를 경우 `Cross-Origin-Resource-Sharing` 오류가 발생한다. 프론트 로컬 주소는 localhost로 시작하고 서버 주소는 AWS도메인으로 다르니까 오류가 발생했다.
- 서버와 프론트에서 서로의 리소스 접근을 해주어야한다.

```
server: {
      proxy: {
        '/api': {
          target: 'http://3.34.174.154:8080',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
          secure: false,
          ws: true
        }
      }
    }
```

프론트에서는 proxy로 해당 주소를 허용해주었다.
- http요청이기 때문에 https를 사용하는 secure은 false로 지정했다.
- WS는 WebSocket으로 채팅을 사용할 것이기 때문에 true로 설정되었다.


### POST 요청
- 게시글을 post요청할떄 발생한 오류들이 있다.
- `404` : 요청 url이 잘못되었었다.
- `403` : header에 토큰 설정이 되어있지 않았다.
- `400`: 요청 key값이 잘못되어있었다.
- `500`: 서버 오류로 파악했지만, 프론트에서 api값을 잘못 넣어줘서 서버에서 응답을 못하는 오류였다.
- `415`: type에러로 주된 문제점이었다.
각 input태그에 type을 모두 text로 지정했기때문에 생기는 문제였다. image input에 file로 지정해주어서 문제를 해결했다.
