let nSecreto = 0
let intentos = 0;
let listaNum =[];
let nMax = 10;
function asignarTexto(elemento, texto){
    let elementoHTML = document.querySelector(elemento)
    elementoHTML.innerHTML= texto
}
 

function verificarIntento(){
    let nUsuario = parseInt(document.getElementById("numUsu").value)
    if(nUsuario===nSecreto){
        asignarTexto("p", `Acertaste en ${intentos} ${(intentos ==1) ? "vez" : "veces"}`)
        document.getElementById("reiniciar").removeAttribute("disabled")
    } else if(nUsuario<nSecreto){
        asignarTexto("p","Más")
    } else{
        asignarTexto("p","Menos")
    }
    intentos++
    limpiarCampos()
}

function limpiarCampos(){
 document.querySelector("#numUsu").value = " ";
}
function aleNume() {
   let numGen =  Math.floor(Math.random()*nMax)+1

    if(listaNum.length==nMax){
        asignarTexto("p", "Ya sortearon todos los números posibless")
    } else{
        if(listaNum.includes(numGen)){
            return aleNume()
           } else {
            listaNum.push(numGen)
            return numGen
           }
    }

   

}
function condicionesIniciales(){
    asignarTexto("h1", "JUEGUITO")
    asignarTexto("p",`Coloca un número del 1 al ${nMax}`) 
    nSecreto = aleNume()
    intentos =1
}
function reiniciarGame(){
    limpiarCampos()
    condicionesIniciales()
    
    document.querySelector("#reiniciar").setAttribute("disabled", "true")
}

condicionesIniciales()
