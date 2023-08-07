
//importar o electron dentro da página javascript, trazendo tanto o app quanto o BrowerWindow para a criação da janela em Electron
const {app, BrowserWindow} = require('electron');

//uma condição para que quando o Electron esteja pronto para rodar, ele rode com as caracteristicas designadas dentro das chaves
app.whenReady().then(()=>{


    let mainWindow = new BrowserWindow({
        width: 1230,
        height: 720,
        resizable: false,
        webPreferences: {
            nodeIntegration: true
        }
    });


    //código para escolher a página que será exibida quando o Electron for executado.
    mainWindow.loadURL(`file://${__dirname}/index.html`);


});