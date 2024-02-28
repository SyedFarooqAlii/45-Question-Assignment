var guest_list = [" Izhan", " Fawwad", " Farooq", " Ebad"];
/*for(let i=0; i<guest_list.length; i++){
    console.log(`Dear Sir/Madam   ` +guest_list[i] +`,\n we  invited you on dinner tomorrow.\nThank You!\
    n`);
};*/
var not_present = "Izhan";
var new_guest = " Kohli";
guest_list[0] = new_guest;
/*for(let i=0; i<guest_list.length; i++){
console.log(`Dear Sir/Madam`+ guest_list[i] +`\nwe invited you on dinner tomorrow.\nThank You\n`);
};
console.log(`Mr.${not_present} will not comming on tomorrow dinner.`)*/
guest_list.unshift("rohit", "siraj", "gill");
/*{
   for (let i=0; i<guest_list.length; i++)
console.log(`Dear Sir/Madam  ` + guest_list [i] + `\nwe invited you on dinner tomorrow.Bcz we found a bigger dinner table,so we dicided to invite three more guest.\nThank You\n`)
}*/
console.log("\nunfortunatly we can't arrange big table,so we invite just two more people.");
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    console.log("Sorry Sir/Madam.  ".concat(remove_guest, " you are not invited for dinner."));
}
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear Sir/Madam  " + guest_list[i] + ",\nYea you are still invited on tomorrow dinner.\nThank You\n");
}
guest_list.splice(0, 2);
console.log(guest_list);
