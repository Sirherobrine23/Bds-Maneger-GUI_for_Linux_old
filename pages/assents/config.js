
var is = require("electron-is");
var pass = localStorage.getItem('password');
function MAXPLAYER() {
  var spawn = require('child_process').spawn;
  var child = spawn('echo' + ' ' + pass + ' |sudo -S ' + 'bds-config get player', {
    shell: true
  });
  child.stdout.on('data', function (data) {
    var str;
    str = data.toString();
    str = str.replace(/\r?\n|\r/g, "");
    document.getElementById('player').value = (str);
    return console.log("Total for players connect in world: "  + str);
  });
}

function GETPERMISSION() {
  var spawn = require('child_process').spawn;
  var child = spawn('echo' + ' ' + pass + ' |sudo -S ' + 'bds-config get permission', {
    shell: true
  });
  child.stdout.on('data', function (data) {
    var str;
    str = data.toString();
    str = str.replace(/\r?\n|\r/g, "");
    document.getElementById('perm').value = (str);
    return console.log("Default Permission for all new players: " + str);
  });
}

function ONLINEMODE() {
  var spawn = require('child_process').spawn;
  var child = spawn('echo' + ' ' + pass + ' |sudo -S ' + 'bds-config get xbox', {
    shell: true
  });
  child.stdout.on('data', function (data) {
    var str;
    str = data.toString();
    str = str.replace(/\r?\n|\r/g, "");
    document.getElementById('xbox').value = (str);
    return console.log("Xbox Account: " + str);
  });
}

function PORTSERVER() {
  var spawn = require('child_process').spawn;
  var child = spawn('echo' + ' ' + pass + ' |sudo -S ' + 'bds-config get port', {
    shell: true
  });
  child.stdout.on('data', function (data) {
    var str;
    str = data.toString();
    str = str.replace(/\r?\n|\r/g, "");
    document.getElementById('port4').value = (str);
    return console.log("Server Port V4: " + str);
  });
}

function PORTSERVER6() {
  var spawn = require('child_process').spawn;
  var child = spawn('echo' + ' ' + pass + ' |sudo -S ' + 'bds-config get portv6', {
    shell: true
  });
    child.stdout.on('data', function (data) {
    var str;
    str = data.toString();
    str = str.replace(/\r?\n|\r/g, "");
    document.getElementById('port6').value = (str);
    return console.log("Server port V6: " + str);
  });
}

function whitelistConfig() {
  var spawn = require('child_process').spawn;
  var child = spawn('echo' + ' ' + pass + ' |sudo -S ' + 'bds-config get whitelist', {
    shell: true
  });
  child.stdout.on('data', function (data) {
    var str;
    str = data.toString();
    str = str.replace(/\r?\n|\r/g, "");    
    document.getElementById('whitelist').value = (str);
    return console.log("Whitelist: " + str);
  });
}
GETPERMISSION();ONLINEMODE();PORTSERVER();PORTSERVER6();MAXPLAYER();whitelistConfig();
// set Configs
function SET() {
  var play = 'player=' + document.getElementById('player').value;
  var perm = 'permission=' + document.getElementById("perm").value;
  var xbox = 'xbox=' + document.getElementById("xbox").value;
  var whitelist = 'whitelist=' + document.getElementById("whitelist").value;
  var por4 = 'port=' + document.getElementById("port4").value;
  var por6 = 'portv6=' + document.getElementById("port6").value;
  
  var command_set = 'bds-config' + ' ' + 'set' + ' ' + play + ' ' + perm + ' ' + xbox + ' ' + por4 + ' ' + por6 + ' ' + whitelist

  var exec = require('child_process').exec;
  var child = exec('echo ' + pass + ' |sudo -S ' + command_set, {
      shell: true
  });
  child.stdout.on('data', function (data) {
    document.getElementById('LOG').value += (data)
  });
};