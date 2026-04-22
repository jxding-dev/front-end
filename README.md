# 프론트엔드 레퍼런스

HTML, CSS, JavaScript 예제를 빠르게 찾아보고 미리보기까지 확인할 수 있는 정적 사이트입니다.

## 파일 구성

- `index.html`: 메인 페이지
- `css/`: 공통 스타일
- `js/`: 데이터와 렌더링 스크립트
- `server.js`: Render 배포용 Node 정적 서버
- `package.json`: Render 실행 설정

## 로컬 실행

```bash
node server.js
```

브라우저에서 `http://localhost:3456`으로 접속하면 됩니다.

## Render 배포

1. 이 폴더를 GitHub 저장소에 업로드합니다.
2. Render에서 `New +` → `Web Service`를 선택합니다.
3. GitHub 저장소를 연결합니다.
4. Start Command는 `npm start`로 설정합니다.

## 참고

- 첫 화면은 자바스크립트가 완전히 실행되기 전에도 기본 카드가 먼저 보이도록 구성되어 있습니다.
- 접근성을 위해 건너뛰기 링크, 검색 라벨, 상태 안내 문구를 포함했습니다.
