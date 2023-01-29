const addInput = document.querySelector(".addInput");
const addBtn = document.querySelector(".addBtn");
const todoList = document.querySelector(".todoList");

function addTodo(value) {
  if (!value) return;

  const newTodoItem = document.createElement("label");
  newTodoItem.classList.add("todoItem");
  newTodoItem.innerHTML = `
    <input class="checkBox" type="checkbox" />
    ${value}
  `.trim();

  todoList.appendChild(newTodoItem);
  addInput.value = "";
}

function handleKeyupInput(event) {
  if (event.key !== "Enter") return;

  addTodo(event.target.value);
}

function handleClickButton() {
  addTodo(addInput.value);
}

addInput.addEventListener("keyup", handleKeyupInput);
addBtn.addEventListener("click", handleClickButton);
