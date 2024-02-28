

// lower case
let personName :string ="Farooq"
console.log("lowercase:", personName.toLowerCase());



// Upper Case
console.log("uppercase:",personName.toLocaleUpperCase());


// title case
console.log("titlecase:",personName.replace(/\bw/g,c => c.toUpperCase()));