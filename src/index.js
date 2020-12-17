document.addEventListener("DOMContentLoaded", () => {
  // your code here
  //Const that identifies the the form
  const taskForm = document.querySelector('#create-task-form');
  // Const that identifies the task list
  const taskList = document.querySelector("#tasks");
  
  //Add to the List's Function//
  taskForm.addEventListener("submit", function(event){
    
    // First prevent the page from refreshing the page
    event.preventDefault();

    // Second, get the .value of the information being passed in.
    const newTask = document.querySelector("#new-task-description").value;

    // Third, List the item as well as create a delete button for it.
    taskList.innerHTML += `<li> ${newTask} 
    <button data-action = "delete"> X </button>
    </li>`

    //Forth, refresh the form after each submission
    taskForm.reset();
  });

  // Lastly, Create function listens for the "click" to delete item
  taskList.addEventListener("click", function(e){
    if (e.target.dataset.action === "delete"){
      e.target.parentElement.remove();
    }
  })

});
