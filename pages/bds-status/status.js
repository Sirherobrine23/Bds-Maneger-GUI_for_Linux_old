var is = require("electron-is");

// Mac and Linux have Bash shell scripts (so the following would work)
//        var child = process.spawn('child', ['-l']);
//        var child = process.spawn('./test.sh');       
// Win10 with WSL (Windows Subsystem for Linux)  https://docs.microsoft.com/en-us/windows/wsl/install-win10
//   
// Win10 with Git-Bash (windows Subsystem for Linux) https://git-scm.com/   https://git-for-windows.github.io/
//

function appendOutput(msg) { getCommandOutput().value += (msg); };
function setStatus(msg)    { getStatus().innerHTML = msg; };

function showOS() {
    if (is.linux())
      appendOutput("")
}

var textarea = document.getElementById('output');
setInterval(function(){
    textarea.scrollTop = textarea.scrollHeight;
}, 0);

var textarea = document.getElementById('output');
setInterval(function(){
  textarea.value = '';
}, 10000);


function backgroundProcess() {
    const process = require('child_process');   // The power of Node.JS

    showOS();
    var COMMAND = 'sudo';
    var COMMAND2 = 'bds-status';
        
    var child = process.spawn(COMMAND, [COMMAND2]); 

    child.on('error', function(err) {
      appendOutput('Tivemos Um Erro :> <'+err+'>' );
    });

    child.stdout.on('data', function (data) {
      appendOutput(data);
    });

    child.stderr.on('data', function (data) {
      appendOutput('stderr: <'+data+'>' );
    });

    child.on('close', function (code) {
        if (code == 0)
          setStatus('');
 
        getCommandOutput().style.background = "DarkGray";
    });
};
