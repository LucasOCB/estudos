var cronometro
var hora = document.getElementById("hora");
var minutos = document.getElementById("minutos");
var segundos = document.getElementById("segundos");
var DecimoSegundos = document.getElementById("DecimoSegundos");
var inicio = document.getElementById("inicio");
var parada = document.getElementById("parar");
var reiniciar = document.getElementById("resetar");
var tempoDSegundos = 0
var tempoSegundos = 0
var tempoMinutos = 0
var tempoHoras = 0
var controle = 0
var dia = 0


function digitos(a, b){
    (a < 10 ? b.innerText = `0${a}` : b.innerText = a)
}
function running(){
    tempoDSegundos++;
    digitos(tempoDSegundos, DecimoSegundos)
    if(tempoDSegundos == 100){
        tempoDSegundos = 0
        DecimoSegundos.innerText = `${tempoDSegundos}`
        tempoSegundos++;  
        digitos(tempoSegundos, segundos);
    }
    if(tempoSegundos == 60){
        tempoSegundos = 0
        segundos.innerText = `${tempoSegundos}`
        tempoMinutos++;  
        digitos(tempoMinutos, minutos);
    }
    if(tempoMinutos == 60){
        tempoMinutos = 0
        minutos.innerText = `${tempoSegundos}`
        tempoHoras++;  
        digitos(tempoHoras, hora);
    }
    if(tempoHoras == 24){
        dia++;
        if(dia == 1){
            window.alert(`Se passaram ${dia} dia`)
        }else{
            window.alert(`Se passaram ${dia} dias`)
        }
        stop();
    }
} 
function reset(){
    clearInterval(cronometro);
    controle = 0
    tempoDSegundos = 0
    tempoSegundos = 0
    tempoMinutos = 0
    tempoHoras = 0
    DecimoSegundos.innerText = "00"
    minutos.innerText = "00"
    segundos.innerText = "00"
    hora.innerText = "00"
}
function stop(){
    clearInterval(cronometro);
    controle = 0
}



inicio.onclick = function(){
    if(controle == 0){
        cronometro = setInterval(() => {running();}, 10);
        controle++
    }
    controle = 1
}
parada.onclick = function(){
    stop();
}
reiniciar.onclick = function(){
    reset();
}