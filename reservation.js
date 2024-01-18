
function printError(){
    let fname = document.getElementById("name").value;
    let phone = parseInt(document.getElementById("phone").value);
    let people = document.getElementById("people").value;
    let time = document.getElementById("time").value;
    let date = document.getElementById("date").value;
    if(fname == ""){
        // document.getElementById("error").innerHTML = "Please enter the first name"
        alert("Please enter the first name")
    }
    else if(isNaN(phone) || phone <0){
        // document.getElementById("error").innerHTML = "Phone number is invalid"
        alert("Phone number is invalid")
    }
    else if(isNaN(people) || people <1){
        // document.getElementById("error").innerHTML = "Please select the number of people"
        alert("Please enter the number of people")
    }
    else if(date == ""){
        // document.getElementById("error").innerHTML = "Please select the date"
        alert("Please select the date")
    }
    else if(time == ""){
        // document.getElementById("error").innerHTML = "Please select the time"
        alert("Please select the time slot")
    }
    
    else {
        // document.getElementById("error").innerHTML = "";
        // document.getElementById("reservation").style.fontSize = "40px";
         alert("Thank you for the reservation!") ? "" : location.reload();
    }
}