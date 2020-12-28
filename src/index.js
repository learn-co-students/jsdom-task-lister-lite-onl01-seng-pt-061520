document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#create-task-form").addEventListener("submit", function(event) {
    let taskResponse = document.getElementById("new-task-description");
    let ul = document.getElementById("tasks")
    let li = document.createElement('li');
    li.innerHTML = taskResponse.value;
    ul.appendChild(li);
    event.preventDefault();
    
}, false);
});
