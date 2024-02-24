const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
// const replace = document.getElementsByTagName("placeholder");

function addTask() {
    if (inputBox.value === '') {
        let don = inputBox.placeholder = "You Must Write a Task";
        // don.innerHTML.style.colar = red;
    }
    else {

        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    savadata();
}
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savadata();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savadata();
    }
},false);

function savadata() {
localStorage.setItem("data",listContainer.innerHTML); 
}
function showtask() {
    listContainer.innerHTML = localStorage.getItem("data");    
}
showtask();