GETLISTWORLD();
function GETLISTWORLD() { 
    var exec = require('child_process').exec;
    var child = exec('sudo bds-switch get gui', {
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
    var child = exec('cat /etc/BDS-Common/server.properties|grep "level-name="|sed "s|level-name=||g"sudo bds-switch get gui', {
        shell: true
    });
    child.stdout.on('data', function (data) {
        e.value= (data);
    });
}

function teste() {
    var selectMPA = document.getElementById('selectMPA').value
    document.getElementById('OUTPUTMAPS').value = ''
    var LES = selectMPA
    var exec = require('child_process').exec;
    var child = exec('sudo bds-switch set man' + ' ' + LES , {
        shell: true
    });
    child.stdout.on('data', function (data) {
        return document.getElementById('OUTPUTMAPS').value += (data)
    });
}