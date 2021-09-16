/* 1..string type variable */
var typeString = 'Saheb';
let myCuntry = 'INDIA';

/* ..Number type variable */
var myBirthDayOf = 12;
let myBirtMonthOf = 06;
const myBirtYearOf = 1900;

/* ..booleean type variable */
var myNameSaheb = true;
let myBirtYearOf1900 = true;

/* 2.. let & const variable kokhon likte hoy & jar man chang kora jay setar man chang kore felo */

let ageRate = 300;
ageRate += 100 + 100;
// console.log(ageRate);

const cowRate = 5000;
let increse = cowRate - 1000;
// console.log(increse);
/* ekhane const er man ekbar set korechi ty r onno kothaw const er man set korte parbo na. ty vartiable chang kore let liklam */

/* 3.. +, - , gun,  /vagfol ,%vagses a gulo korte paro parle number type er variable likhe sob gulo ekta ekta kore kore felo? */

var laptopPrice = 40000; /* ++++ */
var mobilePrice = 9000;
var count = laptopPrice + mobilePrice;
// console.log(count);

let flatPrice = 290000; /* -les..biyg */
let homePrice = 180000;
const totalLess = flatPrice - homePrice;
// console.log(totalLess);

let salary = 5001; /* multiply */
let yearOfmonth = 12
let oneYearSalary = salary * yearOfmonth;
// console.log(oneYearSalary);

var frinds = 9; /* vag fol %*/
var apple = 8;
var appleDivaided = frinds / apple;
// console.log(appleDivaided);

let students = 1000 /*vag ses   */
var rost = 200;
var rostdivaided = students % rost;
// console.log(rostdivaided);

// compare    1..< lesden  choto,
//            2.. > geterden boro ,
//            3.. <=  bam pase jeta ache seta dan paser            theke choto ba soman kina
//            4.. == bam paser & dan paser dutoi soman kina 
//            5.. != bam & dan dutoi osoman kina\
//            6..>= bam pase jeta ache seta dan paser            theke boro  ba soman kina 

var mobilePrice = 35000;
var myBudget = 10000;
if (mobilePrice > myBudget) {
    console.log('phone kinbo');
}
else {
    console.log('phone kinbo na');
}