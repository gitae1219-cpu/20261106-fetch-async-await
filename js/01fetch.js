// alert('연결완료')
// =========================================================
// fetch(), async/await 기본 실습 - 실습배포용
// =========================================================
// 이 파일에서는 버튼을 클릭했을 때 외부 API에서 데이터를 가져오는 흐름을 배웁니다.
// API 요청은 인터넷을 통해 데이터를 가져오는 작업이므로 시간이 걸릴 수 있습니다.
// 그래서 async/await를 사용해 응답을 기다립니다.
// =========================================================

// HTML 문서에서 id가 loadPostBtn인 요소를 찾습니다.
// 이 요소는 index.html에 있는 "데이터 가져오기" 버튼입니다.
const loadPostBtn = document.querySelector("#loadPostBtn");

// HTML 문서에서 id가 result인 요소를 찾습니다.
// 이 영역은 API 결과를 화면에 보여줄 박스입니다.
const resultBox = document.querySelector("#result");

// loadPostBtn 버튼에 클릭 이벤트를 연결합니다.
// 사용자가 버튼을 클릭하면 function 안의 코드가 실행됩니다.
loadPostBtn.addEventListener("click", async function () {
  // API 요청은 시간이 걸릴 수 있으므로 먼저 안내 문구를 보여줍니다.
  resultBox.textContent = "데이터를 가져오는 중입니다.";

  // fetch()는 외부 주소에 데이터를 요청하는 JavaScript 기능입니다.
  // 괄호 안에는 데이터를 요청할 API 주소를 작성합니다.
  // await는 서버 응답이 올 때까지 기다리라는 뜻입니다.
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

  // 서버에서 받은 응답은 바로 화면에 사용할 수 없습니다.
  // response.json()을 사용하면 JSON 데이터를 JavaScript 객체로 바꿀 수 있습니다.
  const data = await response.json();

  // console.log()는 개발자도구 Console에서 값을 확인할 때 사용합니다.
  // 화면에 보이지는 않지만 데이터 구조를 확인하는 데 중요합니다.
  console.log(data);

  // innerHTML은 HTML 태그까지 포함해서 화면 내용을 바꿀 때 사용합니다.
  // 백틱(`)을 사용하면 여러 줄 문자열을 작성할 수 있습니다.
  // ${} 안에는 JavaScript 값을 넣을 수 있습니다.
    resultBox.innerHTML = `
      <h2>${data.title}</h2>
      <p>${data.body}</p>
    `;
});



/*    *중요정보
     - api : 프로그램과 프로그램 사이의 야속된 창구
     - 버튼 클릭 -> fetch를 통해 api 요청 -> 데이터를 응답받아 json 형태로 변환
         -> 데이터를 응답받아 json 형태로 변환
         -> 화면 출력
     
     - fetch(url) => 이 URL로 다녀와줘 => 시간이 소요됨
     - await => 응답 도착할 때까지 기다려
     - async => "이곳에서 await 쓸거야" 라는 선언     
*/