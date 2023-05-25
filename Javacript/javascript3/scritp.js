//if
//for
var nomes = [
    'Leonardo',
    'valmir',
    'Iago',
    'Marcos',
    'Lucas'
]//array

for(var i = 0; i<nomes.length;i++){
    document.write(i+1+'-'+nomes[i])
    document.write('<br>')
}
document.write('<hr>')

for(nome in nomes){
    document.write(nomes[nome])
    document.write('<br>')
}

document.write('<hr>')

//while
var c = 0
while(c<nomes.length){
    document.write(nomes)
    c++
}
//switch
var idade = 20
switch(idade){
    case 17:
        document.write('dezessete')
        break
    case 20:
        document.write('vinte')
    default:
        document.write('não informado')
}

document.write('<hr>')
//foreach
nomes.forEach(
    function(nome, index){
        index = index+1
        document.write(index, '-' , nome, '<br>')
    }
)
document.write('<hr>')

var data = new Date()
var hora = data.getHours()
var minuto = data.getMinutes()
var segundo = data.getSeconds()

document.write('Você acessou exatamente ás ',hora, ':' , minuto, ':', segundo)