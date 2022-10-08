import { actualProject } from "./project"

function checkTodo(event){
    let list = Array.from(document.querySelectorAll('.checkbox'))
    //let todoList = Array.from(list)
    let i = list.indexOf(event.target)
    if(actualProject.todo[i].state === false){
        actualProject.todo[i].state = true
    }else{actualProject.todo[i].state = false}
    
}

export default checkTodo