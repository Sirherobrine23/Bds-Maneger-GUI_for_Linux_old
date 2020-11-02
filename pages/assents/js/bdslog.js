// BDSlog
var is = require("electron-is");

// var sudo = 'sudo';
var sudo = 'echo';
var service = '/etc/init.d/bds';
var start = 'start';
var stop = 'stop';
var restart = 'restart';
getlog();
setInterval(function(){
    getlog();
}, 9000);


function getlog() {
    // document.getElementById('BDSlog').value = '';
    var spawn = require('child_process').spawn;
    var child = spawn('cat /tmp/mcpe.txt', {
      shell: true
    });
    child.stdout.on('data', function (data) {
        document.getElementById('BDSlog').value = (data);
    });
};


// // Function to download data to a file
// function log_download(filename, type) {
//     var data = document.getElementById("LOG")
//     var file = new Blob([data], {type: type});
//     if (window.navigator.msSaveOrOpenBlob) // IE10+
//         window.navigator.msSaveOrOpenBlob(file, filename);
//     else { // Others
//         var a = document.createElement("a"),
//                 url = URL.createObjectURL(file);
//         a.href = url;
//         a.download = filename;
//         document.body.appendChild(a);
//         a.click();
//         setTimeout(function() {
//             document.body.removeChild(a);
//             window.URL.revokeObjectURL(url);  
//         }, 0); 
//     }
// }

// Function to download data to a file
function log_download(filename, type) {
    alert('not Working :(')
}