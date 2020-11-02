var is = require("electron-is");
var pass = localStorage.getItem('password');
function GETLISTWORLD() {
    console.log('world get list inicialized')
    var exec = require('child_process').exec;
    var command1 = 'echo ' + pass + '|sudo -S ' + 'bds-switch get gui'
    var child = exec( command1, {
        shell: true
    });
    child.stdout.on('data', function (data) {
        var str;
        str = data.toString();
        str = str.replace(/\r?\n|\r/g, "");    
        var e = document.getElementById("worldselect");
        e.innerHTML += data;
        console.log(data)
    });
    console.log('world get list complete')
}
GETLISTWORLD();
function latestworld() {
    var exec = require('child_process').exec;
    var child = exec('cat /etc/BDS-Common/server.properties|grep "level-name="|sed "s|level-name=||g"', {
        shell: true
    });
    child.stdout.on('data', function (data) {
        document.getElementById("worldselect").value= (data);
        console.log(data)
    });
}
latestworld();
function teste() {
    var selectMPA = document.getElementById('selectMPA').value
    var exec = require('child_process').exec;
    var child = exec('echo ' + pass + ' |sudo -S ' + 'bds-switch set man' + ' ' + selectMPA , {
        shell: true
    });
    child.stdout.on('data', function (data) {
        document.getElementById('LOG').value += (data)
    });
}