document.addEventListener("DOMContentLoaded", () => {
	const taskList = document.getElementById('tasks');
	const newTaskForm = document.getElementById('create-task-form');
	const newTaskDescription = document.getElementById('new-task-description');

	newTaskForm.addEventListener('submit', (e) => {
		e.preventDefault();
		const newTask = document.createElement('li')
		newTask.innerText = newTaskDescription.value
		taskList.appendChild(newTask)
	});
});
