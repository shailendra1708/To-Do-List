let inputBox = document.getElementById("input-box");
let listContainer = document.getElementById("taskList");

function addTask() {
    if (inputBox.value === ' ') {
        alert("You must add Task")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = " ";
    database();
}
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        database();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        database();
    }
}, false);

function database() {
    localStorage.setItem("data", taskList.innerHTML)
}

function showDatabase() {
    taskList.innerHTML = localStorage.getItem("data");
}
showDatabase();