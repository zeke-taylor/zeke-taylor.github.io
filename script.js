var date = new Date();
var cdat = document.createElement("p");
cdat.innerHTML = "<p class=\"footer-copyright text-center\" style=\"color:#efef3f;\">&copy; " + date.getFullYear() + "</p>"
document.body.appendChild(cdat);

/*
function getAge(DOB) {
    var today = new Date();
    var birthDate = new Date(DOB);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age = age - 1;
    }

    document.getElementById("age").innerHTML = ""+age+"";
}
*/
