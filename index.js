let heading = document.querySelector(".heading")
let nameInput = document.querySelector('[placeholder="fullname"]')
let emailInput = document.querySelector('[placeholder="email"]')
let formHeading = document.querySelector('.form-heading')
let formContainer = document.querySelector('.form-container')
let form = document.querySelector('form')
function updateHeaderName(name){
     heading.innerText = name
}

function insertFormHeading(){
    formHeading.style.textAlign="center"
    formHeading.style.backgroundColor="yellow"
    formContainer.insertBefore(formHeading,form)
}


function changeInputNames(placeholderName,placeholderEmail){
    let name = nameInput.setAttribute('placeholder',placeholderName)
    let email = emailInput.setAttribute('placeholder',placeholderEmail)
}

setTimeout(()=>{
    updateHeaderName("Git And GitHub")
    changeInputNames("Enter Github User Name","Enter Github Email")
    insertFormHeading()
},1500)

setTimeout(()=>{
    updateHeaderName("GIT AND GITHUB")
    changeInputNames("Enter Name","Enter  Email")

},1000*6)