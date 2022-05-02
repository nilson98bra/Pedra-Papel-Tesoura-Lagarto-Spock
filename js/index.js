const personagens = [...Object.values(document.getElementsByClassName("personagens"))].map((curr)=>{
    return curr.id
})
let escolhaJogador
let escolhaMaquina

document.querySelectorAll(".personagens").forEach((curr)=>{

    curr.addEventListener("click",(e)=>{
        escolhaJogador = e.target.id
        console.log(escolhaJogador)
    })  
})

function generateRandomChar(){
    min = Math.ceil(0);
    max = Math.floor(4);
    return personagens[Math.floor(Math.random() * (max - min + 1)) + min];
}

console.log(generateRandomChar())

function jogo(jogador,maquina){

    let combinacao = jogador+"-"+maquina

}
