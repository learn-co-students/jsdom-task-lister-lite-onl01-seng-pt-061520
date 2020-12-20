document.addEventListener("DOMContentLoaded", () => {
  
  const form = document.querySelector('form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    let inputTag = document.getElementById('new-task-description');
    let inputValue = inputTag.value;

    let li = document.createElement('li');
    li.innerText = inputValue;

    let ul = document.getElementById('tasks');
    ul.append(li);
    inputTag.value;
    
  })
});
