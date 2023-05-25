var a = document.getElementById('a')
//escutador - escutar == listen
//evento == event

a.addEventListener('click',clicar)

var b = document.getElementById('btn')
b.addEventListener('click',clicou)

function clicar(){
    a.style.display = 'none'
}
function clicou(){
    var texto = document.getElementById('p')
    texto.style.display = 'block'
}