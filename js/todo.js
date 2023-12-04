const todoForm = document.querySelector("#todoForm");
const todoInput = todoForm.querySelector("#todoForm input");
const todoList = document.querySelector("#todoList");
const todos = [];

todoForm.addEventListener('submit', handleToDoSubmit);

if(localStorage.getItem("todoList") != null){
    todoList.value = localStorage.getItem("todoList");
}



function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(todos));
}


function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener('click', deleteToDo )

    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
    todoInput.value= "";
    localStorage.setItem("todoList", todoList);
}