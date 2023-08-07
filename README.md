# Ping-Pong_no_Electron
Uma Atividade de Ping-Pong para o Curso Técnico de Desenvolvimento de Sistemas

Esta atividade está sendo desenvolvida para meios de estudos. 

Abaixo, um passo-a-passo de como ter acesso ao Ping-Pong e conseguir jogar-lo!


REQUISITOS:

- Baixar os códigos disponibilizados nesse repositório (clicar em "<> Code" e depois em "Download ZIP").
- Visual Studio Code, conhecido como VSCODE ( ou qualquer outra IDE de preferência ).
- Node.js instalado na sua máquina!
- Electron instalado no código( caso o electron já instalado no código não funcione ).


Instalação do Visual Studio Code:

<a href="https://code.visualstudio.com/opengraphimg/opengraph-home.png"></a>

- https://code.visualstudio.com/download



Instalação do Node.js:

<a href="https://media.geeksforgeeks.org/wp-content/uploads/20190311152716/Capture120.png"></a>

- https://nodejs.org/en/download (Instale a versão LTS, que é a mais recomendada... Além disso, na instalador, escolha a versão completa, por ser mais recomendada também).
- Abra o Prompt de Comando(cmd) e digite "node --version" para verificar a versão instalada do seu Node, se mostrar a versão, significa que a instalação foi bem sucedida.


Instalação do Electron:

<a href="https://unixcop.com/wp-content/uploads/2023/04/install-electron.png"></a>

- Abra o Prompt de Comando, entre na pasta do código (copie o endereço da pasta, digite "cd" no prompt de commando e logo em seguida, cole o endereço da pasta e aperte ENTER), digite "npm init -y", verifique se na pasta do código apareceu um "package.json", e após isso, digite no prompt de commando "npm install electron --save-dev" e seu electron está instalado.





PASSO A PASSO:


1. Abra o Visual Studio Code (ou outra IDE), clique lá em cima em "Arquivo" (ou "File" se seu VSCODE estiver em inglês) e clique em "Abrir Pasta" ("Open Folder"), escolha a pasta do código e abra.

2. Com a pasta aberta no VSCODE, apenas abra o Prompt de Comando no caminho da pasta( ou, lá em cima do VSCODE, clique em "Terminal" e escolhe um novo terminal (New Terminal)) e digite "npm start" e o Electron irá abrir o Ping-Pong!

3. Lembre-se de instalalar o Electron fazendo o tutorial lá em cima, e após instalar, vá no seu VSCODE, abra o "package.json" e abaixo da linha de código "  "scripts": {  " aperte ENTER e digite "   "start": "electron .",   ", salve com CTRL+S (ou vá em "Arquivo" e clique em "Salvamento Automatico" (Auto Save)) e tente rodar o Electron novamente! (passo 2).


PING-PONG:

Como funciona?

<a href="C:\Users\rafak\Downloads\vba-m-2-1-5\PING.jpg"></a>

1. No menu do jogo, você tem tres opções:
     - Jogar contra a CPU (Player VS Cpu)
     - Jogar contra outro Jogador (Player VS Player)
     - Sair do Jogo (Exit)
  
2. Caso você escolha jogar contra a CPU:
  - Clicando em INICIAR, o jogo começa. Para controlar o seu jogador, você pode clicar na SETA PARA CIMA para a barrinha subir OU você pode clicar na SETA PARA BAIXO para a barrinha descer.
  - Não há limite de pontuação, caso você enjoe daquela pontuação, você pode clicar em RESETAR para reiniciar a pontuação OU caso você não queira mais jogar contra a CPU, você pode clicar em VOLTAR, para voltar ao menu inicial.

3. Caso você escolha jogar contra outro jogador:
  - Clicando em INICIAR, o jogo começa. Para controlar o jogador 1, você pode clicar na tecla "W" para a barrinha subir OU você pode clicar na tecla "S" para a barrinha descer. Para controlar o jogador 2, você pode clicar na SETA PARA CIMA para a barrinha subir OU você pode clicar na SETA PARA BAIXO para a barrinha descer.
  - Não há limite de pontuação, caso você enjoe daquela pontuação, você pode clicar em RESETAR para reiniciar a pontuação OU caso você não queira mais jogar contra outro jogador, você pode clicar em VOLTAR, para voltar ao menu inicial.

4. Clicando em EXIT, o Electron irá fechar.



O Jogo é Gratuito e o jogo é OPEN SOURCE, ou seja, qualquer um pode usar como bem entender.

Agradeço a paciência e compreensão! E Bom jogo!!!
