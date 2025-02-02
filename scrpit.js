function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");
  
    if (taskInput.value.trim()) {
      const li = document.createElement("li");
      li.innerHTML = `${taskInput.value} <button onclick="deleteTask(this)">Delete</button>`;
      taskList.appendChild(li);
      taskInput.value = "";
    }
  }
  
  function deleteTask(button) {
    button.parentElement.remove();
  }
  