document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task');
    const tasksContainer = document.getElementById('tasks');

    // Function to create a new task element
    const createTaskElement = (taskText) => {
        const task = document.createElement('div');
        task.classList.add('task');

        const taskContent = document.createElement('span');
        taskContent.textContent = taskText;
        task.appendChild(taskContent);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        task.appendChild(deleteButton);

        deleteButton.addEventListener('click', () => {
            task.remove();
        });

        return task;
    };

    // Add task event
    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const taskElement = createTaskElement(taskText);
            tasksContainer.appendChild(taskElement);
            taskInput.value = '';
        }
    }); // 
}); // 
