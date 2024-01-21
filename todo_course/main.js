
//Selectors
const jsTodoInput = document.querySelector(".todoInput");
const jsTodoButton = document.querySelector(".todoButton");
const jsTodoList = document.querySelector(".todoList");
const filterTodo = document.querySelector(".filter-todo")


//Event Listeners
jsTodoButton.addEventListener("click", addTodo);
jsTodoList.addEventListener("click", deleteCheck);
filterTodo.addEventListener("click", allOption);



//  Functions 
function addTodo(event){
    //Prevent form , from submitting
    event.preventDefault();

     //Todo Div
     const todoDiv = document.createElement("div");
     todoDiv.classList.add("todo");

     // Create li
     const newTodo = document.createElement("li");
     newTodo.innerText = jsTodoInput.value;
     newTodo.classList.add("todo-item");
     todoDiv.appendChild(newTodo);

     //Check Mark Button
     const completedButton = document.createElement("button");
     completedButton.innerHTML = "<i class='fas fa-check' ></i>";
     completedButton.classList.add("complete-btn");
     todoDiv.appendChild(completedButton);

     //Delete Button
     const deleteButton = document.createElement("button");
     deleteButton.innerHTML = "<i class='fas fa-trash'></i>";
     deleteButton.classList.add("delete-btn");
     todoDiv.appendChild(deleteButton);

     // Append to List
     jsTodoList.appendChild(todoDiv);
     
     // Clear  tode input
     jsTodoInput.value = "";
};

function deleteCheck(e) {
    const item = e.target;
    //Delete todo
    if (item.classList[0] === "delete-btn"){
        const todo = item.parentElement;

        //Add animation
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function(){
            todo.remove()
        });
    }
    //Compelete todo

    
    if (item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed")
    }
};


function allOption(e) {
    const todos = jsTodoList.childNodes;
    todos.forEach(function(todo) {
        switch(e.target.value){
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")){
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
            break;
            case "uncompleted":
                if (!todo.classList.contains("completed")){
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    });
};