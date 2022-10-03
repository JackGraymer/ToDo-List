import darkimg from './img/dark-btn.png'
import githubicon from './img/github.png'
import deleteicon from "./img/delete.png"
import {projectsList, createProject, updateProjects,} from './project'
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
        console.log(event.target.textContent)
        })   
    });
}

document.querySelector('#add').addEventListener('click', () => {
    let title = document.querySelector('#newProjectName')
    if (title.value !== ''){
        createProject();
        updateProjects();     
        createButtonList() 
    }
})

function footer(){ //sets the github icon link
    let github = document.querySelector('#github')
    github.src=githubicon
}
footer()

function deleteProjectIcon(){
    let deleteIcon = document.querySelector('#projectDelIco')
    deleteIcon.src=deleteicon
}
deleteProjectIcon()