function clicado(){
    var x = document.getElementById('conteudo')
    x.innerHTML = 'clicado'
}
function data(){
    var data = new Date()
    var dia = data.getDate()
    var mes = data.getMonth()
    mes = mes+1
    var ano = data.getFullYear()
    var span = document.getElementById('span')
    span.innerHTML =  dia +'/'+mes+'/' + ano
}
function arredondar(){
    var x = document.getElementById('div')
    x.style.borderRadius = '50%'
    x.style.background = 'green'
}
function tente(){
    var a = document.getElementById('tente')
    a.style.marginLeft = '100px'
    var msg = document.getElementById('msg')
    msg.innerHTML = 'trouxa não consegue clicar HAHAHA'
}
function denovo(){
    var a = document.getElementById('tente')
    a.style.marginLeft = '0px'
    document.getElementById('msg').innerHTML = ''
}