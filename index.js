let heading = document.querySelector(".heading")
let nameInput = document.querySelector('[placeholder="fullname"]')
let emailInput = document.querySelector('[placeholder="email"]')

function updateHeaderName(name){
     heading.innerText = name
}


function changeInputNames(placeholderName,placeholderEmail){
    let name = nameInput.setAttribute('placeholder',placeholderName)
    let email = emailInput.setAttribute('placeholder',placeholderEmail)
}

setTimeout(()=>{
    updateHeaderName("Git And GitHub")
    changeInputNames("Enter Github User Name","Enter Github Email")
},1500)

setTimeout(()=>{
    updateHeaderName("GIT AND GITHUB")
    changeInputNames("Enter Name","Enter  Email")

},1000*6)