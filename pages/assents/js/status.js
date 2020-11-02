var is = require("electron-is");
var pass = localStorage.getItem('password');
status();
setInterval(() => {
  status();  
}, 900);
function status() {
  var spawn = require('child_process').spawn;
  var child = spawn('echo ' + pass + ' |sudo -S ' + 'screen -list|grep -q "bedrock"', {
    shell: true
  });
  child.on('exit', function (code) {
    if (code == 0) {
      document.getElementById('statsID').style.fill = 'green';
      document.getElementById('statsIDout').innerHTML = 'You Serve is executing';
    } else {
      document.getElementById('statsID').style.fill = 'red';
      document.getElementById('statsIDout').innerHTML = 'You Serve is stoped';
    }
  });
};



// fill="green" 