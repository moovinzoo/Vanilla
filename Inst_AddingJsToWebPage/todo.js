const form_todo = document.querySelector(".js-todo-form"),
    input_todo = form_todo.querySelector("input"),
    list_todo = document.querySelector(".js-todo-list");

const TODO_LIST_LS = "todoList";

const todoList = []; // make todo list into empty array in the first beginning.

function paintNewTodo(newTodo) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = todoList.length + 1;
    delBtn.innerText = "❌";
    span.innerText = newTodo;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    list_todo.appendChild(li);
    saveNewTodo(newTodo, newId);
}

function saveNewTodo(newTodo, newId) {
    // Save newTodo into todoList
    const todoList = localStorage.getItem(TODO_LIST_LS);
    const todoObj = {
        name: newTodo,
        id: newId
    }
    todoList.push(todoObj);

    // Save todoList into local storage
    localStorage.setItem(TODO_LIST_LS, JSON.stringify(toDos));
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
    const loaded_todoList = localStorage.getItem(TODO_LIST_LS);
    if (loaded_todoList !== null) {
        // showTodoList(todoList);
    }
    // askForTodo(todoList);
}

function init() {
    loadTodoList();
    form_todo.addEventListener("submit", handleTodoSubmit);
}

init();