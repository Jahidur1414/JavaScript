console.log('Okkkk !');
/*
//ES5
var name1 = 'Fahim';
var age1 = 23;
name1 = 'J.R.Fahim';
console.log(name1);

//ES6
const name2 = 'Fahim';
let age2 = 23;
name2 = 'Rifat';
console.log(name2);
*/
/*
let firstName = 'Jahidur';
let lastName = 'Rahman';
const yearOfBirth = 1997;

function calcAge(year){
    return 2020-year;
}

console.log('This is ' + firstName + ' ' + lastName + ' His age is ' + calcAge(yearOfBirth));
console.log(`This is ${firstName} ${lastName} . He is ${calcAge(yearOfBirth)} year old`);

const n =`${firstName} ${lastName}`;
// Some trick to compare or match in string
console.log(n.startsWith('J'));
console.log(n.endsWith('man'));
console.log(n.includes('Rah'));

console.log(`${firstName}`.repeat(3));
*/
// Arrow Function
/*
const years = [1990, 1976, 1995, 1967];

//ES5
var ages5 = years.map(function(el){
    return 2020-el;
});
console.log(ages5);

//ES6
let ages6 = years.map(el => 2020 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2020-el}.`);
console.log(ages6);

ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;

    return `Age element ${index + 1}: ${2020-el}.`
});

console.log(ages6);
*/
/*
// Arrow Function 2
//ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function(){
        var self = this;

        document.querySelector('.green').addEventListener('click', function(){
            var str = 'This is box number ' + self.position + ' and it color ' + self.color;
            alert(str);
        });
        
    }
}
//box5.clickMe();

//ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function(){

        document.querySelector('.green').addEventListener('click', () =>{
            var str = 'This is box number ' + this.position + ' and it color ' + this.color;
            alert(str);
        });
        
    }
}
box6.clickMe();
/*
const box66 = {
    color: 'green',
    position: 1,
    clickMe: () => {

        document.querySelector('.green').addEventListener('click', () =>{
            var str = 'This is box number ' + this.position + ' and it color ' + this.color;
            alert(str);
        });
        
    }
}
box66.clickMe();
*/
/*
function Person(name){
    this.name = name;
}

//ES5
Person.prototype.myFriends5 = function(friends){

    var arr = friends.map(function(el){
        return this.name + ' is friend with ' + el;
    }.bind(this));

    console.log(arr);
}

var friends = ['Fahim', 'Rifat', 'Sabit'];
new Person('John').myFriends5(friends);

//ES6
Person.prototype.myFriends6 = function(friends){

    var arr = friends.map(el => `${this.name}  is friend with  ${el}`);

    console.log(arr);
}
var friends = ['Fahim', 'Rifat', 'Sabit'];
new Person('jony').myFriends6(friends);
*/
// Destructuring
//ES5
//var john = ['John', 26];
//var name = john[0];
//var age = john[1];

//ES6
/*
const [name, age] = ['John', 26];
console.log(name);
console.log(age);

const obj = {
    firstName: 'John',
    lastname: 'Smith'
};

const {firstName, lastname} = obj;
console.log(firstName);
console.log(lastname);

const {firstName: a, lastname: b} = obj;
console.log(a);
console.log(b);


function calcAgeRetirement(year){
    const age = new Date().getFullYear() - year;
    return [age, 65-age];
}

const [age2, retirement] = calcAgeRetirement(2020);
console.log(age2);
console.log(retirement);
*/
/*
// Array in ES6
const boxes = document.querySelectorAll('.box');

//ES5

var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur){
    cur.style.backgroundColor = 'dodgerblue';
})


//ES6
const boxesArr6 = Array.from(boxes);
Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');
*/
//ES5
/*
for(var i=0; i<boxesArr5; i++)
{
    if(boxes[i].className === 'box blue'){
        continue;
    }

    boxesArr5[i].textContent = 'I changed to blue!';
}
*/

//ES6
/*
for(const cur of boxesArr6){
    if(cur.className.includes('blue')){
        continue;
    }
    cur.textContent = 'I changed to blue';
}

//ES5
var ages = [12, 23, 34, 56, 23];

var full = ages.map(function(cur){
    return cur>= 18;
})
console.log(full);
console.log(ages[full.indexOf(true)]);

//ES6
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));
*/

// Spread operator
/*
function addFourAges(a, b, c, d){
    return a+b+c+d;
}

var ages = [20, 23, 24, 25, 26];

//ES5
var sum1 = addFourAges.apply(null, ages);
console.log(sum1);

//ES6
var sum2 = addFourAges(...ages);
console.log(sum2);

const familySmith = ['John', 'jane', 'Mark'];
const familyMillerr = ['Marry', 'Bob', 'Ann'];

const bigfamily = [...familySmith, 'Lily', ...familyMillerr];
console.log(bigfamily);
*/

// Maps in JavaScripts 
/*
const question = new Map();

question.set('question', 'What is your name ?');
question.set(1, 'Fahim');
question.set(2, 'Rifat');
question.set(3, 'Sabit');
question.set(4, 'Sakil');

question.set('correct', 1);

question.set(true, 'Correct Answer');
question.set(false, 'Sorry !');

console.log(question.get('question'));
console.log(question.size);

//question.delete(4);

if(question.has(4)){
    console.log('Answer 4 is here');
}

question.forEach((value, key) =>
console.log(`This is ${key}, and it set to ${value}`
));
for (let [key, valuee] of question.entries()){
    if(typeof(key) === 'number'){
        console.log(`Answer ${key}: ${value}`);
    }
}

const ans = parseInt(prompt('Wrrite the answer'));
*/
/*
// Classes
//ES5
var Person5 = function(name, yearofBirth, job){
    this.name = name;
    this.yearofBirth = yearofBirth;
    this.job = job;
}

Person5.prototype.claculateAge = function(){
    var age = new Date().getFullYear - this.yearofBirth;
    console.log(age);
}

var john5 = new Person5('John', 1997, 'Student');

//ES6
class Person6{
    constractor (name, yearOfBirth, job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    claculateAge(){
        var age = new Date().getFullYear - this.yearofBirth;
        console.log(age);
    }
    static greeting(){
        console.log('Hey there !');
    }
}

const john6 = new Person5('John', 1997, 'Student');

Person6.greeting();
*/
// Sub Classes
var Person5 = function(name, yearofBirth, job){
    this.name = name;
    this.yearofBirth = yearofBirth;
    this.job = job;
}

Person5.prototype.claculateAge = function(){
    var age = new Date().getFullYear() - this.yearofBirth;
    console.log(age);
}

var Athletes5 = function(name, yearofBirth, job, olympicGame, medals){
    Person5.call(this, name, yearofBirth, job);
    this.olympicGame = olympicGame;
    this.medals = medals; 
}

Athletes5.prototype = Object.create(Person5.prototype);


Athletes5.prototype.wonMedal = function(){
    this.medals++;
    console.log(this.medals);
}


var johnAthletes5 = new Athletes5('John', 1990, 'runner', 3, 10);

johnAthletes5.claculateAge();
johnAthletes5.wonMedal();













