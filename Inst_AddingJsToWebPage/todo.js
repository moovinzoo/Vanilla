const form_todo = document.querySelector(".js-todo-form"),
    input_todo = form_todo.querySelector("input"),
    list_todo = document.querySelector(".js-todo-list");

const TODO_LIST_LS = "todoList";

function paintNewTodo(newTodo) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    const span = document.createElement("span");
    span.innerText = newTodo;
    li.appendChild(delBtn);
    li.appendChild(span);
    list_todo.appendChild(li);
}

// TODO: 
function saveNewTodo(newTodo) {
    const todoList = localStorage.getItem(TODO_LIST_LS);
    // todoList.
}

// TODO: 
function handleTodoSubmit(event) {
    event.preventDefault();
    const currentValue = input_todo.value;
    paintNewTodo(currentValue);
    saveNewTodo(input_todo.value);
    input_todo.vaule = "";
}

function loadTodoList() {
    const todoList = localStorage.getItem(TODO_LIST_LS);
    if (todoList !== null) {
        // showTodoList(todoList);
    }
    // askForTodo(todoList);
}

function init() {
    loadTodoList();
    form_todo.addEventListener("submit", handleTodoSubmit);
}

init();