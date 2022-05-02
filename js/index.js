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

function game(jogador,maquina){

    let resultado = combinacoes[jogador][maquina]
    if(resultado==0){
        pontuacaoMaquina++
    }
    if(resultado==2){
        pontuacaojogador++
    }
}

function generateRandomChar(){
    min = Math.ceil(0);
    max = Math.floor(4);
    return Math.floor(Math.random() * (max - min + 1)) + min;

}

function eraseBorders(){

    document.querySelectorAll(".personagens").forEach((curr)=>{

        curr.style.borderColor=""
        
    })
}

document.querySelectorAll(".personagens").forEach((curr,index)=>{
    
    curr.addEventListener("click",(e)=>{
        
        escolhaMaquina = generateRandomChar()
        e.target.style.borderColor = "green"
        personagens[escolhaMaquina].style.borderColor="red"
        game(index, escolhaMaquina)
       
        console.log(personagens[index].id+" "+personagens[escolhaMaquina].id)
        document.querySelector("#placar span").innerHTML = "Jogador"+String(pontuacaojogador)+"x"+String(pontuacaoMaquina)+"Máquina"
    })  
})

