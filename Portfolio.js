const N = document.getElementById("name");
const e = document.getElementById("email");
const phone = document.getElementById("Phone");
const msg = document.getElementById("message");

function sendemail(){
    Email.send({


        SecureToken : "5d9dca9c-d331-4819-a3ec-4f37ca86eff1",
        To : 'sanaullah.iftikhar007@gmail.com',
        From : 'sanaullah.iftikhar007@gmail.com',
        Subject : "Portfolio",
        Body : "Message :"+ msg.value
    }).then(
      message => alert("Message Send Successfully")
    );
}