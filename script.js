
console.log('Задание 1');
let x, y, z;

function calc(x, y, z) {
        console.log((x - y)/z);
}
calc(3, 2, 1);


console.log('');
console.log('Задание 2');

let num, num1, num2;

function getNum (num) {
     num1 = num**3;
     num2 = num**2;
    return num1, num2;
}
getNum(3); 
console.log(num1, num2);


console.log('');
console.log('Задание 3');

let a, b, c, d, min, max;

function numMin (a, b) {
    if (a < b) {
      min = a;
    } else {min = b};
    return min;
}
numMin(12, 5);
console.log(min);

function numMax (c, d) {
    if (c > d) {
      max = c;
    } else {max = d};
    return max;
}
numMax(3, 5);
console.log(max);


console.log('');
console.log('Задание 4');

let arr;

function getArr () {
       arr = [];
   for (let num3 = prompt('Введите число для Задания 4'); num3 != ''; num3 = prompt('Введите число для Задания 4')) {
       arr.push(Number(num3));       
    }
    return arr;
}
function giveArr () {
    getArr();
    console.log(arr);
}
giveArr();


console.log('');
console.log('Задание 5');
let even;
function isEven(even) {
    if(even %2 == 0){
        return true;
    } else {
        return false
    };
}
console.log(isEven(10));


console.log('');
console.log('Задание 6');

function giveArr2 () {
    let arr1 = [43, 51, 8, 0, 325, 98];
    let arr2 = [];
    for (i = 0; i < arr1.length; i++) {  
        if(isEven(arr1[i]) == true ) {
        arr2.push(arr1[i]);
    }  
}
console.log(arr2);
}
giveArr2();



console.log('');
console.log('Задание 7');


let h = prompt('Введите число для Задания 7');

if(h != isNaN(h)) {

for (let i = 1; i <= h; i++) {
    let arr3 = [];
    arr3[0] = i ;
    for(let n = 2; n <= i; n++) {
        arr3.push(i);
    }

console.log(arr3.join(' '));
}
} else {
    for (let i = 1; i <= 9; i++) {
        let arr3 = [];  
        arr3[0] = '*';
         for(let n = 2; n <= i; n++) {
            arr3.push('*');
        }
    console.log(arr3.join(' '));
    }
}

 
 console.log('');
 console.log('Задание 8');

function giveArr4 () {
let arr = [];
let a = 0;
arr[0] = 0;
arr[1] = 1;
for (let i = 2; a < 1000; i++) {
    a = arr[i-2] + arr[i-1];
        if(a > 1000){
        break;
        }
    arr[i] = a;
}
console.log(arr);
}
giveArr4();


console.log('');
console.log('Задание 9');

let str;
let sum;
function getStr(str) {
str = String(str);
        sum = 0;
    for (i = 0; i < str.length; i++) {
        sum = sum + Number(str[i]); 
        } 
        console.log(sum);
            if (sum >= 9) {
                getStr(sum);
            }
}         
getStr(2359874697565);      


console.log('');
console.log('Задание 10');
let e = 0;
let arr4 = [];

function getNum1(arr4) {
    console.log(arr4[e]);
        if(e < arr4.length - 1) {
        e++;   
        getNum1(arr4);
        } 
}
getNum1([1, 8, 9, 6, 55, 99]);



