document.addEventListener("DOMContentLoaded", () => {
  const myTextbox = document.getElementById('new-task-description');
  const form = document.getElementById("create-task-form")

 form.addEventListener('submit', function(event){

  function makeATextListElement() {
    let userInput = myTextbox.value
    element = document.getElementById("tasks")
    let li = document.createElement('li')
    li.innerHTML = userInput
    element.appendChild(li)
   }
   event.preventDefault()

   makeATextListElement()

  myTextbox.value = ""
  })
})
  // your code here
;


