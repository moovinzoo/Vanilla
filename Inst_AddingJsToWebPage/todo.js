const form_todo = document.querySelector(".js-todo-form"),
    input_todo = form_todo.querySelector("input"),
    list_todo = document.querySelector(".js-todo-list");

const TODO_LIST_LS = "todoList";

function paintNewTodo(newTodo) {

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















// const form_todo = document.querySelector(".js-toDoForm");
// const input_todo = form_todo.querySelector("input");
// const list_todo = document.querySelector(".js-toDoList");

// const TODOS_LS = "toDos";
// function loadToDos() {
//     const toDos = localStorage.getItem(TODOS_LS);
//     if (toDos !== null) {
//     }
// }

// function paintToDo(text) {
//     const li = document.createElement("li");
//     const deleteBtn = document.createElement("button");
//     deleteBtn.value = "❌";
//     const span = document.createElement("span");
//     span.innerText = text;
//     li.appendChild(span);
//     li.appendChild(deleteBtn);
//     list_todo.appendChild(li);
// }

// function handleSubmit(event) {
//     event.preventDefault();
//     const currentValue = input_todo.value;
//     paintToDo(currentValue);
//     input_todo.value = null;
// }

// function init() {
//     loadToDos;
//     form_todo.addEventListener("submit", handleSubmit);
// }

// init();