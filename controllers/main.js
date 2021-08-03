import TaskServices from '../services/TaskServices.js';
import Task from "../models/Task.js";

let taskServices = new TaskServices();

const getEle = (id) => document.getElementById(id);



//ham lay value
const getTask = () => {
    let newTask = getEle('newTask').value;
    const task = new Task(newTask);
    taskServices.addTask(task);
    renderTask(taskServices.arrTask)
    setLocalStorage();
    getEle('newTask').value ='';
}
getEle('addItem').addEventListener('click', getTask)
    
//ham delete
const deleteTask = (index) => {
    taskServices.deleteTask(index);
    renderTask(taskServices.arrTask)
    setLocalStorage();
}

const deleteTaskComplete = (index) => {
    taskServices.deleteTaskComplete(index);
    renderTask(taskServices.arrTaskComplete)
    setLocalStorage();
}
//ham check
const checkTaskComplete = index => {
    taskServices.checkTask(index);
    renderAll()

}
//set localStorage
const setLocalStorage = () => {
    localStorage.setItem('TaskList', JSON.stringify(taskServices.arrTask));
}
const setLocalStorageComplete = () => {
    localStorage.setItem('TaskListCompleted', JSON.stringify(taskServices.arrTaskComplete))
}
const getLocalStorage = () => {
    if (localStorage.getItem('TaskList')) {
        taskServices.arrTask = JSON.parse(localStorage.getItem('TaskList'))
    }
}
const getLocalStorageComplete = () => {
    if (localStorage.getItem('TaskListCompleted')) {
        taskServices.arrTaskComplete=JSON.parse(localStorage.getItem('TaskListCompleted'))
    }
}
getLocalStorage();
getLocalStorageComplete();
//render task
const renderTask = (arrTask) => {
    let content = ' ';
    arrTask.map((task, index) => {
        content += `
            <li class=" custom-control custom-checkbox">
                <input class="custom-control-input form-check-inline " onclick="checkTaskComplete(${index})" type="checkbox"  id="checkTask-${index}">
                <label class="custom-control-label" style="with=20px" for="checkTask-${index}">
                    ${task.item}
                </label>
                <button type="button" onclick="deleteTask(${index})"  class="btn btn-scusses">X</button>
            </li>
            
        `

    })
    getEle('todo').innerHTML = content;
}

const renderTaskComplete = (arrTaskComplete) => {
    let content = '';
    arrTaskComplete.map((task, index) => {
       return content += `
        <li class=" custom-control custom-checkbox">
        <input class="custom-control-input form-check-inline " onclick="checkTaskComplete(${index})" type="checkbox"  id="checkTask-${index}">
        <label class="custom-control-label" style="with=20px" for="checkTask-${index}">
            ${task.item}
        </label>
        <button type="button" onclick="deleteTask(${index})"  class="btn btn-scusses">X</button>
        </li>
    
        `
    })
    console.log(arrTaskComplete)
    getEle('completed').innerHTML = content;

}
const renderAll = () => {
    renderTask(taskServices.arrTask)
    setLocalStorage()
    renderTaskComplete(taskServices.arrTaskComplete)
    setLocalStorageComplete ()
}
window.deleteTaskComplete = deleteTaskComplete
window.checkTaskComplete = checkTaskComplete
window.deleteTask = deleteTask