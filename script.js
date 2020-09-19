var date = new Date();
var cdat = document.createElement("p");
var tn = document.createTextNode("&copy; ");
cdat.appendChild(tn);
cdat.style.color = "#efef3f";
cdat.classList.add("footer-copyright");
cdat.classList.add("text-center");
cdat.innerHTML = "&copy; " + date.getFullYear();
document.getElementsByTagName("footer").appendChild(cdat);

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
