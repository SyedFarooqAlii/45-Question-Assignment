let guest_list : string[]=[` Izhan`,` Fawwad`,` Farooq`,` Ebad`];
for(let i=0; i<guest_list.length; i++){
    console.log(`Dear Sir/Madam   ` +guest_list[i] +`,\n we are invited you on dinner tomorrow.\nThank You!\
    n`);
}
let not_present: string=`Izhan`;
let new_guest: string =` Kohli`;
guest_list[0]=new_guest;
for(let i=0; i<guest_list.length; i++){ 
console.log(`Dear Sir/Madam`+ guest_list[i] +`\nwe are invited you on dinner tomorrow.\nThank You\n`);
};
console.log(`Mr.${not_present} will not comming on tomorrow dinner.`)
