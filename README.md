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


