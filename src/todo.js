const todoForm = document.querySelector("#toDoForm");
const inputTodo = document.querySelector("#toDoForm input");
const toDoList = document.querySelector("#toDoList");

let toDos = [];

//리스트를 삭제해주는 함수
function deleteToDo(event) {
  const li = event.target.parentElement;
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  li.remove();
  saveToDos();
}

const TODOS_KEY = "todos";

//리스트를 로컬스토리지에 저장하는 함수. 그냥 텍스트를 문자열로 변환시켜주는 stingify를 사용
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

//입력한 값을 출력시켜주는 함수
function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  span.innerText = newToDo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

//입력을 받는 함수
function submitHandler(event) {
  event.preventDefault();
  const newToDo = inputTodo.value;
  inputTodo.value = "";
  //데이터를 삭제하기 위한 포맷으로 바꾸기 위해서 객체형으로 변환
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj); //array로 넣겠다. 뭐 그런뜻인가?
  paintToDo(newToDoObj);
  saveToDos();
}

todoForm.addEventListener("submit", submitHandler);

/*
function sayHello(item) {
  console.log("this is turn of", item);
}*/

const savedToDos = localStorage.getItem(TODOS_KEY);

//스트링을 살아있는(?) 객체로 만들어주는 함수
if (savedToDos) {
  const parseToDos = JSON.parse(savedToDos);
  toDos = parseToDos;
  console.log(parseToDos);
  parseToDos.forEach(paintToDo);
}
