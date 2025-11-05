let heading = document.querySelector(".heading")

function updateHeaderName(name){
    return heading.innerText = name
}

setTimeout(()=>{
    updateHeaderName("Git And GitHub")
},1500)