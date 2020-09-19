var date = new Date();
var cdat = document.getElementById("cright");
cdat.classList.add("footer-copyright");
cdat.classList.add("text-center");
cdat.style.color = "#efef3f";
cdat.innerHTML = `&copy; ${date.getFullYear()}`;

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
