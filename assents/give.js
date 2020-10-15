var is = require("electron-is");

function appendOutputGive(msg) { getCommandOutputGive().innerHTML += (msg); };

function GIVE() {
    const process = require('child_process');   // The power of Node.JS

    // Command output (base)
    var sudo = 'sudo';
    var GUI = 'GUI=true';
    var bds_command = 'bds-command';
    var give = 'give'

    // Nick

    var nick = document.getElementById("nick").value

    // Item
    var item = document.getElementById("item").value

    // quantidade de intens
    var tanto = document.getElementById("pack").value

    var child = process.spawn(sudo, [GUI, bds_command, give, nick, item, tanto]); 

    child.on('error', function(err) {
      appendOutputGive('Tivemos Um Erro <'+err+'>' );
    });

    child.stdout.on('data', function (data) {
      appendOutputGive(data);
    });
};
