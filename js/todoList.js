const todoList = document.getElementById("todoList");

function addItem() {
    const newTask = document.createElement("li");
    const newText = document.getElementById("taskInput").value;
    const newTextNode = document.createTextNode(newText);

    document.getElementById("taskInput").value = ""; // Reset input text

    newTask.className = "list-group-item d-flex flex-row align-items-center";
    newTask.innerHTML = `
        <span class="taskName flex-grow-1">${newText}</span>
        <img id="upButton" src="images/taskUp.png" />
        <img id="downButton" src="images/taskDown.png" />
        <img id="removeButton" src="images/removeTask.png" />`;

    const todoList = document.getElementById("todoList");
    todoList.appendChild(newTask);

    const upButton = newTask.querySelector("#upButton");
    const downButton = newTask.querySelector("#downButton");
    const removeButton = newTask.querySelector("#removeButton");

    upButton.addEventListener("click", function() {
        const currentTask = this.parentElement;
        const previousTask = currentTask.previousElementSibling;

        //Switch positions with previous task
        if (previousTask) {
            currentTask.parentElement.insertBefore(currentTask, previousTask);
        }
    });

    downButton.addEventListener("click", function() {
        const currentTask = this.parentElement;
        const nextTask = currentTask.nextElementSibling;

        //Switch positions with next task
        if (nextTask) {
            currentTask.parentElement.insertBefore(nextTask,currentTask);
        }
    });

    removeButton.addEventListener("click", function() {
        const currentTask = this.parentElement;
        currentTask.innerHTML = "";
        todoList.removeChild(currentTask);
    });

    //Focus input after adding a task
    document.getElementById("taskInput").focus();
}

// Adds the new task when button is clicked and adds it to the bottom of the list

const addTaskButton = document.getElementById("addTaskButton");
addTaskButton.onclick = addItem;

const addTaskInput = document.getElementById("taskInput");
addTaskInput.addEventListener("keyup", function(event) {
    if (event.code === "Enter") {
        addItem();
    }
});