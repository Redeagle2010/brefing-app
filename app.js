
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}

document.addEventListener('DOMContentLoaded', loadTasks);

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
  const list = document.getElementById('task-list');
  list.innerHTML = '';
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.textContent = task;
    list.appendChild(li);
  });
}

function addTask() {
  const input = document.getElementById('task-input');
  const task = input.value.trim();
  if (!task) return;
  const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  input.value = '';
  loadTasks();
}

function clearTasks() {
  if (confirm('Alle Aufgaben löschen?')) {
    localStorage.removeItem('tasks');
    loadTasks();
  }
}

function showSettings() {
  alert('Einstellungen sind aktuell nicht verfügbar.');
}
