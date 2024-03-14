let personName:string=``;
personName=prompt(`What Is Your Name?`) || ``;
let lowercase:string=personName.toLowerCase();
let uppercase:string=personName.toUpperCase();
let titlecase:string=personName.split(``).map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(``);
if (personName!== null && personName!== ``){
    alert(`Hello ${personName}, here are your name in:
    LowerCase: ${lowercase}
    UpperCase: ${uppercase}
    Titlecase: ${titlecase}`
    )
}else{
    alert(`please fill your name !`)
};