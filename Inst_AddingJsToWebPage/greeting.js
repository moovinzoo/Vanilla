const form = document.querySelector(".js-greetings-form")
,   input = form.querySelector("input")
,   greeting = document.querySelector(".js-greetings-text");

const USER_LS = "currentUser"
,   SHOWING_CN = "showing";

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(userName) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello, ${userName}`;
}

function saveName(userName) {
    localStorage.setItem(USER_LS, userName);
}

function handleSubmit(event) {
    event.preventDefault();
    const userName = input.value;
    paintGreeting(userName);
    saveName(userName);
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();