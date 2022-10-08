import updateTodos from "./DOM"
import { actualProject } from "./project"


function checkTodo(event){
    let list = Array.from(document.querySelectorAll('.checkbox'))
    //let todoList = Array.from(list)
    let i = list.indexOf(event.target)
    if(actualProject.todo[i].state === false){
        actualProject.todo[i].state = true
    }else{actualProject.todo[i].state = false}
    updateTodos()
}

function deleteTodo(){
    let delButtons = Array.from(document.querySelectorAll('.todoDelBtn'))
    let i= delButtons.indexOf(event.target)
    actualProject.todo.splice(i, 1)
    updateTodos()
}

export {checkTodo, deleteTodo}