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


// teste

function backgroundProcess() {
    const process = require('child_process');   // The power of Node.JS

    showOS();
    var textarea = document.getElementById('output');
    setInterval(function(){
        textarea.scrollTop = textarea.scrollHeight;
    }, 0);

    // var textarea = document.getElementById('output');
    // setInterval(function(){
    //   textarea.value = '';
    // }, 9);

    // var COMMAND4 = 'item';
    // document.getElementById("item").value = COMMAND4;

    // Command output (base)
    var sudo = 'sudo';
    var GUI = 'GUI=true';
    var bds_command = 'bds-command';
    var give = 'give'

    // Nick

    var nick = document.getElementById("nick").value

    // Item
    var item = document.getElementById("item").value



    // quantidade de intens

    var tanto = document.getElementById("pack").value

    textarea.value = '';
        
    var child = process.spawn(sudo, [GUI, bds_command, give, nick, item, tanto]); 



    
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
