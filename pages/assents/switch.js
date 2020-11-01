GETLISTWORLD();
function GETLISTWORLD() { 
    var exec = require('child_process').exec;
    var child = exec('bds-switch get gui', {
        shell: true
    });
    child.stdout.on('data', function (data) {
        var str;
        str = data.toString();
        str = str.replace(/\r?\n|\r/g, "");    
        var e = document.getElementById('selectMPA');
        e.innerHTML += (str);                
    });
}

function latestworld() {
    var exec = require('child_process').exec;
    var child = exec('cat /etc/BDS-Common/server.properties|grep "level-name="|sed "s|level-name=||g"', {
        shell: true
    });
    child.stdout.on('data', function (data) {
        e.value= (data);
    });
}

function teste() {
    var selectMPA = document.getElementById('selectMPA').value
    var exec = require('child_process').exec;
    var child = exec('echo' + ' ' + pass + ' |sudo -S ' + 'bds-switch set man' + ' ' + selectMPA , {
        shell: true
    });
    child.stdout.on('data', function (data) {
        return document.getElementById('LOG').innerHTML += (data)
    });
}