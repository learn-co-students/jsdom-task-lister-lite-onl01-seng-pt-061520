document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskField = document.getElementById("new-task-description")
  const taskList = document.getElementById("tasks")
  const form = document.getElementById("create-task-form")
  

  function addItem() {
    let userInput = taskField.value;
    let listItem = document.createElement('li');
    listItem.innerHTML = userInput + `<button id=${userInput} >X</button>`;
    list.appendChild(listItem);
    }
  
  
  
  form.addEventListener('submit', function(e) {
    addItem()
    form.reset()
    e.preventDefault()
   });

});
