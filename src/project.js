let projectsList = [];

function project (title,details){
    this.title = title;
    this.details = details;
    projectsList.push(this)

}
let jimmi = new project('test1')

let sicarios = new project('satanology')

console.log(projectsList)

function createProject(){
    let button = document.createElement('button');
    button.classList.add('navbutton')
    button.textContent = projectsList[0].title
    document.querySelector('.projects').appendChild(button)
}
createProject()

export {projectsList,}