const btn = document.getElementById("btn")
const container = document.getElementById("container")

btn.addEventListener("click",()=>{
 createToastNotfy()
})

function createToastNotfy(){
    const notify = document.createElement("div")
    notify.classList.add('toast')
    notify.innerText="hello buddy"

    container.appendChild(notify)
    setTimeout(()=>{
        notify.remove()
    },3000)
}