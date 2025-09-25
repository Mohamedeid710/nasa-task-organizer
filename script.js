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
  
  // Delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.textContent = 'Delete';
  deleteBtn.onclick = function (e) {
    e.stopPropagation();
    listContainer.removeChild(li);
  };
  li.appendChild(deleteBtn);
  listContainer.appendChild(li);
  taskInput.value = '';
}

// Enter to add
taskInput.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') addTask();
});
