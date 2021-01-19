document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskList = document.querySelector('#tasks');
  const taskInput = document.querySelector('#new-task-description');
  const myForm = document.querySelector('#create-task-form');
  myForm.addEventListener('submit', onSubmit);

  function onSubmit(e) {
    e.preventDefault();
    if(taskInput.value === '') {
      alert('Please enter a task');
    } else {
      const li = document.createElement('li');
      li.appendChild(document.createTextNode(`${taskInput.value}`));
      console.log('success');
      taskList.appendChild(li);
      // Clear fields
      taskInput.value = '';
    }

    console.log(taskInput.value);

  }
})