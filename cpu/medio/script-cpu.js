//Elementos
var vbtIniciar;
var vbtResetar
var vbola;
var vcpu;
var vjogador;
var vPaineltxtPontos;
var vPaineltxtPontosCpu;

//Controle de animação

var game, frames;

//Posições
var posBolaX, posBolaY;
var posJogadorX, posJogadorY;
var posCpuX, posCpuY;

//Direção de acordo com a tecla
var dirJy;

//Posições iniciais
var posJogIniY=180, posCpuIniY=180, posBolaIniX=475, posBolaIniY=240;
var posJogIniX = 10, posCpuIniX = 930;

//Tamanhos
var campoX=0, campoY=0,campoW=960,campoH=500;
var barraW=20, barraH=140, bolaW=20, bolaH=20;

//Direção
var bolaX, bolaY;
//Velocidade
var velBola, velCpu, velJogador;


//Controle
var pontos=0;
var pontosCpu=0;
var tecla;
var jogo = false;

function controlaJog(){
    if(jogo){
        posJogadorY += velJogador * dirJy;
        if(((posJogadorY + barraH) >= campoH) || ((posJogadorY) <= 0)){
            posJogadorY += (velJogador*dirJy)*(-1);
        }
        vjogador.style.top = posJogadorY + "px";
    }
}

function controlaCpu(){
    if(jogo){
        if((posBolaX > (campoW/2)) && (bolaX > 0)){
            //Movimentar CPU
            if((posBolaY + (bolaH/2) > ((posCpuY + (barraH/2))) + velCpu)){
                //Mover para Baixo
                if((posCpuY + barraH) <= campoH){
                    posCpuY += velCpu;
                }
            } else if((posBolaY + (bolaH/2) < ((posCpuY + (barraH/2))) - velCpu)){
                //Mover para Cima
                if(posCpuY >=0){
                    posCpuY -= velCpu;
                }
            }
        } else {
            //Posicionar CPU no centro
            if((posCpuY + (barraH/2)) < (campoH / 2)){
                posCpuY += velCpu;
            } else if((posCpuY + (barraH/2)) > (campoH / 2)){
                posCpuY -= velCpu;
            }
        }
        vcpu.style.top = posCpuY + "px";
    }
}

function controlaBola(){
    posBolaX += velBola * bolaX;
    posBolaY += velBola * bolaY;

    if(
        (posBolaX <= posJogadorX + barraW) &&
        ((posBolaY + bolaH >= posJogadorY) && (posBolaY <= posJogadorY + barraH)))
        {
        
        bolaY = (((posBolaY + (bolaH / 2)) - (posJogadorY + (barraH / 2))) / 16);
        bolaX *= -1;
    }

    if(
        (posBolaX >= posCpuX - barraW) &&
        ((posBolaY + bolaH >= posCpuY) && (posBolaY <= posCpuY + barraH)))
        {
       
        bolaY = (((posBolaY + (bolaH / 2)) - (posCpuY + (barraH / 2))) / 16);
        bolaX *= -1;
    }

    //colisão com os limites
    if((posBolaY >= 480) || (posBolaY <= 0)){
        bolaY *= -1;
    } 

    //saiu é gol!

    if(posBolaX >= (campoW - bolaW)){
        velBola = 0;

        posBolaX = posBolaIniX;
        posBolaY = posBolaIniY;

        posJogadorY = posJogIniY;
        posJogadorX = posJogIniX;

        posCpuY = posCpuIniY;
        posCpuX = posCpuIniX;

        pontos++;
        vPaineltxtPontos.value = pontos;

        jogo = false;

        vjogador.style.top = posJogadorY + "px";
        vcpu.style.top = posJogadorY + "px";
    } else if(posBolaX <= 0){
        velBola = 0;

        posBolaX = posBolaIniX;
        posBolaY = posBolaIniY;

        posJogadorY = posJogIniY;
        posJogadorX = posJogIniX;

        posCpuY = posCpuIniY;
        posCpuX = posCpuIniX;

        pontosCpu++;
        vPaineltxtPontosCpu.value = pontosCpu;

        jogo = false;

        vjogador.style.top = posJogadorY + "px";
        vcpu.style.top = posJogadorY + "px";
    }
    
    vbola.style.top = posBolaY + "px";
    vbola.style.left = posBolaX + "px";
}

function teclaDw(){
    tecla = event.keyCode;
    if(tecla == 38){
        //CIMA
        dirJy= -1;
    } else if(tecla == 40){
        //BAIXO
        dirJy = 1;
    }

}

function teclaUp(){

    tecla = event.keyCode;
    if(tecla == 38){
        //CIMA
        dirJy= 0;
    } else if(tecla == 40){
        //BAIXO
        dirJy = 0;
    }


}

function game(){
    if(jogo){
        controlaJog();
        controlaBola();
        controlaCpu();
    }

    frames = requestAnimationFrame(game);
}

function iniciaJogo(){

    if(!jogo){
        velBola = 15;
        velCpu = 25;
        velJogador = 8;
        cancelAnimationFrame(frames);
        jogo = true;
        dirJy = 0;
        bolaY = 0;
        if((Math.random() * 10) < 5){
            bolaX = -1;
        } else {
            bolaX = 1;
        }

        posJogadorX = posJogIniX;
        posCpuX = posCpuIniX;
        posBolaX = posBolaIniX;
        posBolaY = posBolaIniY;
        posJogadorY = posJogIniY;
        posCpuY = posCpuIniY;
        game();

    } 
    


}

function resetar(){


    velBola = 0;

    posBolaX = posBolaIniX;
    posBolaY = posBolaIniY;

    posJogadorY = posJogIniY;
    posJogadorX = posJogIniX;

    posCpuY = posCpuIniY;
    posCpuX = posCpuIniX;

    pontos = 0;
    vPaineltxtPontos.value = pontos;

    pontosCpu = 0;
    vPaineltxtPontosCpu.value = pontosCpu;

    jogo = false;

    vjogador.style.top = posJogadorY + "px";
    vcpu.style.top = posJogadorY + "px";

}

function inicializa(){

    velBola = 15;
    velCpu = 25;
    velJogador = 8;

    vbtIniciar = document.getElementById('btIniciar');
    vbtIniciar.addEventListener('click', iniciaJogo);
    vbtResetar = document.getElementById('btResetar');
    vbtResetar.addEventListener('click', resetar);
    vjogador = document.getElementById('dvJogador');
    vcpu = document.getElementById('dvCpu');
    vbola = document.getElementById('dvBola');
    vPaineltxtPontos = document.getElementById('txtPontos');
    vPaineltxtPontosCpu = document.getElementById('txtPontosCpu');
    document.addEventListener("keydown", teclaDw);
    document.addEventListener("keyup", teclaUp);
}

window.addEventListener("load", inicializa);