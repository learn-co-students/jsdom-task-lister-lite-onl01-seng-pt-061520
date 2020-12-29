document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const ul = document.getElementById('tasks')
  const delete_list = document.getElementById('delete_list')
  const delete_btn = document.getElementById('delete_btn')

  document.addEventListener('submit', function(event) {
    // do something
    event.preventDefault()
    //console.log("EvenListener Fired")
    let task = document.getElementById('new-task-description').value
    //console.log("task=" + task);
    let li = document.createElement('li')
    li.innerText = task
    ul.appendChild(li)

    let option = document.createElement('option')
    option.innerText = task
    delete_list.appendChild(option)

  })

  delete_btn.addEventListener('click', function(event) {
    event.preventDefault()
    let selected = document.getElementById('delete_list')
    let selected_item = selected.value
    console.log("selected item=" + selected_item);
  })
});
