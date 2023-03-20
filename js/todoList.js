const todoList = document.getElementById("todoList");

function addItem() {
    const newTask = document.createElement("li");
    const newText = document.getElementById("taskInput").value;
    const newTextNode = document.createTextNode(newText);

    document.getElementById("taskInput").value = ""; // reseteamos el texto de la barra

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

  upButton.addEventListener("click", moveTaskUp);
  downButton.addEventListener("click", moveTaskDown);
  removeButton.addEventListener("click", removeTask);
}

// Adds the new task when button is clicked and adds it to the bottom of the list
const addTaskButton = document.getElementById("addTaskButton");
addTaskButton.onclick = addItem;


// Seleccionar todos los botones "taskUp"
const taskUpButtons = document.querySelectorAll('img[src="images/taskUp.png"]');

// Agregar action listener a todos los "taskUp"
taskUpButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const currentTask = this.parentElement;
        const previousTask = currentTask.previousElementSibling;

        //cambiar las posiciones con el hermano anterior
        if (previousTask) {
            currentTask.parentElement.insertBefore(currentTask, previousTask);
        }
    });
});


const removeButton = document.querySelectorAll('img[src="images/removeTask.png"]');

removeButton.forEach(function (button) {
    button.addEventListener("click", function () {
        const currentTask = this.parentElement;
        currentTask.innerHTML = "";
        todoList.removeChild(currentTask);
    });
});
