//ООП в JS adv - тут доразобраться с Объектами

class MenuItem {
    constructor(color, name) {

        this.color = color, this.name = name, this.makeRed = function () {
            this.color = 'red';
        };
    }
}
let item1 = ​new​ MenuItem(​'black'​, ​'Foo'​);
let item2 = ​new​ MenuItem(​'white'​, ​'Bar'​);

console​.log(item1.color);​
// Foo console​.log(item2.name); ​// Bar

/*
console.log("Преобразование числа в объект");
let chislo = 123;


let textArea = document.getElementById('textArea');
console.log(textArea);

let button2 = document.getElementById('button2');
console.log(button2);
button2.onclick =  calc;

function calc() {
    textArea.textContent = sumDigits(chislo);
    console.log(sumDigits(chislo));
}

function sumDigits(inboxNumber) {
    let realDigits = inboxNumber.toString().split('').map(Number);
    let z=0;
    console.log('Str 23: '+inboxNumber);
    console.log('Str 24: '+inboxNumber.toString());
    console.log('Str 25: '+inboxNumber.toString().split(''));
    console.log('Str 26: '+realDigits);
    for (let i=0;i<realDigits.length;i++){
        z=z+realDigits[i];
    }
    console.log('Str 30: '+z);
    console.log('Object below');
    console.log(realDigits[0]);
    console.log(realDigits[1]);
    console.log(realDigits[2]);
    
    let outObject = {

    }
    outObject.units = realDigits[0];
    outObject.dozens = realDigits[1];
    outObject.hundreds = realDigits[2];

    return `Units:${outObject.units} Dozens:${outObject.dozens} Hundreds:${outObject.hundreds} `;
    
}
*/



/*
var car = {
    make: "Audi",
    model: "A5",
    year: 2015,
    color: "red",
    passengers: 2,
    power: 225,
    somethingElse: 3000,
    tengineIsStarted: false,
    startEngine: function () {
        this.engineIsStarted = true;
    },
    stopEngine: function () {
        this.engineIsStarted = false;
    },
    haveRoadTrip: function (distance) {
        if (this.engineIsStarted) {
            this.odometer += distance;
        } else {
            alert("Сначала запустите двигатель!");
        }
    }

};


console.log(car.model);
console.log(car);
car.newField1 = "newField1";
console.log(car.newField1);
console.log(car);
delete car.somethingElse;
delete car.newField1;
console.log(car);
car.startEngine();
console.log(car.engineIsStarted);

for (var prop in car) {
    
    console.log(prop);
    }

console.log('••••••••••');
for (var prop in car) {
    console.log(prop + '  -  ' + car[prop] );
} 
*/


/*
    let num1 = 3;

    function myProcessor() {
        console.log("testEvent1");
    }
    window.onload = myProcessor;

    let buttonTest = document.getElementById("buttonTest1");
    buttonTest.onclick = buttonTestFunc;

    function buttonTestFunc() {
        let buttonFindText2id = document.getElementById("text2id");
        console.log(buttonFindText2id);
        buttonFindText2id.innerHTML = `
        <div><button id='buttonTest9'>Test` + num1 + `</button> </div>
        <div><button id='buttonTest8'>Test8</button> </div> 
        `;

        let classChange = document.querySelectorAll(".myClass1");
        classChange =Array.from(classChange); 
        classChange.forEach(Element=>Element.innerHTML='<p>MyClassNEW divAll</p>')
        
        console.log(classChange);
 
    } */


/*
// в функцию передается целое положительное число. Функция возвращает сумму всех цифр.
function sumDigits(sum) {
    let realDigits = sum.toString().split('').map(Number);
    let z=0;
    console.log(sum);
    console.log(sum.toString());
    console.log(sum.toString().split(''));
    console.log(realDigits);
    for (let i=0;i<realDigits.length;i++){
        z=z+realDigits[i];
    }
    console.log(z);
}
console.log(sumDigits(123));
console.log(sumDigits(9045));
console.log(sumDigits(3));
*/

// в функицю передается массив целых чисел и число B. Необходимо написать функцию которая вернет булево занчение, 
//true если в переданном массиве есть 2 числа сумма которых равна b, иначе false

/*
let arr = [10,20,30,40,50,60,70];
let b = 80;

function calculate(inArr,inB) {
    for (let i=0;i<inArr.length;i++) {
        //console.log('test '+i);
        for (let j=i;j<inArr.length;j++){
            if ((i!=j)&&(inArr[i]+inArr[j]==b)) console.log(inArr[i]+' + '+inArr[j]+' TRUE = '+b); 
        }
    }
    return;
}

calculate(arr,b); */


/*
    function calculate(arr) {
        //вариант 1
        let z = 0;
         for (let i = 0; i < arr.length; i++) {
             if ((arr[i] % 2 !== 0) && (arr[i] > 0)) z += arr[i]; //z.push(arr[i]);
         }
         return z;

        //вариант 2 через reduce
        array.reduce(callback[, initialValue]) 

    }
    console.log(calculate([5, 0, -5, 20, 88, 17, -32]));*/

// прописать тоже самое через forEach