
var pontosJogador, divPontos, pontosJogador1, pontosJogador2;

pontosJogador = 0;
pontosJogador1 = 0;
pontosJogador2 = 0;


function identificaDiv(jogador){
    return divPontos = document.getElementById('pontosJogador'+jogador);   
}

function adicionar(jogador){
    identificaDiv(jogador);
    
    switch (jogador){
        case 1:
            pontosJogador1 ++;
            divPontos.innerHTML = pontosJogador1;
                if(pontosJogador1 < 0){
                    divPontos.style.color = 'red';
                }else{
                    divPontos.style.color = 'black';
                }
            break;
        case 2:
            pontosJogador2 ++;
            divPontos.innerHTML = pontosJogador2; 
                if(pontosJogador2 < 0){
                    divPontos.style.color = 'red';
                }else{
                    divPontos.style.color = 'black';
                }
            break;
    }
}

function subtrair(jogador){
    identificaDiv(jogador);

    switch (jogador){
        case 1:
            pontosJogador1 = pontosJogador1 - 1;
            divPontos.innerHTML = pontosJogador1;
                if(pontosJogador1 < 0){
                    divPontos.style.color = 'red';
                }else{
                    divPontos.style.color = 'black';
                }
            break;
        case 2:
            pontosJogador2 = pontosJogador2 - 1;
            divPontos.innerHTML = pontosJogador2;
                if(pontosJogador2 < 0){
                    divPontos.style.color = 'red';
                }else{
                    divPontos.style.color = 'black';
                }
            break;
    }

}

function resetar(){
    todosPontos = document.getElementsByClassName('pontosJogador');
    pontosJogador1 = 0;
    pontosJogador2 = 0;

    for (var i = 0; i < todosPontos.length; i++){
        todosPontos[i].innerHTML = 0;
    }
   
}