let projectsList = [];

function project (title,details){
    this.title = title;
    this.details = '';
    this.todo = []
    projectsList.push(this)

}
let jimmi = new project('Jimmy')
jimmi.details = 'Jimmy is 13 and likes fortnite'

let sicarios = new project('satanology')

let title = document.querySelector('#newProjectName')

function createProject(){

    new project(title.value)
    //document.querySelector('.projects').textContent = 'Projects'
    title.value = ''
    
console.log(projectsList)
}

function updateProjects(){
    document.querySelector('.projects').textContent = 'Projects'
    projectsList.forEach(project => {
        let button = document.createElement('button');
        button.classList.add('navbutton')
        button.textContent = project.title
        document.querySelector('.projects').appendChild(button)
        title.value = ''
    })
}

function chooseProject(){
    let currentProject = projectsList.find(project => project.title === event.target.textContent)
    actualProject = currentProject;
    console.log('actual project is ' + actualProject.title)
    return currentProject
}

let actualProject = ''

updateProjects()

function updateTitle(){
    actualProject.title = event.target.textContent
    updateProjects()
}

function updateDetails (){
    actualProject.details = event.target.value
}

export {
    projectsList,
    createProject,
    updateProjects,
    chooseProject,
    updateTitle,
    updateDetails,
}