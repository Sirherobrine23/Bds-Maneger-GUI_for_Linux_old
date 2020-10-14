const { log } = require("console");
var is = require("electron-is");

function appendOutput(msg) { getCommandOutput().value += (msg); };

// For all command's
var sudo = 'sudo';
var bds_config = 'bds-config';
var set_config = 'set';
var get_config = 'get';

// Set command in chil process
var mais = '='

var xb = 'xbox';
var pl = 'player';
var pe= 'permission';
var po = 'port';
var po6 = 'portv6';

function MAXPLAYER() {
  var max = 'player';
  const process = require('child_process');
  var child = process.spawn(sudo, [bds_config, get_config, pl]);
  child.stdout.on('data', function (data) {
    var str;
    str = data.toString();
    str = str.replace(/\r?\n|\r/g, "");
    document.getElementById('player').value = (str);
    return console.log("Total for players connect in world: "  + str);
  });
}

function GETPERMISSION() {
  const process = require('child_process');
  var child = process.spawn(sudo, [bds_config, get_config, pe]);
  child.stdout.on('data', function (data) {
    var str;
    str = data.toString();
    str = str.replace(/\r?\n|\r/g, "");
    document.getElementById('perm').value = (str);
    return console.log("Default Permission for all new players: " + str);
  });
}

function ONLINEMODE() {
  const process = require('child_process');
  var child = process.spawn(sudo, [bds_config, get_config, xb]);
  child.stdout.on('data', function (data) {
    var str;
    str = data.toString();
    str = str.replace(/\r?\n|\r/g, "");
    document.getElementById('xbox').value = (str);
    return console.log("Xbox Account: " + str);
  });
}

function PORTSERVER() {
  const process = require('child_process');
  var child = process.spawn(sudo, [bds_config, get_config, po]);
  child.stdout.on('data', function (data) {
    var str;
    str = data.toString();
    str = str.replace(/\r?\n|\r/g, "");
    document.getElementById('port4').value = (str);
    return console.log("Server Port V4: " + str);
  });
}

function PORTSERVER6() {
  const process = require('child_process');
  var child = process.spawn(sudo, [bds_config, get_config, po6]);
  child.stdout.on('data', function (data) {
    var str;
    str = data.toString();
    str = str.replace(/\r?\n|\r/g, "");
    document.getElementById('port6').value = (str);
    return console.log("Server port V6: " + str);
  });
}
// set Configs
function SET() {
    const process = require('child_process');
    var textarea = document.getElementById('output');
    var play = pl + mais + document.getElementById('player').value;
    var perm = pe + mais + document.getElementById("perm").value;
    var xbox = xb + mais + document.getElementById("xbox").value;

    var por4 = po + mais + document.getElementById("port4").value;
    var por6 = po6 + mais + document.getElementById("port6").value;
    
    // var whitelist = document.getElementById("whitelist").value;

    var child = process.spawn(sudo, [bds_config, set_config, play, perm, xbox, por4, por6]);
    // Mais Inportante
    setInterval(function(){
      textarea.scrollTop = textarea.scrollHeight;
    }, 0);
    child.on('error', function(err) {
      appendOutput('Tivemos Um Erro :> <'+err+'>' );
    });
    child.stdout.on('data', function (data) {
      appendOutput(data);
    });
    child.stderr.on('data', function (data) {
      appendOutput('stderr: <'+data+'>' );
    });
};