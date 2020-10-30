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
function createWindowerro () {
  // Cria uma janela de navegação de erro.
  const win = new BrowserWindow({
    titleBarStyle: 'hidden',
    width: 300,
    height: 70,
    icon: path.join(__dirname, 'pages/assents/mcpe.png'),
    webPreferences: {
      sandbox: true
    }
  })
  win.loadFile('erro.html')
}
var spawn = require('child_process').spawn;
var child = spawn('command -v bds-maneger', {
  shell: true
});
child.on('exit', function (code) {
  console.log (`code ${code}`)
  if (code == 0){
    app.whenReady().then(createWindow);
  } else {
    app.whenReady().then(createWindowerro);
    // app.quit();
  }
});
//  app.whenReady().then(createWindow)

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