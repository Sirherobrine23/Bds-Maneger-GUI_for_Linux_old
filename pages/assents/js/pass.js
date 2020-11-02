const prompt = require('native-prompt')

function passinit() {
    var pass = localStorage.getItem('password');
    if (pass == 'null') {
        (async () => {
            const pa = await prompt("Login", "Enter your password to execute commands.", { mask: true });
            if (pa) {
                localStorage.setItem('password', pa);
                console.log('You Passworld saved');
                alert('You Passworld saved')
            } else {
                alert('blank space our not infomed password')
            }})();
    } else {
        console.log('Passworlds geted')
    }    
}
passinit();
function chargepassword() {
    var newpass = document.getElementById("passwordID").value;
    var blank = '';
    if (newpass == blank) {
        alert("You not informed Password");
    } else {
        localStorage.setItem('password', newpass);
        alert('Password saved')
    };
}
// var pass = prompt("Please enter your password to use sudo", ""); 