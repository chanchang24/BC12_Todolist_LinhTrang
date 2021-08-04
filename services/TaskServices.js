class TaskServices {
    constructor() {
        this.arrTask = [];
        this.arrTaskComplete = [];
    }
    addTask(task) {
        this.arrTask.push(task);
    }
    deleteTask(index) {
        this.arrTask.splice(index, 1)
    }
    deleteTaskComplete(index) {
        this.arrTaskComplete.splice(index, 1)
    }
    checkTask(index) {
        let taskComplete = '';
        taskComplete= this.arrTask.slice(index, index + 1)  
 
        this.arrTaskComplete = [...this.arrTaskComplete,...taskComplete];
        this.deleteTask(index)  
        // console.log(taskComplete)
        
        
    }
    checkAllTask() {
        let taskComplete = '';
        taskComplete = this.arrTask.slice(0)
        this.arrTaskComplete = [...this.arrTaskComplete, ...taskComplete]
        this.arrTask = []
    }
    sortAZ() {
        this.arrTask.join();
        this.arrTask.sort();
        console.log(this.arrTask)
        
        // this.arrTaskCompleted.sort((a, b) => a.item.localeCompare(b.item))
    }
    sortZA() {
        this.arrTask.reverse((a, b) => a.item.localeCompare(b.item))
        this.arrTaskCompleted.reverse((a, b) => a.item.localeCompare(b.item))
    }
}
export default TaskServices;