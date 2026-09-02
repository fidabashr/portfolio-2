function sendMail(){
    let parms={
        name :document.getElementById("name").value,
        email:document.getElementById("email").value,
        subject:document.getElementById("subject").value,
        message:document.getElementById("message").value
    };
    emailjs.send("service_d033zb2","template_cs63mze",parms).then(function(){
        alert("Email Sent!!");
})
.catch(function(){
    console.log(error)
    alert("error");
});
}