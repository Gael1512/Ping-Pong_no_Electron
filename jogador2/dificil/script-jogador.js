//Elementos
var vbtIniciar;
var vbtResetar
var vbola;
var vjogador2;
var vjogador;
var vPaineltxtPontos;
var vPaineltxtPontosJog2;

//Controle de animação

var game, frames;

//Posições
var posBolaX, posBolaY;
var posJogadorX, posJogadorY;
var posJogador2X, posJogador2Y;

//Direção de acordo com a tecla
var dirJy;
var dirJy2;

//Posições iniciais
var posJogIniY=180, posJog2IniY=180, posBolaIniX=475, posBolaIniY=240;
var posJogIniX = 10, posJog2IniX = 930;

//Tamanhos
var campoX=0, campoY=0,campoW=960,campoH=500;
var barraW=20, barraH=140, bolaW=20, bolaH=20;

//Direção
var bolaX, bolaY;
 
//Velocidade
var velBola, velJogador2, velJogador;


//Controle
var pontos=0;
var pontos2=0;
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

function controlaJog2(){
    if(jogo){
        posJogador2Y += velJogador * dirJy2;
        if(((posJogador2Y + barraH) >= campoH) || ((posJogador2Y) <= 0)){
            posJogador2Y += (velJogador*dirJy2)*(-1);
        }
        vjogador2.style.top = posJogador2Y + "px";
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
        (posBolaX >= posJogador2X - barraW) &&
        ((posBolaY + bolaH >= posJogador2Y) && (posBolaY <= posJogador2Y + barraH)))
        {
       
        bolaY = (((posBolaY + (bolaH / 2)) - (posJogador2Y + (barraH / 2))) / 16);
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

        posJogador2Y = posJog2IniY;
        posJogador2X = posJog2IniX;

        pontos++;
        vPaineltxtPontos.value = pontos;

        jogo = false;

        vjogador.style.top = posJogadorY + "px";
        vjogador2.style.top = posJogador2Y + "px";
    } else if(posBolaX <= 0){
        velBola = 0;

        posBolaX = posBolaIniX;
        posBolaY = posBolaIniY;

        posJogadorY = posJogIniY;
        posJogadorX = posJogIniX;

        posJogador2Y = posJog2IniY;
        posJogador2X = posJog2IniX;

        pontos2++;
        vPaineltxtPontosJog2.value = pontos2;

        jogo = false;

        vjogador.style.top = posJogadorY + "px";
        vjogador2.style.top = posJogador2Y + "px";
    }
    
    vbola.style.top = posBolaY + "px";
    vbola.style.left = posBolaX + "px";
}

function teclaS(){
    tecla = event.keyCode;
    if(tecla == 87){
        //W
        dirJy = -1;
    } else if(tecla == 83){
        //S
        dirJy = 1;
    }
}

function teclaW(){
    tecla = event.keyCode;
    if(tecla == 87){
        //W
        dirJy = 0;
    } else if(tecla == 83){
        //S
        dirJy = 0;
    }
}

function teclaDw(){
    tecla = event.keyCode;
    if(tecla == 38){
        //CIMA
        dirJy2= -1;
    } else if(tecla == 40){
        //BAIXO
        dirJy2 = 1;
    }

}

function teclaUp(){

    tecla = event.keyCode;
    if(tecla == 38){
        //CIMA
        dirJy2= 0;
    } else if(tecla == 40){
        //BAIXO
        dirJy2 = 0;
    }


}

function game(){
    if(jogo){
        controlaJog();
        controlaBola();
        controlaJog2();
    }

    frames = requestAnimationFrame(game);
}

function iniciaJogo(){

    if(!jogo){
        velBola = 30; 
        velJogador2 = 8;
        velJogador = 8;
        cancelAnimationFrame(frames);
        jogo = true;
        dirJy = 0;
        dirJy2 = 0 ;
        bolaY = 0;
        if((Math.random() * 10) < 5){
            bolaX = -1;
        } else {
            bolaX = 1;
        }

        posJogadorX = posJogIniX;
        posJogador2X = posJog2IniX;
        posBolaX = posBolaIniX;
        posBolaY = posBolaIniY;
        posJogadorY = posJogIniY;
        posJogador2Y = posJogIniY;
        game();

    } 
    


}

function resetar(){


    velBola = 0;

    posBolaX = posBolaIniX;
    posBolaY = posBolaIniY;

    posJogadorY = posJogIniY;
    posJogadorX = posJogIniX;

    posJogador2Y = posJog2IniY;
    posJogador2X = posJog2IniX;

    pontos = 0;
    vPaineltxtPontos.value = pontos;

    pontos2 = 0;
    vPaineltxtPontosJog2.value = pontos2;

    jogo = false;

    vjogador.style.top = posJogadorY + "px";
    vjogador2.style.top = posJogadorY + "px";
}

function inicializa(){

    velBola = 30; 
    velJogador2 = 8;
    velJogador = 8;

    vbtIniciar = document.getElementById('btIniciar');
    vbtIniciar.addEventListener('click', iniciaJogo);
    vbtResetar = document.getElementById('btResetar');
    vbtResetar.addEventListener('click', resetar);
    vjogador = document.getElementById('dvJogador');
    vjogador2 = document.getElementById('dvJogador2');
    vbola = document.getElementById('dvBola');
    vPaineltxtPontos = document.getElementById('txtPontos');
    vPaineltxtPontosJog2 = document.getElementById('txtPontosJog2');
   
    document.addEventListener("keydown", teclaDw);
    document.addEventListener("keyup", teclaUp);

    document.addEventListener("keyup", teclaW);
    document.addEventListener("keydown", teclaS);
    
    
}

window.addEventListener("load", inicializa);

