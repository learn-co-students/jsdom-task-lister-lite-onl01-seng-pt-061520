document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById('create-task-form')
  const list = document.getElementById('tasks')
  
  form.addEventListener("submit", function(event){
    event.preventDefault();
    const item = document.createElement('li')
    item.innerHTML = document.getElementById('new-task-description').value
    list.appendChild(item)
  })

});
