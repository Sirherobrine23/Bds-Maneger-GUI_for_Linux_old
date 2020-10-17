var is = require("electron-is");

function appendOutputStatus(msg) { 
  getCommandOutputStatus().value = (msg); 
  getCommandOutputStatusA().innerHTML = ('', msg + '%'); 
};

function MEMOUtPUT(msg) {
  MEMOUtPUTa().value = (msg);
  MEMOUtPUTb().innerHTML = (msg + 'MB'); 
};

function MEMt(msg) {
  MemoriaTotal().max = (msg); 
}

function refreshjs() {
  setInterval(function(){
    statusCPU();
    statusMEM();
    statusMEM2();
  }, document.getElementById("refresh").value ); 
};
function statusCPU() {
    const process = require('child_process'); 
    var sudo = 'sudo';
    var CPU = 'CPU=true';
    var CPU2 = '--preserve-env=CPU';
    var status = 'bds-status';
        
    var child = process.spawn('sudo', [CPU, sudo, CPU2, status]); 

    child.on('error', function(err) {
      appendOutputStatus('Tivemos Um Erro <'+err+'>' );
    });

    child.stdout.on('data', function (data) {
      appendOutputStatus(data);
    });
};

function statusMEM() {
  const process = require('child_process'); 
  var sudo2 = 'sudo';
  var CPU2 = 'MEM=true';
  var CPU22 = '--preserve-env=MEM';
  var status2 = 'bds-status';
      
  var child = process.spawn('sudo', [CPU2, sudo2, CPU22, status2]); 

  child.stdout.on('data', function (data) {
    MEMOUtPUT(data);
  });
};

function statusMEM2() {
  // cat /proc/meminfo |grep MemTotal|sed 's|MemTotal:||g'|sed 's|kB||g'|sed 's| ||g'|while read KB dummy;do echo $((KB/1024));done
  var cat = 'bash';
  var file = 'assents/nen.sh';
  // ---------------------------------------
  const process = require('child_process'); 
  var child = process.spawn(cat ,[file]); 

  child.stdout.on('data', function (data) {
    var str;
    str = data.toString();
    str = str.replace(/\r?\n|\r/g, "");
    return document.getElementById('MEMu').max = (str);
  });
};



// function statusMEMV() {
//   const process = require('child_process'); 
//   var sudo = 'sudo';
//   var CPU = 'CPU=true';
//   var CPU2 = '--preserve-env=CPU';
//   var status = 'bds-status';
      
//   var child = process.spawn('sudo', [CPU, sudo, CPU2, status]); 

//   child.on('error', function(err) {
//     appendOutputStatus('Tivemos Um Erro <'+err+'>' );
//   });

//   child.stdout.on('data', function (data) {
//     appendOutputStatus(data);
//   });
// };
