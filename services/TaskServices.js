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
        this.arrTask.slice(index, index + 1)

        this.arrTaskComplete = [...this.arrTaskComplete, ...taskComplete];
        this.deleteTask(index)
    }
    checkAllTask() {
        let taskComplete = ''
        taskComplete = this.arrTask.slice(0)
        this.arrTaskComplete = [...this.arrTaskComplete, ...taskComplete]
        this.arrTask = []
    }
    sortAZ() {

        this.arrTask.sort((a, b) => a.task.localeCompare(b.task))
        this.arrTaskCompleted.sort((a, b) => a.task.localeCompare(b.task))
    }
    sortZA() {

        this.arrTask.reverse((a, b) => a.task.localeCompare(b.task))
        this.arrTaskCompleted.reverse((a, b) => a.task.localeCompare(b.task))
    }
}
export default TaskServices;