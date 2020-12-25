document.addEventListener("DOMContentLoaded", () => {
  const submit = document.querySelectorAll("input")[1];
  const ul = document.querySelector("#tasks")

  submit.addEventListener("click", function(event) {
    let text = document.getElementById("new-task-description")

    event.preventDefault();
    ul.innerHTML += `<li>${text.value}</li>`
    text.value = ""
  })
});
