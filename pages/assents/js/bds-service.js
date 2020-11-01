var is = require("electron-is");
var pass = localStorage.getItem('password');
// start server
function server_start() {
  console.log('Inicializado')
  var spawn = require('child_process').spawn;
  var child = spawn('echo' + ' ' + pass + ' |sudo -S ' + '|sudo -S service bds start', {
    shell: true
  });
  child.on('exit', function (code) {
    if (code == 0) {
      alert('servidor iniciado com sucesso');
      return console.log('Servidor Iniciado')
    } else {
      alert('Por Favor Verifique seu você configurou para iniciar junto com o sistema');
      return console.log(`Erro ${code}`)
    }
  });
};

// Stop Server
function server_stop() {
  console.log('Parando')
  var spawn = require('child_process').spawn;
  var child = spawn('echo' + ' ' + pass + ' |sudo -S ' + 'service bds stop', {
    shell: true
  });
  child.on('exit', function (code) {
    if (code == 0) {
      alert('servidor parado com sucesso');
      console.log('Servidor parado')
    } else {
      alert('Por Favor Verifique seu você configurou para iniciar junto com o sistema')
    }
  });
};

// Restart
function server_restart() {
  console.log('Reiniciando')
  var spawn = require('child_process').spawn;
  var child = spawn('echo' + ' ' + pass + ' |sudo -S ' + 'service bds restart', {
    shell: true
  });
  child.on('exit', function (code) {
    if (code == 0) {
      alert('servidor reiniciado com sucesso')
    } else {
      alert('Por Favor Verifique seu você configurou para iniciar junto com o sistema')
    }
  });
};