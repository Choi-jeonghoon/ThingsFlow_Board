# ThingsFlow_Board

## 사용 기술스택

### JavaScript

### Express

### mysqlDB

## 실행방법

### 1.해당 레포지토리를 clone합니다.

```shell
git clone https://github.com/Choi-jeonghoon/ThingsFlow_Board
```

### 2. 다운 받으신 폴더로 들어갑니다

```shell
cd ThingsFlow_Board
```

### 3. 의존성들을 설치합니다.

```shell
npm i
```

### 4. 실행시킵니다!

```shell
npm start
```


- DB 모델링

![스크린샷 2022-09-06 오후 9 19 22](https://user-images.githubusercontent.com/68211978/188787969-f259548f-a340-49ef-bc9f-e8a0568ccc16.png)

## 개발요구사항
 1. 사용자는 게시글을 올릴 수 있습니다.

 - 게시글은 제목과 본문으로 구성됩니다.

 - 제목은 최대 20 자, 본문은 200 자로 서버에서 제한해야 합니다.

 - 제목과 본문 모두 이모지가 포함될 수 있습니다.

 2. 사용자는 게시글을 올릴 때 비밀번호를 설정할 수 있습니다. 추후 본인이 작성한 게시물에

 비밀번호 입력 후 수정, 삭제할 수 있습니다.

 - 회원 가입, 로그인 없이 비밀번호만 일치하면 수정, 삭제가 가능합니다.

 - 비밀번호는 데이터베이스에 암호화 된 형태로 저장이 되어야 합니다.

 - 비밀번호는 6 자 이상이어야 하고, 숫자 1 개 이상 반드시 포함 되어야 합니다.

 3. 모든 사용자는 한 페이지 내에서 모든 게시글을 최신 글 순서로 확인할 수 있습니다.

## 추가 요구사항 (택 1)
 1. 게시글의 개수가 많을 때, 사용자가 앱이나 웹에서 스크롤을 내릴 때마다 오래된 글들이
계속 로드 되는 형태로 API 를 수정해주세요.

 - 게시글이 중복으로 나타나면 안됩니다.

 - 추가 로드는 20 개 단위로 해주세요.

 2. 외부 API 를 활용하여, 사용자가 게시글을 업로드한 시점의 날씨(예: 맑음, 흐림, 소나기, 눈
등) 정보가 게시글에 포함되도록 해주세요.

 - 외부 API 는 자유롭게 선택해주시면 되지만, https://www.weatherapi.com 가입 후
Real-time Weather API 사용하시는 것을 추천드립니다.

 - 발급 받으신 API Key 는 전달해주지 않으셔도 됩니다.

 - 게시글 작성 시 자동으로 데이터베이스에 추가되고, 수정은 불가하도록 합니다

## 개발된 기능설명
- /board 로 title/contents/lockpassword 값을 body값으로 받아 등록하며 추가 구현사항의 요청으로 실시간 날씨정보또한 함께 등록되도록 구현했습니다.
  - 아래는 등록된 모습과 날씨정보 등록을 확인을 위한 postman테스트 모습입니다.
![게시판 등록](https://user-images.githubusercontent.com/68211978/188854483-b1775cd9-870e-42fb-a1e4-3700e9902c01.png)
![게시판 조회](https://user-images.githubusercontent.com/68211978/188854541-45a26581-cc31-4840-947b-38d7cea600ab.png)

- /updateboard/id 로 title/contents/ 값을 body값으로 받아 등록하며 수정하고자하는 게시판의 id값을 params로 받도록 설계하여 수정하도록 구현했습니다.
  - 아래는 등록된 모습과 날씨정보 등록을 확인을 위한 postman테스트 모습입니다.
![게시판수정](https://user-images.githubusercontent.com/68211978/188854517-09c854e6-31bd-4831-aba4-e434201699ae.png)

- /getboard 로 확인 할 수 있습니다. 조회가 되면서 최신글 순으로 볼 수 있도록 구현했습니다.
  - 아래는 postman테스트 모습입니다.

    ![게시판 최신순 확인](https://user-images.githubusercontent.com/68211978/188854615-b4d02c05-9d50-4f09-a32c-c5ab4b4bc0ee.png)

- /deleteboard 로 확인 할 수 있습니다. 삭제하고자 하는 게시판의 id값을 params로 받아 삭제가 가능하도록 구현했습니다.
  - 아래는 postman테스트 모습입니다.
    ![게시판 삭제](https://user-images.githubusercontent.com/68211978/188854628-34ce421d-e297-4ca8-b0dc-04d17fb15eb1.png)









