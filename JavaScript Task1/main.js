//Calculate the value of zakat for x
let x = 250 ;
document.write('The value of zakat for 250 is: '+ x*(0.025)+ "<br><br>");

//1 Correct the syntax error
let arr1=[ 1, 7, 9, 45 ];
let arr2=["Str", "alex", "moh"];
let arr3=['the','fox', 'over', 'lazy', 'dog'];

//2 What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"];
document.write("The index of Banana: "+ fruits.indexOf('Banana')+ "<br>");
document.write("The index of Tomato: "+ fruits.indexOf('Tomato')+ "<br><br>");

//3 Create an array represents your:
// 1- Favorite Food (2)
// 2- Favorite Sport (3)
// 3- Favorite Movie (2)

let FavoriteFood=['Pasta','Pizza'];
let FavoriteSport=['Swimming','Football','Tennis'];
let FavoriteMovie=['Frozen','Moana'];

document.write("My Favorite Food: " + FavoriteFood+'<br>');
document.write("My Favorite Sport: " + FavoriteSport+'<br>');
document.write("My Favorite Movie: " + FavoriteMovie+'<br><br>');

//4 Create a Variable to return the first element in an array
let arr=[10,43,5,9,3,14];
document.write('The first element in an array: '+arr[0]+'<br>');

//5 Create a Variable to return the lastOfArray element in an array 
document.write('The last element in an array: '+arr[arr.length-1]+'<br><br>');

//6 Using console make this array to be like this one (push, unshift, shift, pop)
var array = [0,5,7,9];
array.shift();
array.shift();
array.shift();
array.pop();
array.unshift(1,3,4,6,8,9);
array.push(10);
console.log('The array after modification: '+array);

//7 Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you
var array2 = [];
array2.push(9);
array2.push(-7);
array2.push(3.5);
array2.unshift(5);
console.log('The array after modification: '+array2);

//8nWrite a JavaScript program to sort the items of an array.
// Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8
var SampleArray = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
document.write('The array after sort: '+SampleArray.sort(function(a,b){return a-b;})+ '<br><br>');


//9 Write a JavaScript function that returns rate as text
// less than 50 return ==> Fail
// equal or between 50 and 59 ===> E
// equal or between 60 and 69 ===> D
// equal or between 70 and 79 ===> C
// equal or between 80 and 89 ===> B
// equal or between 90 and 100 ===> A

function rate(num){
    if (num < 50) {
        return 'Fail';
    } else if (num >= 50 && num <= 59) {
        return 'E';
    } else if (num >= 60 && num <= 69) {
        return 'D';
    } else if (num >= 70 && num <= 79) {
        return 'C';
    } else if (num >= 80 && num <= 89) {
        return 'B';
    } else if (num >= 90 && num <= 99) {
        return 'A';
    } else {
        return 'Invalid'; 
    }
}
// let userInput = prompt("Enter a value:");
let num=60;
document.write('The rate for ' + num + ' is: '+rate(num)+'<br><br>');

//10 Write a JS code to print a pattern using for loop
for(let i=1;i<=8;i++){
    for(let j=1;j<=i;j++){
        document.write(j);
    }
    document.write('<br>');
}
