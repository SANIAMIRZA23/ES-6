var a = "sania";  // don`t give error on same name (a)
var a = "mirza";
console.log(a);  // mirza


// let fName = "sania";  Cannot redeclare block-scoped variable,
// let fName =  "mirza"  error , bcz already fName declared on line-6.

let fName = "sania";
let lName = "mirza";
console.log(fName, lName); //sania mirza


// const myName;  declarations must be initialized, 
const myName = "sania" 
// myName = "mirza" , can`t assign/reinitialized new value to constant value 
console.log(myName);

// Template literals:
var egLitrl = `Hey , ${fName} ; its an example of a literal template, 
 text with bectics !!!`
console.log(egLitrl);


