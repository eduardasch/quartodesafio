const eduarda = document.querySelector('input')
const schmitz = document.querySelector('ol')
let escrever = []
function adicionar(){
    escrever.push(eduarda.value)
    render()
    eduarda.value=''
}
function apagar(){
    escrever=[]
    schmitz.innerHTML=null
}
function render(){
    schmitz.innerHTML=null
    escrever.forEach(function(tarefa){
        const li=document.createElement('li')
        li.innerText=tarefa
        schmitz.appendChild(li)
    })
}