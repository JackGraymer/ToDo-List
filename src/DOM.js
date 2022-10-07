import darkimg from './img/dark-btn.png'
import githubicon from './img/github.png'
import deleteicon from "./img/delete.png"
import {projectsList, createProject, updateProjects, chooseProject, actualProject, updateTitle, updateDetails, createTodo} from './project'
import favicon from './img/favicon.png'

function setFavIcon(){
    let icon = document.querySelector('#favicon')
    icon.href = favicon
}
setFavIcon()

function header() {//Sets Icon from dark theme
    let darkicon = document.querySelector('#dark-icon')
    darkicon.src = darkimg

    let darkbtn = document.querySelector('#mode')
    darkbtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode')
    })
}
header()

function createButtonList(){
    let projectButtons = document.querySelectorAll('.projects>button')
    projectButtons.forEach(element => {
        element.addEventListener('click', () => {
        populateContent()
        })   
    });
}
createButtonList()

document.querySelector('#add').addEventListener('click', () => {
    //Adds new project to the list
    let title = document.querySelector('#newProjectName')
    if (title.value !== ''){
        createProject();
        updateProjects();     
        createButtonList() 

    }
})

document.querySelector('#newProjectName').addEventListener('keydown', () => {
    if(event.key === 'Enter'){
        let title = document.querySelector('#newProjectName')
        if (title.value !== ''){
            createProject();
            updateProjects();     
            createButtonList() 
        }   
    }
})
function populateContent(){//Sets content of the project on the main container
    let currentProject = chooseProject()
    let title = document.querySelector('#title')
    title.textContent = currentProject.title
    document.querySelector('#detailsInput').value = currentProject.details 
    contentEventsManager();

    updateTodos()
}

function clearTodos(){
    document.querySelectorAll('.list').forEach(ul => {
        if(ul.classList == 'list'){
            ul.remove()
        }
    });
    console.log(actualProject)
}

function createTodoList(){
    actualProject.todo.forEach(element => {
        //Creating new elements and giving their properties
        let todoList = document.querySelector('#todo')
        let ul = document.createElement('ul')
        ul.classList='list'
        let button = document.createElement('button')
        button.classList= 'checkbox'
        let input = document.createElement('input')
        input.classList = 'navbutton'
        input.value = element.title
        //Append items
        todoList.insertBefore(ul, document.querySelector('#todoInput'))
        ul.appendChild(button)
        ul.appendChild(input)
    });
}

function updateTodos(){
    clearTodos();
    createTodoList()
}

function contentEventsManager(){
    document.querySelector('#title').addEventListener('focusout', () => {
        updateTitle();
        createButtonList();
    })
    document.querySelector('#detailsInput').addEventListener('focusout', updateDetails);
    document.querySelector('#todoInput').addEventListener('keydown', () => {
        if(event.key ==='Enter' && document.querySelector('#todoInput').value !==''){
            createTodo();
            updateTodos();
        }
    })
}

function footer(){ //sets the github icon link
    let github = document.querySelector('#github')
    github.src=githubicon
}
footer()

let deleteIcon = document.querySelector('#projectDelIco')

function deleteProjectIcon(){
    
    deleteIcon.src=deleteicon
}
deleteProjectIcon()

deleteIcon.addEventListener('click', () => {
    let chosenIndex = projectsList.findIndex(x => x.title == title.textContent)
     if (chosenIndex !== -1){
        
        projectsList.splice(chosenIndex, 1)
        console.log(projectsList)
        updateProjects()
        createButtonList()
        clearTodos()
        title.textContent = 'No Project Selected!'
        document.querySelector('#detailsInput').value = ''
    } 
    
})
    