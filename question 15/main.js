var guest_list = [" Izhan", " Fawwad", " Farooq", " Ebad"];
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear Sir/Madam   " + guest_list[i] + ",\n we are invited you on dinner tomorrow.\nThank You!    n");
}
var not_present = "Izhan";
var new_guest = " Kohli";
guest_list[0] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear Sir/Madam" + guest_list[i] + "\nwe are invited you on dinner tomorrow.\nThank You\n");
}
;
console.log("Mr.".concat(not_present, " will not comming on tomorrow dinner."));
