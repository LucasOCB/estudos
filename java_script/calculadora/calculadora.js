const numeros = document.querySelectorAll("[data-numero]")
const operadores = document.querySelectorAll("[data-operador]")
const resultado = document.getElementById("igual")
const painelDeCima = document.getElementById("painel1")
const painelDeBaixo = document.getElementById("painel2")
const limpaTela = document.getElementById("limpa-tudo")
const limpaUltimoDigito = document.getElementById("delet")

class ModeloCalculadora{
    constructor(painel1, painel2){
        this.painel1 = painel1
        this.painel2 = painel2
        this.limpaDado();
    }
    calculo(){
        let resultado
        const a = parseFloat(this.painel1Dado)
        const b = parseFloat(this.painel2Dado)
        if(isNaN(a) || isNaN(b)){
            return
        }
        switch(this.operador){
            case "+":  
                resultado = a + b
                break;
            case "-":  
                resultado = a - b
                break;
            case "*":  
                resultado = a * b
                break;
            case "/":  
                resultado = a / b
                break;
        }
        this.painel2Dado = resultado
        this.painel1Dado = ""
        this.operador = ""
    }
    tirarUltimoDigito(){
        if(this.painel2Dado === ""){
            return
        }
        this.painel2Dado = this.painel2Dado.toString().slice(0, -1)
        this.atualizarTexto();
    }
    addNumero(dado){
        if(this.painel2Dado.includes(".") && dado === "."){
            return
        }
        if(this.painel2Dado === "" && dado === "."){
            return
        }
        this.painel2Dado = `${this.painel2Dado}${dado.toString()}`
    }
    addOperador(dado){
        if(this.painel2Dado === ""){
            return
        }
        if(this.painel2Dado.toString().includes(".") && this.painel2Dado.toString().slice(-1) === "."){
            return
        }
        if(this.painel2Dado.toString().slice(-1) === "0" && this.painel2Dado.toString().slice(-2, -1) === "."){
            this.painel2Dado = this.painel2Dado.slice(0, -2) 
        }
        if(this.painel2Dado !== "" && this.painel1Dado !== ""){
            this.calculo()
        }
        this.operador = dado
        this.painel1Dado = this.painel2Dado
        this.painel2Dado = ""
    }
    limpaDado(){
        this.painel1Dado = "";
        this.painel2Dado = "";
        this.operador = ""
    }
    atualizarTexto(){
        this.painel1.innerText = `${this.painel1Dado} ${this.operador || ""}`;
        this.painel2.innerText = this.painel2Dado;
    }
}
const calculadora = new ModeloCalculadora(painelDeCima, painelDeBaixo)

for(const numeroClicado of numeros){
    numeroClicado.addEventListener('click', () => {
        calculadora.addNumero(numeroClicado.innerText)
        calculadora.atualizarTexto();
    })
}
for(let operadorClicado of operadores){
    operadorClicado.addEventListener('click', () => {
        calculadora.addOperador(operadorClicado.innerText)
        calculadora.atualizarTexto();
    })
}
limpaTela.onclick = () =>{
    calculadora.limpaDado();
    calculadora.atualizarTexto();
}
resultado.onclick = () => {
    calculadora.calculo();
    calculadora.atualizarTexto();
}
limpaUltimoDigito.onclick = () => {
    calculadora.tirarUltimoDigito();
}