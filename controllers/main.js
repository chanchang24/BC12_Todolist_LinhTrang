import TaskServices from '../services/TaskServices.js';
import Task from "../models/Task.js";

let taskServices = new TaskServices();

const getEle = (id) => document.getElementById(id);
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
            <li class="todo" >
                
                <span >
                    ${task.item}
                </span>
                <div class="buttons">
                <button type="button" class="btn  " onclick="checkTaskComplete(${index})" "><i class="fa fa-check-circle complete"></i></button>
                <button type="button" onclick="deleteTask(${index})"  class="btn  "><i class="fa fa-trash remove"></i></button>
                </div>
                
            </li>
            
        `

    })
    setLocalStorage()

    getEle('todo').innerHTML = content;
}

const renderTaskComplete = (arrTaskComplete) => {
    let content = '';
    arrTaskComplete.map((task, index) => {
       return content += `
        <li class="todo#completed">
       
        <label class=" completed"  for="checkTask-${index}">
            ${task.item}
        </label>
        <button type="button" onclick="deleteTaskComplete(${index})"  class="btn buttons "><i class="fa fa-trash remove"></i></button>
        </li>
    
        `
    })
    setLocalStorageComplete()
    getEle('completed').innerHTML = content;

}
const renderAll = () => {
    renderTask(taskServices.arrTask)
    setLocalStorage()
    renderTaskComplete(taskServices.arrTaskComplete)
    setLocalStorageComplete ()
}

//ham sap xep A-Z
const sortAZ=() => {
    taskServices.sortAZ();
    renderAll()
}
getEle('two').addEventListener('click',sortAZ);
//ham sap xep Z-A
const sortZA=() => {
    taskServices.sortZA();
    renderAll();
}
getEle('three').addEventListener('click',sortZA);
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
    renderTaskComplete(taskServices.arrTaskComplete)
    setLocalStorageComplete();
}
//ham check
const checkTaskComplete = index => {
    taskServices.checkTask(index);
    renderAll()
}
//ham checkAllTask
const checkAllTask = index => {
    taskServices.checkAllTask(index)
    renderAll()
}


getEle('one').addEventListener('click',checkAllTask)


window.deleteTaskComplete = deleteTaskComplete
window.checkTaskComplete = checkTaskComplete
window.deleteTask = deleteTask