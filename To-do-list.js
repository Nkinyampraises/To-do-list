// Array to hold tasks
let tasks = [];

// Toggle sidebar menu visibility
function toggleMenu() {
  const sidebarMenu = document.getElementById('sidebar-menu');
  sidebarMenu.style.display = sidebarMenu.style.display === 'block' ? 'none' : 'block';
}

// Toggle search bar visibility
function toggleSearch() {
  const searchContainer = document.getElementById('search-container');
  searchContainer.style.display = searchContainer.style.display === 'block' ? 'none' : 'block';
}

// Function to navigate to Add Task Page
function openAddTaskPage() {
  window.location.href = 'add-task.html';
}

// Function to search tasks
function searchTasks() {
  const searchInput = document.getElementById('search-input').value.toLowerCase();
  const filteredTasks = tasks.filter(task => task.toLowerCase().includes(searchInput));
  const taskList = document.getElementById('task-list');
  taskList.innerHTML = '';
  filteredTasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task;
    taskList.appendChild(li);
  });
}

// Placeholder functions for menu actions
function addBatchMode() { alert('Batch mode coming soon!'); }
function removeAds() { alert('No ads to remove!'); }
function sendFeedback() { alert('Thank you for your feedback!'); }
function followUs() { alert('Follow us on social media!'); }
function inviteFriends() { alert('Invite friends feature coming soon.'); }
function openSettings() { alert('Settings coming soon.'); }
