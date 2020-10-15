var is = require("electron-is");
function appendOutputStatus(msg) { getCommandOutputStatus().innerHTML = (msg); };
setInterval(function(){
  statusCPU();
}, 900);
function statusCPU() {
    const process = require('child_process'); 
    var COMMAND = 'sudo';
    var COMMAND2 = 'bds-status';
        
    var child = process.spawn(COMMAND, [COMMAND2]); 

    child.on('error', function(err) {
      appendOutputStatus('Tivemos Um Erro <'+err+'>' );
    });

    child.stdout.on('data', function (data) {
      appendOutputStatus(data);
    });
};