const show = document.querySelector("#show") 
const hide = document.querySelector("#hide")
const password = document.querySelector("#password") 

show.addEventListener('click', ()=>{

    show.style.display = "none"
    hide.style.display = "inline-block"  


    const type = password. getAttribute("type") === "password"  ?  "text" : "text";
    password.setAttribute("type", type)

})

hide.addEventListener('click', ()=>{

    hide.style.display = "none"
    show.style.display = "inline-block"  
    
    const type = password. getAttribute("type") === "password"  ?  "text" : "password";
    password.setAttribute("type", type)

})