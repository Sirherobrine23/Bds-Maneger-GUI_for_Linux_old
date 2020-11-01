var is = require("electron-is");
  // Command output (base)
  var GUI = 'GUI=true';
  var bds_command = 'bds-command';
  var give = 'give'
function GIVE() {
    const process = require('child_process');
    // Nick
    var nick = document.getElementById("nick").value
    // Item
    var item = document.getElementById("item").value
    // quantidade de intens
    var tanto = document.getElementById("pack").value
    // Processo
    var child = process.spawn('echo' + ' ' + pass + ' |sudo -S ' ,[GUI, bds_command, give, nick, item, tanto]); 
    child.stdout.on('data', function (data) {
      document.getElementById("LOG").innerHTML += (data);
    });
};
