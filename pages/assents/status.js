var is = require("electron-is");
// memoriaramtotaldodispositivo();
function refreshjs() {
    statusCPU();
    statusMEM();
    MemoriaVirtual();};
function statusCPU() {
    var spawn = require('child_process').spawn;
    var child = spawn('sudo bds-status cpu', {
      shell: true
    });
    child.stdout.on('data', function (data) {
      var str;
      str = data.toString();
      
  
      document.getElementById("statusCPU").value = (str);  
    });
};

function statusMEM() {
  var spawn = require('child_process').spawn;
  var child = spawn('sudo bds-status mem', {
    shell: true
  });
  child.stdout.on('data', function (data) {
    var str;
    str = data.toString();
        

    document.getElementById("Memoriaramatual").value = (str);
  });
};

function MemoriaVirtual() {
  var spawn = require('child_process').spawn;
  var MEM = 'MEM';
  var child = spawn('sudo bds-status memv', {
    shell: true
  });
  child.stdout.on('data', function (data) {
    var str;
    str = data.toString();
        

    document.getElementById("MemoriaVirtual").value = (str);
  });
};

function memoriaramtotaldodispositivo() {
  var spawn = require('child_process').spawn;
  var child = spawn('cat /proc/meminfo |grep MemTotal|sed "s|MemTotal:||g"|sed "s|kB||g"|sed "s| ||g"|while read KB dummy;do echo $((KB/1024));done', {
    shell: true
  });
  child.stdout.on('data', function (data) {
    var str;
    str = data.toString();
    
    document.getElementById('MemoriaVirtual').max = (str);
    return document.getElementById('Memoriaramatual').max = (str);
  });
  // cat /proc/meminfo |grep MemTotal|sed 's|MemTotal:||g'|sed 's|kB||g'|sed 's| ||g'|while read KB dummy;do echo $((KB/1024));done  
};
