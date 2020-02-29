var date = new Date();
document.write("<center><p class=\"lead\" style=\"color:#3f3f3f;\">&copy; " + date.getFullYear() + "</p></center>");

function getAge(DOB) {
    var today = new Date();
    var birthDate = new Date(DOB);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age = age - 1;
    }

    document.getElementById("age").innerHTML = "<span>"+age+"</span>";
}
