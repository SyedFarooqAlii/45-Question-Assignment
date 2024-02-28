// lower case
var personName = "Farooq";
console.log("lowercase:", personName.toLowerCase());
// Upper Case
console.log("uppercase:", personName.toLocaleUpperCase());
// title case
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
