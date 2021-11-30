const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menu = document.querySelector('.navbar__menu');
const links = document.querySelector('.navbar__links');




/* 사진 및 글 목록 생성 */
function create(i) {

  /* main이 사진과 글을 감싸는 형태 */
  let main = document.createElement("div")
  main.className = "main";
  main.onclick = function () {
    speak(data[i][select.selectedIndex + 1], select.value);     //미리 만들어 둔 data를 이용하여 선택
  }

  let image = new Image();
  image.src = data[i][0];         //미리 만들어 둔 주소를 이용하여 선택

  let comment = document.createElement("p");
  comment.className = "comment";
  comment.append(data[i][4]);

  main.appendChild(image);
  main.appendChild(comment);

  document.getElementById("container").appendChild(main);
}

const select = document.getElementById("lang")    //select 정보
const text = document.getElementById("text")      //input 정보
const btn = document.getElementById("btn")        //button 정보

btn.addEventListener("click", e => {
  speak(text.value, select.value);
})

/* enter키 누를 시 */
function enter(event) {
  if (event.keyCode == 13) {
    speak(text.value, select.value);
  }
}

/* 소리 출력 */
function speak(text, language) {
  window.speechSynthesis.cancel(); // 초기화

  /* input이 비어있다면 */
  if(!text)
  {
    text = "Please fill in the blank";
  }

  const speechMsg = new SpeechSynthesisUtterance();
  speechMsg.lang = language;      //언어 설정
  speechMsg.text = text;          //글 설정

  window.speechSynthesis.speak(speechMsg);   //소리 출력
}
