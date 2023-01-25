const todoInput = document.querySelector(".todoInput");
const addTodoButton = document.querySelector(".addTodoButton");
const todoList = document.querySelector(".todoList");

function addTodo(value) {
  const newTodoItem = document.createElement("div");
  newTodoItem.classList.add("todoItem");
  newTodoItem.innerText = value;

  todoList.appendChild(newTodoItem);
  todoInput.value = "";
}

function handleKeyupInput(event) {
  if (event.key !== "Enter") return;

  addTodo(event.target.value);
}

function handleClickButton() {
  addTodo(todoInput.value);
}

todoInput.addEventListener("keyup", handleKeyupInput);
addTodoButton.addEventListener("click", handleClickButton);
