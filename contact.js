
function printEerror(){
    let fname = document.getElementById("fname").value;
    let phone = parseInt(document.getElementById("phone").value);
    let subject = document.getElementById("subject").value;
    let help = document.getElementById("help").value;

    if(fname == ""){
        // document.getElementById("print").innerHTML = "Please enter the name"
        alert("Please enter the name")
    }
    else if(isNaN(phone) || phone <0){
        // document.getElementById("print").innerHTML = "Phone number is invalid"
        alert("Phone number is invalid")
    }
    else if(subject == ""){
        // document.getElementById("print").innerHTML = "Please enter the subject"
        alert("Please enter the subject")
    }

    else if(help == ""){
        // document.getElementById("print").innerHTML = "Please write the message"
        alert("Please write the message")
    }
    else {
        // document.getElementById("print").innerHTML = "";
        // document.getElementById("contactus").style.fontSize = "40px";
         alert("Thank you for the message. We will get back to you as soon as possible") ? "" : location.reload();
    }
}