document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
  function formSubmit(e){
    e.preventDefault();
    const listItem = document.createElement("li");
    const textValue = document.getElementById("new-task-description").value;
    listItem.textContent = textValue;
   
    document.getElementById("tasks").append(listItem);
  }
  const form = document.getElementById('create-task-form');
  const log = document.getElementById('new-task-description');
  form.addEventListener('submit', formSubmit);
});
