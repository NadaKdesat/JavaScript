/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/

function tellFortune(numberOfChildren, partnerName, geographicLocation, jobTitle) {
  document.write('You will be a ' + jobTitle + ' in ' + geographicLocation + ' , and married to ' + partnerName + ' with ' + numberOfChildren + ' kids.' + '<br><br>');
}

tellFortune(3, 'Alice', 'Jordan', 'software engineer');

/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/

function calculateDogAge(age) {
  document.write('Your doggie is ' + age * 7 + ' years old in dog years!' + '<br><br>')
}

calculateDogAge(4);

/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/

function calculateSupply(age, amount) {
  if (age <= 100) {
    cups = (100 - age) * 365 * amount;
    document.write('You will need ' + cups + ' cups of tea to last you until the ripe old age of 100' + '<br><br>');
  }

}

calculateSupply(20, 1);


/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/

function greet(name) {
  return 'Hello ' + name;
}

document.write(greet('Nada') + '<br><br>');


/*
5
what is the error:
function double(cat) {
  return 2 * x;
}

function double(7) {
  return 2 * 7;
}

function double('7') {
  return 2 * 'x';
}
*/

// 1 X is not defined
// 2+3 The parameter must be variable



/*
6
fix these functions:
func double1(x {
  return 2 * x ;
}

functiondouble2 x)
return 2 * x;
}

function (x) double3 {
  return 2 * x;

*/

function double1(x) {
  return 2 * x;
}

function double2(x) {
  return 2 * x;
}

function double3(x) {
  return 2 * x;
}

/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/

function cube(num) {
  return num * num * num;
}
let num = 5;
document.write('The cube of ' + num + ' is: ' + cube(num) + '<br><br>');



/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/

function multiply(num1, num2) {
  return num1 * num2;
}
let num1 = 6;
let num2 = 7;
document.write('The multiply of ' + num1 + ' and ' + num2 + ' is: ' + multiply(num1, num2) + '<br><br>');


/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/

function canIGetADrivingLicense(age) {
  if (age >= 20)
    document.write('yes you can');
  else
    document.write('please come back after ' + (20 - age) + ' years to get one' + '<br><br>')
}

canIGetADrivingLicense(15);

/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/

function sameLength(string1, string2) {
  if (string1.length == string2.length) {
    return 'True';
  } else {
    return 'False';
  }
}

document.write(sameLength('Nada', 'Mona') + '<br><br>');


/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/

function largerNubmer(num1, num2) {
  if (num1 > num2)
    return 'The larger Nubmer is: ' + num1;
  else
    return 'The larger Nubmer is: ' + num2;
}

document.write(largerNubmer(20,31)+'<br><br>')

/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/

function smallerNubmer(num1,num2,num3){
  if (num1 > num2&& num1>num3){
    return 'The smaller Nubmer is: ' + num1;
  }else if((num2 > num1 && num2>num3)){
    return 'The smaller Nubmer is: ' + num2;
  }else if((num3 > num1 && num3>num2)){
    return 'The smaller Nubmer is: ' + num3;
  }
}
document.write(smallerNubmer(7,-9,14)+'<br><br>');


/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/

function shorterString(str1,str2,str3,str4,str5){
  let strings=[str1,str2,str3,str4,str5];
  let shorterStr=strings[0];
  for(let i=1;i<strings.length;i++){
    if(strings[i].length < shorterStr.length){
      shorterStr=strings[i];
    }
  }
  return 'The shorter string is: ' +shorterStr;
}
document.write(shorterString('Nada','Mariam','Ahmad','Mohammed','Nadien')+'<br><br>');

/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/

function longerString(str1,str2,str3,str4){
  let strings=[str1,str2,str3,str4];
  let longerStr=strings[0];
  for(let i=1;i<strings.length;i++){
    if(strings[i].length > longerStr.length){
      longerStr=strings[i];
    }
  }
  return 'The longer string is: ' + longerStr;
}

document.write(longerString('Nada','Mariam','Ahmad','Nadien')+'<br><br>');

/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/

function isEven(num){
  if(num%2==0){
    return 'True';
  }else{
    return 'False';
  }
}

let number=39;
document.write('Is the '+number+' even: '+isEven(number)+'<br><br>');

/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/

function isOdd(){
  if(num%2!=0){
    return 'True';
  }else{
    return 'False';
  }
}

document.write('Is the '+number+' even: '+isOdd(number)+'<br><br>');

/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/

function positive(num){
  if(num>=0){
    return num;
  }else{
    return Math.abs(num);
  }
}
let Num=-9;
document.write('the positive version of the '+Num+' is: '+ positive(Num)+'<br><br>');


/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/

function fullName(firstName,lastName){
  return firstName+' '+lastName;
}

document.write('The fullName is: '+fullName('Nada','Kdesat')+'<br><br>');

/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/

function average(num1,num2,num3,num4,num5){
  return (num1+num2+num3+num4+num5)/5;
}

document.write('The average of numbers is: '+average(80,75,90,94,84)+'<br><br>');

/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/

function randomNumber(){
  return Math.random();
}

document.write('The random number between 0-1 is: '+ randomNumber()+'<br><br>');

/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/

function randomBetweenNumbers(min,max){
  return Math.random() *(max-min)+min;
}

let min=40;
let max=60;
document.write('The random number between '+min+' and '+max+' is: '+randomBetweenNumbers(min,max)+'<br><br>')


/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/

function scoreInUniversty(grade){
  if(0<=grade&& grade<50){
    return 'F';
  }else if(grade<=69){
    return 'D';
  }else if(grade<=84){
    return 'C';
  }else if(grade<=94){
    return 'B';
  }else if(grade<=100){
    return 'A';
  }else{
    return 'invalid';
  }
}

document.write('The score in Universty is :'+scoreInUniversty(87)+'<br><br>');

/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/

function counter(){
  let count=0;
  return function(){
    count+=1;
    return count;
  }
}
let Mycounter=counter();
document.write('The counter value is: '+Mycounter()+'<br><br>');
document.write('The counter value is: '+Mycounter()+'<br><br>');
document.write('The counter value is: '+Mycounter()+'<br><br>');
document.write('The counter value is: '+Mycounter()+'<br><br>');
document.write('The counter value is: '+Mycounter()+'<br><br>');

/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/

function createCounter() {
  let count = 0; 
  let previousCount = 0; 

  function counter() {
    count += 1; 
    previousCount = count;
    return count; 
  }

  function resetCounter() {
    let resetMessage = `${previousCount} and the counter reset now`; 
    count = 0; 
    return resetMessage; 
  }

  return {
    counter: counter,
    resetCounter: resetCounter
  };
}

const myCounter = createCounter();

document.write('The counter value is: '+myCounter.counter()+'<br><br>'); 
document.write('The counter value is: '+myCounter.counter()+'<br><br>'); 
document.write('The counter value is: '+myCounter.counter()+'<br><br>'); 
document.write(myCounter.resetCounter()+'<br><br>'); 
document.write('The counter value is: '+myCounter.counter()+'<br><br>'); 
document.write('The counter value is: '+myCounter.counter()+'<br><br>'); 
document.write(myCounter.resetCounter()+'<br><br>'); 
document.write('The counter value is: '+myCounter.counter()+'<br><br>');