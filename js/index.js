const personagens = [...Object.values(document.getElementsByClassName("personagens"))].map((curr)=>{
    return curr
})
let escolhaJogador
let escolhaMaquina
let pontuacaojogador=0
let pontuacaoMaquina=0

let combinacoes = [ [1,0,2,2,0],
                    [2,1,0,0,2],
                    [0,2,1,2,0],
                    [0,2,0,1,2],
                    [2,0,2,0,1],];

function game(jogador,maquina,objeto){

    let resultado = combinacoes[jogador][maquina]
    if(resultado==0){
        pontuacaoMaquina++
        objeto.style.borderColor = "red"
        objeto.style.borderWidth = "5px"
        personagens[escolhaMaquina].style.borderColor="green"
        personagens[escolhaMaquina].style.borderWidth="5px"
        document.querySelector("#mensagem span").innerHTML = "Você Perdeu!"
        
    }
    else if(resultado==2){
        pontuacaojogador++
        objeto.style.borderColor = "green"
        objeto.style.borderWidth = "5px"
        personagens[escolhaMaquina].style.borderColor="red"
        personagens[escolhaMaquina].style.borderWidth="5px"
        document.querySelector("#mensagem span").innerHTML = "Você Ganhou!"
    }
    else{
        document.querySelector("#mensagem span").innerHTML = "Empate!"
        document.getElementById("jogador").innerHTML=""
        document.getElementById("maquina").innerHTML=""
    }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function generateRandomChar(){
    min = Math.ceil(0);
    max = Math.floor(4);
    return Math.floor(Math.random() * (max - min + 1)) + min;

}

function resetBorders(){

    document.querySelectorAll(".personagens").forEach((curr)=>{

        curr.style.borderColor=""
        curr.style.borderWidth=""
        
    })
}

document.querySelectorAll(".personagens").forEach((curr,index)=>{
    
    curr.addEventListener("click",(e)=>{
        resetBorders()
        escolhaMaquina = generateRandomChar()
        let targetObject = e.target.tagName=="IMG"?e.target.parentNode:e.target
        game(index, escolhaMaquina,targetObject)

        document.getElementById("jogador").innerHTML=capitalizeFirstLetter(targetObject.id)
        document.getElementById("maquina").innerHTML=capitalizeFirstLetter(personagens[escolhaMaquina].id)
        document.querySelector("#resultado span").innerHTML = "Jogador "+String(pontuacaojogador)+"x"+String(pontuacaoMaquina)+" Máquina"
    })  
})

