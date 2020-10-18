var is = require("electron-is");
memoriaramtotaldodispositivo();
function refreshjs() {
  setInterval(function(){
    statusCPU();
    statusMEM();
    MemoriaVirtual();
  }, document.getElementById("refresh").value ); 
};
function statusCPU() {
    var exec = require('child_process').exec;
    var child = exec('sudo bds-status cpu', {
      shell: true
    });
    child.stdout.on('data', function (data) {
      var str;
      str = data.toString();
      str = str.replace(/\r?\n|\r/g, "");
  
      document.getElementById("statusCPU").value = (str); 
      document.getElementById("statusCPUa").innerHTML = (str); 
    });
};

function statusMEM() {
  var exec = require('child_process').exec;
  var child = exec('sudo bds-status mem', {
    shell: true
  });
  child.stdout.on('data', function (data) {
    var str;
    str = data.toString();
    str = str.replace(/\r?\n|\r/g, "");    

    document.getElementById("Memoriaramatual").value = (str);
    return document.getElementById("Memoriaramatuala").innerHTML = (str + ' ' + 'MB'); ;
  });
};

function MemoriaVirtual() {
  var exec = require('child_process').exec;
  var MEM = 'MEM';
  var child = exec('sudo bds-status memv', {
    shell: true
  });
  child.stdout.on('data', function (data) {
    var str;
    str = data.toString();
    str = str.replace(/\r?\n|\r/g, "");    

    document.getElementById("MemoriaVirtual").value = (str);
    return document.getElementById("MemoriaVirtualAtag").innerHTML = (str + ' ' + 'MB'); ;
  });
};

function memoriaramtotaldodispositivo() {
  var exec = require('child_process').exec;
  var child = exec('cat /proc/meminfo |grep MemTotal|sed "s|MemTotal:||g"|sed "s|kB||g"|sed "s| ||g"|while read KB dummy;do echo $((KB/1024));done', {
    shell: true
  });
  child.stdout.on('data', function (data) {
    var str;
    str = data.toString();
    str = str.replace(/\r?\n|\r/g, "");
    document.getElementById('MemoriaVirtual').max = (str);
    return document.getElementById('Memoriaramatual').max = (str);
  });
  // cat /proc/meminfo |grep MemTotal|sed 's|MemTotal:||g'|sed 's|kB||g'|sed 's| ||g'|while read KB dummy;do echo $((KB/1024));done  
};
