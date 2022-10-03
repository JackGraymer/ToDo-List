let projectsList = [];

function project (title,details){
    this.title = title;
    this.details = details;
    projectsList.push(this)

}
let jimmi = new project('test1')

let sicarios = new project('satanology')

let title = document.querySelector('#newProjectName')

function createProject(){

    new project(title.value)
    document.querySelector('.projects').textContent = 'Projects'
    title.value = ''
    
console.log(projectsList)
}

function updateProjects(){
    projectsList.forEach(project => {
        let button = document.createElement('button');
        button.classList.add('navbutton')
        button.textContent = project.title
        document.querySelector('.projects').appendChild(button)
        title.value = ''
    })
}

updateProjects()

export {
    projectsList,
    createProject,
    updateProjects,
}