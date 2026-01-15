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


// ___________ Iteration Functions:

function iteratorfunc(val) {
  let nextIndex = 0;

  return {
    next() {
      if (nextIndex < val.length) {
        return {
          value: val[nextIndex++],
          done: false,
        };
      } else {
        return {
          value: undefined,
          done: true,
        };
      }
    },
  };
}

let arr = [1, 2, 3, 4, 5];
let str = "Sania";

let iterate = iteratorfunc(arr);
let iterate1 = iteratorfunc(str);

console.log(iterate.next().value); // 1
console.log(iterate.next()); // { value: 2, done: false }
iterate.next(); // skips 3

console.log(iterate1.next().value); // "S"

console.log(iterate.next()); // { value: 4, done: false }
console.log(iterate.next()); // { value: 5, done: false }
console.log(iterate.next()); // { value: undefined, done: true }


// ___________ Iteration Objects:
let iter = {
  Counter: 0,
  next() {
    return {
      value: this.Counter++,
      done: this.Counter >= 10,
    };
  },
};

let next = iter.next();
while (!next.done) {
  console.log(next.value);
  next = iter.next();
}

// ___________ Generated Iterator by ES-6:
let numbers = [100, 200, 300, 400, 500];
let itor = numbers[Symbol.iterator]();
console.log(itor.next());
itor.next();
itor.next();
itor.next();
console.log(itor.next());
console.log(itor.next());


// ___________ Generators(function`s control):
function *GeneratorFunc(){  //* → Generator function banata hai
    console.log(1);
    console.log(2);
    yield "yield 1"  //yield → execution ko pause karta hai aur value return karta hai
    console.log(3);
    yield "yield 2"
    console.log(4);
}
let g = GeneratorFunc()
console.log(g.next());  //next() → resume karta hai execution
console.log("Hello");  //We can randomly doing code inside functions
console.log(g.next());


// ___________ Filter Method:
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let filterArr = num.filter((num) => num > 4);
console.log(filterArr);

// __________ Reduce Method:
let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce((total, currentElement) => {
  return total + currentElement;
}, 0);


// total = 0 default value
// currentElement = 1 => total = 1

let userDetail = {
    name: "Sania",
    course: "WMA"
}
let userDetail2 = {
    name: "Sania Mirza",
    timings: "2-4"
}

function printDetails(city,country) {
    console.log(this.name,city,country);
}

printDetails.call(userDetail,"Karachi","Pakistan")
printDetails.call(userDetail2)

printDetails.apply(userDetail,["Karachi","Pakistan"]) // objName and Array maangta hai.
let bindFunc = printDetails.bind(userDetail,"Karachi","Pakistan")
bindFunc()
// total = 1
// currentElement = 2 => total = 3

// total = 3
// currentElement = 3 => total = 6

// total = 6
// currentElement = 4 => total = 10

// total = 10
// currentElement = 5 => total = 15

console.log(sum); // Output: 15
