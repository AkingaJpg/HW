"use strict";

const form = document.querySelector('.create-task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('.filter.input');
const taskInput = document.querySelector('.task-input');

document.addEventListener('DOMContentLoaded', renderTasks);
form.addEventListener('submit', createTask);
clearBtn.addEventListener('click', clearAllTasks);

function getTasksFromLocalStorage() {
    return localStorage.getItem('tasks') !== null ? JSON.parse(localStorage.getItem('tasks')) : [];
}

function setTasksToLocalStorage(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function createSingleTaskElement(task) {
    const li = document.createElement('li');
    li.className = 'collection-item';

    const textElement = document.createElement('span');
    textElement.className = 'text-item';
    textElement.textContent = task;
    li.appendChild(textElement);

    const editElement = document.createElement('span');
    editElement.className = 'edit-item';
    editElement.innerHTML = '<i class="fa fa-edit"></i>';
    editElement.addEventListener('click', () => editOneElement(li, textElement, editElement));

    li.appendChild(editElement);

    const deleteElement = document.createElement('span');
    deleteElement.className = 'delete-item';
    deleteElement.innerHTML = '<i class="f fa-remove"></i>';
    li.appendChild(deleteElement);
    deleteElement.addEventListener('click', clearSingleTask);

    taskList.appendChild(li);

}

function editOneElement(taskElement, textElement, editButton) {
    const editTask = document.createElement('input');
    textElement.remove();
    editButton.remove();
    editTask.setAttribute('type', 'text');
    editTask.value = textElement.textContent;
    editTask.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            editTask.remove();
            console.log(taskElement.textContent)
            textElement.textContent = editTask.value;
            taskElement.insertBefore(editButton, taskElement.children[0]);
            taskElement.insertBefore(textElement, taskElement.children[0]);

            const nodes = Array.prototype.slice.call(taskList.children);
            const index = nodes.indexOf(textElement.parentElement);
            updateTaskInLocalStorage(textElement.textContent, index);
        }
    })

    taskElement.insertBefore(editTask, taskElement.children[0]);
    console.log(taskElement)

}


function renderTasks() {
    let tasks;

    if (localStorage.getItem('tasks') !== null) {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    } else {
        tasks = [];
    }

    tasks.forEach((task) => {
        createSingleTaskElement(task);
    })
}

function createTask(event) {
    event.preventDefault();
    if (taskInput.value.trim() === '') {
        return;
    }

    createSingleTaskElement(taskInput.value);

    storeTaskInLocalStorage(taskInput.value);

    taskInput.value = '';
}

function updateTaskInLocalStorage(updatedTask, index) {
    const tasks = getTasksFromLocalStorage();
    tasks[index] = updatedTask;
    setTasksToLocalStorage(tasks);
}

function storeTaskInLocalStorage(task) {
    let tasks;
    if (localStorage.getItem('tasks') !== null) {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    } else {
        tasks = [];
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function clearAllTasks() {
    if (confirm('Are you sure?')) {
        localStorage.clear();
        taskList.innerHTML = '';
    }
}



function clearSingleTask(event) {
    let iconContainer = event.target.parentElement;

    const nodes = Array.prototype.slice.call(taskList.children);
    const index = nodes.indexOf(iconContainer.parentElement);
    if (iconContainer.classList.contains('delete-item')) {
        if (confirm('Are you sure?')) {
            iconContainer.parentElement.remove();
            removeTaskFromLocalStorage(iconContainer.parentElement, index);
        }

    }
}

function removeTaskFromLocalStorage(tasktoRemove, removeIndex) {
    let tasks;

    if (localStorage.getItem('tasks') !== null) {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    } else {
        tasks = [];
    }

    console.log([tasks, removeIndex]);
    tasks.splice(removeIndex, 1);

    /*     tasks.forEach((task, index) => {
            if (tasktoRemove.textContent === task) {
            }
        }) */
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
