const form_todo = document.querySelector(".js-todo-form")
,   text_todo = form_todo.querySelector("input")
,   list_todo = document.querySelector(".js-todoList");

const TODOS_LS = "todoList";

function showTodos(todoList) {
    console.log(todoList);
}

function addTodo(newTodo) {
}

function loadTodos() {
    const todoList = localStorage.getItem(TODOS_LS);

    if (todoList !== null) {
        showTodos(todoList);
    }

    if (text_todo.value !== null) {
        addTodo(text_todo.value);
    }
}

function init() {
    loadTodos();
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