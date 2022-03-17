//pagina 1
var inputsValor = new Array(5)
var tecnologiasCaixa = document.getElementById("checkbox")
var tecnologiasConhecidas = document.getElementsByClassName("tecnologias")
var tecnologiasConhecidasValor = new Array
var inputs = document.getElementsByClassName("envioB")
var botao = document.getElementById("botao")
var aplicação = document.getElementById("aplicação")
var aplicaçãoTipo = document.getElementsByClassName("aplicacaoTipo")
var aplicaçãoValorFinal 
//caso não haja interação já tenha um valor definido
aplicaçãoValorFinal = aplicaçãoTipo[0].value


aplicação.onmouseout = function(){
    aplicaçãoTipo[0].onclick = function(){
        aplicaçãoValorFinal = aplicaçãoTipo[0].value
    }
    aplicaçãoTipo[1].onclick = function(){
        aplicaçãoValorFinal = aplicaçãoTipo[1].value
    }
    aplicaçãoTipo[2].onclick = function(){
        aplicaçãoValorFinal = aplicaçãoTipo[2].value
    }
}

function verificação(){
    for(let c = 0; c <= 6; ++c){
        tecnologiasConhecidas[c].onclick = function(){
            tecnologiasConhecidasValor[c] = tecnologiasConhecidas[c].value
        }
    }
}
tecnologiasCaixa.onmouseover = function(){
    verificação();
}

//pagina2
var pagina2 = document.getElementById("seuResultado")
var nome = document.getElementById("nomeResultado")
var sobre_nome = document.getElementById("sobre_nomeResultado")
var email = document.getElementById("emailResultado")
var areaAtuação = document.getElementById("atuaçãoResultado")
var senior = document.getElementById("senioridadeResultado")
var conhecimentos = document.getElementsByClassName("conhecimentoResultado")
var experiencia = document.getElementById("experienciaResultado")
var seta = document.getElementsByClassName("seta")
var topicos1 = [nome, sobre_nome, email, senior, experiencia]






botao.onclick = function(a){
    a.preventDefault();
    pagina2.classList.add("resultadoAparecer")
    for(let a = 0; a <= 1; ++a){
        seta[a].innerText = `↓`
    }
    for(let b = 0; b <= 4; ++b){
        inputsValor[b] = inputs[b].value;
    }
    for(let a = 0; a <= 4; ++a){
        topicos1[a].innerText = inputsValor[a]
    }
    for(let a = 0; a <= 6; ++a){
        if(tecnologiasConhecidasValor[a] != undefined){
            conhecimentos[a].innerHTML = `<li>${tecnologiasConhecidasValor[a]}</li>`
        }
    }
    areaAtuação.innerText = `${aplicaçãoValorFinal}`
}
