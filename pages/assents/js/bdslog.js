// BDSlog
var is = require("electron-is");

// var sudo = 'sudo';
var sudo = 'echo';
var service = '/etc/init.d/bds';
var start = 'start';
var stop = 'stop';
var restart = 'restart';
getlog();
setInterval(function(){
    getlog();
}, 99000);


function getlog() {
    document.getElementById('BDSlog').value = '';
    var spawn = require('child_process').spawn;
    var child = spawn('cat /tmp/mcpe.txt', {
      shell: true
    });
    child.stdout.on('data', function (data) {
        document.getElementById('BDSlog').value += (data);
    });
};
