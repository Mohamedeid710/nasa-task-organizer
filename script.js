const taskInput = document.getElementById('taskInput');
const listContainer = document.getElementById('listContainer');

// Add a new task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;
  const li = document.createElement('li');
  li.textContent = taskText;
  // Complete toggle
  li.onclick = function () {
    this.classList.toggle('checked');
  }; 
