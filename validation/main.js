var name1 = document.getElementById('name');
var email1 = document.getElementById('email');
var msg = document.getElementById('message');
var send = document.getElementById('sendBtn');
var result;

send.addEventListener('click', validation);
name1.addEventListener('focus', clear);
email1.addEventListener('focus', clear)
msg.addEventListener('focus', clear)

function validation () {
    result = 1;

    // name
    if (name1.value == "") {
        name1.value = "This field must be filled.";
        name1.style.color = 'red';
        result = 0;
    }

     // email
     if (email1.value.indexOf('gmail') == -1) {
        email1.value = 'Email must be GMAIL';
        result = 0;
    };
     if (email1.value == "") {
        email1.value = "This field must be filled.";
        email1.style.color = 'red';
        result = 0;
    }

     // message
    
     if (msg.value == "") {
        msg.value = "This field must be filled.";
        msg.style.color = 'red';
        result = 0;
    }

    if(result == 1) {
        window.location.assign('answer.html');
    }
}

function clear () {
    this.value = "";
    this.style.color = 'black';
}
