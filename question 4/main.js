var personName = "";
personName = prompt("What Is Your Name?") || "";
var lowercase = personName.toLowerCase();
var uppercase = personName.toUpperCase();
var titlecase = personName.split("").map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); }).join("");
if (personName !== null && personName !== "") {
    alert("Hello ".concat(personName, ", here are your name in:\n    LowerCase: ").concat(lowercase, "\n    UpperCase: ").concat(uppercase, "\n    Titlecase: ").concat(titlecase));
}
else {
    alert("please fill your name !");
}
;
