// Show new list input when selecting "Add New List"
document.getElementById('task-list').addEventListener('change', function() {
    const newListContainer = document.getElementById('new-list-container');
    newListContainer.style.display = this.value === 'add-new' ? 'block' : 'none';
  });
  
  // Save task function
  function saveTask() {
    const taskDesc = document.getElementById('task-desc').value;
    const dueDate = document.getElementById('due-date').value;
    const notificationEnabled = document.getElementById('notification').checked;
    const listName = document.getElementById('task-list').value === 'add-new'
      ? document.getElementById('new-list-name').value
      : document.getElementById('task-list').value;
  
    if (taskDesc && listName) {
      alert(`Task saved: ${taskDesc}\nDue: ${dueDate}\nNotifications: ${notificationEnabled ? 'On' : 'Off'}\nList: ${listName}`);
    } else {
      alert('Please fill out the task description and list.');
    }
  }
  
  // Record voice function (placeholder)
  function recordVoice() {
    alert('Voice recording feature coming soon!');
  }
  
  // Add new list function
  function addNewList() {
    const newListName = document.getElementById('new-list-name').value;
    if (newListName) {
      const newOption = document.createElement('option');
      newOption.value = newListName.toLowerCase();
      newOption.textContent = newListName;
      document.getElementById('task-list').appendChild(newOption);
      document.getElementById('task-list').value = newOption.value;
      cancelNewList();
    } else {
      alert('Please enter a list name.');
    }
  }
  
  // Cancel new list function
  function cancelNewList() {
    document.getElementById('new-list-container').style.display = 'none';
    document.getElementById('new-list-name').value = '';
  }
  