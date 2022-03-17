var BotaoMudarCor = document.getElementById("mudarCor")
var receberMudançaCor = [document.getElementById("receberCor1"), document.getElementById("receberCor2"), document.getElementById("receberCor3")]
var cicloCor = 0
BotaoMudarCor.onclick = function(){
    ++cicloCor
    switch(cicloCor){
        case 1:
            receberMudançaCor[1].textContent = 'yellow'
            receberMudançaCor[0].classList.add("cor1")
            receberMudançaCor[1].classList.add("corletra1")
            receberMudançaCor[2].classList.add("cor1")
            break
        case 2:
            receberMudançaCor[1].textContent = 'red'
            receberMudançaCor[0].classList.add("cor2")
            receberMudançaCor[1].classList.add("corletra2")
            receberMudançaCor[2].classList.add("cor2")
            break
        case 3:
            receberMudançaCor[1].textContent = 'gren'
            receberMudançaCor[0].classList.add("cor3")
            receberMudançaCor[1].classList.add("corletra3")
            receberMudançaCor[2].classList.add("cor3")
            break
        case 4:
            receberMudançaCor[1].textContent = 'purple'
            receberMudançaCor[0].classList.add("cor4")
            receberMudançaCor[1].classList.add("corletra4")
            receberMudançaCor[2].classList.add("cor4")
            break
        case 5:
            receberMudançaCor[1].textContent = 'blueIce'
            receberMudançaCor[0].classList.add("cor5")
            receberMudançaCor[1].classList.add("corletra5")
            receberMudançaCor[2].classList.add("cor5")
            break
        case 6:
            for(let a = 0; a <= 2; ++a){
                receberMudançaCor[a].classList.remove("corletra1")
                receberMudançaCor[a].classList.remove("corletra2")
                receberMudançaCor[a].classList.remove("corletra3")
                receberMudançaCor[a].classList.remove("corletra4")
                receberMudançaCor[a].classList.remove("corletra5")
                receberMudançaCor[a].classList.remove("cor1")
                receberMudançaCor[a].classList.remove("cor2")
                receberMudançaCor[a].classList.remove("cor3")
                receberMudançaCor[a].classList.remove("cor4")
                receberMudançaCor[a].classList.remove("cor5")
            }
            receberMudançaCor[1].textContent = 'white'
            cicloCor = 0
            break
    }
}