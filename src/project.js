let projectsList = [];

function project (title,details){
    this.title = title;
    this.details = '';
    this.todo = []
    projectsList.push(this)

}

let first = new project('My first Project!')
first.details = 'Some details here...'

let title = document.querySelector('#newProjectName')

function createProject(){

    new project(title.value)
    //document.querySelector('.projects').textContent = 'Projects'
    title.value = ''
    
console.log(projectsList)
}

function updateProjects(){
    document.querySelector('.projects').textContent = ''
    projectsList.forEach(project => {
        let button = document.createElement('button');
        button.classList.add('navbutton')
        button.textContent = project.title
        document.querySelector('.projects').appendChild(button)
        title.value = ''
    })
}


let actualProject = ''

function chooseProject(){
    let currentProject = projectsList.find(project => project.title === event.target.textContent)
    actualProject = currentProject;
    console.log('actual project is ' + actualProject.title)
    return currentProject
}

updateProjects()

function updateTitle(){
    actualProject.title = event.target.textContent
    updateProjects()
}

function updateDetails (){
    actualProject.details = event.target.value
}

function createTodo(){
    function todo(title, state){
        this.title = title
        this.state = state
        actualProject.todo.push(this)
    }
    new todo(event.target.value, false)
    event.target.value = ''
}

function memoryStorage(){
    let projectStorage = []
    function save(){
        projectStorage = JSON.stringify(projectsList)
        localStorage.setItem('projectStorage', projectStorage)
    }

    function load(){
        projectStorage = localStorage.getItem('projectStorage')
        console.log(projectStorage)
        if(projectStorage == '[]'){
            console.log('loadStop')
            return
        }
        projectsList = JSON.parse(projectStorage)
        updateProjects()
    }
    
    return {save, load, }
}
memoryStorage().load()

export {
    projectsList,
    createProject,
    updateProjects,
    chooseProject,
    actualProject,
    updateTitle,
    updateDetails,
    createTodo,
    memoryStorage,
}