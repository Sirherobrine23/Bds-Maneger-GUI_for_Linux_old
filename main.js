process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

const electron = require('electron')
var path = require('path')
const { app, BrowserWindow } = require('electron')
function createWindow () {
  // Cria uma janela de navegação.
  const win = new BrowserWindow({
    titleBarStyle: 'hidden',
    width: 1200,
    height: 620,
    icon: path.join(__dirname, 'pages/assents/mcpe.png'),
    webPreferences: {
      nodeIntegration: true,
      sandbox: false
    }
  })
  win.loadFile('pages/index.html')
}

function bdsmaneger() {
  var spawn = require('child_process').spawn;
  var child = spawn('command -v bds-maneger', {
    shell: true
  });
  child.on('exit', function (code) {
    console.log (`code ${code}`)
    if (code == 0){
      app.whenReady().then(createWindow);
    } else {
      alert(`Exited it BDS-Manager is not installed, code ${code}`);
      app.quit();
    }
  });
};
bdsmaneger();
//  app.whenReady().then(createWindow)
// Este método será chamado quando Electron terminar de inicializar
// e também estiver pronto para criar novas janelas do navegador.
// Algumas APIs podem ser usadas somente depois que este evento ocorre.


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})