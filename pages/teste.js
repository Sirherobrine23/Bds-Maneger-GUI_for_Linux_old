var is = require("electron-is");

function appendOutput(msg) { getCommandOutput().value += (msg); };

// teste

// var sudo = 'sudo';
var sudo = 'echo';
var service = '/etc/init.d/bds';
var start = 'start';
var stop = 'stop';
var restart = 'restart';

// start server
function server_start() {
    const process = require('child_process');
    var textarea = document.getElementById('output');
    setInterval(function(){
        textarea.scrollTop = textarea.scrollHeight;
    }, 0);
   
    var child = process.spawn(sudo, [service, start]); 
    
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

// Stop Server
function server_stop() {
    const process = require('child_process');
    var textarea = document.getElementById('output');
    setInterval(function(){
        textarea.scrollTop = textarea.scrollHeight;
    }, 0);
    
    var child = process.spawn(sudo, [service, stop]); 
    
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

// Restart
function server_restart() {
    const process = require('child_process');
    var textarea = document.getElementById('output');
    setInterval(function(){
        textarea.scrollTop = textarea.scrollHeight;
    }, 0);

    var child = process.spawn(sudo, [service, restart]); 
    
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