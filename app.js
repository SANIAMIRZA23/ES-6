// ____________ var,let ,const variables
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

// ____________ Template literals:
var egLitrl = `Hey , ${fName} ; its an example of a literal template, 
 text with bectics !!!`
console.log(egLitrl);

// ____________ Spread Operators makes shallow(reference) copies

var arr1 = ["a", "b"]
let cloneArr = [...arr1]
console.log(cloneArr);  // ['a', 'b']

//2- can also do merging
var obj1 = {
    myName: "Sania",
    institute: "SMIT"
}
let obj2 = {
    timing: "4-6",
    rollNo: "0000"
}
let mergedObj = { ...obj1, ...obj2 }
console.log(mergedObj);

//3- in strings
let str = "sania"
let cloneStr = [...str]  // ['s', 'a', 'n', 'i', 'a']
console.log(cloneStr);

//4- in functions
let numbers = [1, 2, 3, 4, 5];
function sum(a, b, c, d, e) {
    return a + b + c + d + e
}
console.log(sum(...numbers)) // 15


// ____________ Rest Operators (Packed items):

// 1- In Arrays:
let arr = ["apple", "mango", "banana", "cherry", "orange", "melon"];
console.log(arr[3]); //cherry (In this method, We have to give reference so many times:bad practise )

// That`s why we use "destructuring & rest operators":
let arr0 = ["apple", "mango", "banana", "cherry", "orange", "melon"];
var [a, b, c, d, e, f] = arr1;   // destructuring
console.log(b); //mango

var [a, b, ...rest] = arr1; // ("...rest" ek new array mai packed krdega ,like this: ['banana', 'cherry', 'orange', 'melon'])
console.log(a, b, rest);  //apple mango, (4) ['banana', 'cherry', 'orange', 'melon']

var [a, b, , ,] = arr1;   // (space reserved krwane ke lye ,,, lgega wrna indexwise target hoga)
console.log(a, b, f); //apple mango melon

// 2- In Objects:
let obj = {
    fName: "sania",
    course: "WMA",
    timings: 2 - 4
}
console.log(obj.course); //WMA (In this method, We have to give reference so many times:bad practise )

//"destructuring & rest operators" also used in objects like this:

let obj0 = {
    fName: "sania",
    course: "WMA",
    timings: 2 - 4
}
let { course, timings } = obj1  // destructuring (keys name likhenge apni mrzi se name nh denge arrays ki trhn)
console.log(obj0.fName); //sania (appears like variables)

// ____________ Enhanced Object literals

let keyName = "Fname";
let accessToken = "sjadb784r3nr2387"
let data = {
    [keyName]: "Sania",
    fullName() {
        console.log("Sania");
    },
    accessToken
}
console.log(data);


// ____________ Default parameter
function product(a = 0, b = 0) {
    console.log(a * b);

}
product(3, 3) //9
product() //15

// ____________ Arrow Functions
let greet = user => "Welcome" + " " + user
let greet1 = () => "Welcome" + " " + "Hard coded name"

console.log(greet("Sania"));
console.log(greet1());

let square = num => num * num
console.log(square(45));


let subtract = (num1, num2) => {
    let result = num1 - num2
    return result
}
console.log(subtract(7, 4));

// ___________ Classes
class AddmissionForm {
    constructor(name, grade) {
        this.name = name
        this.grade = grade
    }
    cancel() {
        console.log(`This form was cancelled by ${this.name}`);
    }
    submit() {
        console.log(`This form was submitted by ${this.name}`);
    }
    // fill(name, grade) {
    //     this.name = name
    //     this.grade = grade
    // }
}
let sania = new AddmissionForm("Sania", 12)
let neha = new AddmissionForm("Neha", 8)
console.log(sania);
// sania.fill("Sania", 12)
sania.cancel()
// neha.fill("Neha", 8)
neha.submit()
