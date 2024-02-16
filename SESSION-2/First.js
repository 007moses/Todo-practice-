// Refering Container (section)
const todoapp =document.getElementById("todo-container");

// Creating Input & button Elements (For todo app) 

const inputTask = document.createElement("input");
inputTask.setAttribute("type", "text");

const addBtn = document.createElement("button");
addBtn.innerHTML= "Add Task"

const todoList = document.createComment("ul");



addBtn.addEventListener("click", ()=>{
    
    const newTask = inputTask.value;

    const todoItem= document.createElement("li");
    todoItem.textContent = newTask;
    todoList.appendChild(todoItem);
    
    inputTask.value = "";
});
// Append into container
todoapp.appendChild(inputTask);
todoapp.appendChild(addBtn);
todoapp.appendChild(todoList);