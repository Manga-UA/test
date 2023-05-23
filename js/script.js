
// let root = document.getElementById('root');
// console.log(root);
// if(root.hasChildNodes()){
// 	console.log('yes');
// 	let childDiv = root.children;
// 	console.log("-------");
// 	console.log(typeof( childDiv));
// 	console.log("-------");
// 	childDiv
// 	console.log( childDiv);
// 	console.log("-------");
// 	console.log("-------");

// const { userInfo } = require("os");

	
// 	for (const child of root.children) {
// 	  console.log(child);
// 	}	
// 	// console.log(childDiv.item(1));
// 	// childDiv.forEach((val,key)=>{
// 	// 	console.log(val);
// 	// });

// }
/*?
	New learn
*/


/**
 * 
 * FOR,WHILE,DO...WHILE
 * 
*/
// console.log("Task1");

// console.log("FOR");
// // FOR
// for (let num = 1;num<=5;num++){
// 	console.log(num);
// }
// console.log("WHILE");

// // WHILE
// let numWhile = 1;
// while(numWhile<=5){
// 	console.log(numWhile);
// 	numWhile++;
// }
// console.log("do while");
// // do while
// let numWhile2 = 1;
// do {
// 	console.log(numWhile2);
// 	numWhile2++;
// } while (numWhile2<=5);
// console.log("------------");
// console.log("------------");
// console.log("------------");
// console.log("Task2");
// let numWhile3 = 8;
// while (numWhile3) {
// 	console.log(numWhile3);
// 	numWhile3--;
// }
// console.log("Task3");
// let numWhile4=0;
// while(numWhile4<3){
// 	console.log(`Число: ${numWhile4}`);
// 	numWhile4++;
// }
// console.log("Task4");
// firstFor: for(let num=0;num<2;num++){
// 	for(let size = 0; size<3;size++){
// 		if(size == 1){
// 			console.log('Ну все допрыгался!!!');
// 			break firstFor;
// 		}
// 		console.log(size);
// 	}
// }

// let message;
// if(2>1){
// 	message = ()=>{
// 		return console.log("message");
// 	}
// }
// message();


// const userInfo = {
// 	name: "Vasyl",
// 	age:30,
// 	"58":'Значение свойства',
// }
// console.log(userInfo[58]); // Значение свойства

// let userInfo = {
// 	name:"Вася",
// 	age:30,
// }
// let user =userInfo;
// user.age = 45;
// console.log(userInfo.age);//45

// let userInfo = {
// 	name: "vasy",
// 	age: 30,
// 	showInfo(){
// 		console.log(`${this.name}`);
// 	}
// }

// let user = userInfo;
// userInfo = null;
// user.showInfo();//vasy

// let userInfo = {
// 	name:"Вася",
// 	age:30,
// }

// for (const key in userInfo) {
// 	const value = userInfo[key];
// 	console.log(value);
// }

// let userInfo = {
// 	name: "Vasy",
// 	age: 30,
// 	address: {
// 		city: "Kyiv"
// 	}
// }

// for (const key in userInfo.address) {
// 	console.log(userInfo.address[key]);
// }


// const userInfo = {
// 	name: "Vasy",
// 	age: 23,
// 	"like js": true,
// }

// console.log(userInfo["like js"]);


// let userInfo = {
// 	name: "Vasyliy",
// 	age: 30,
// }

// userInfo.name = "Elena";

// delete userInfo.name;

// console.log(userInfo);

// let id = Symbol("id");
// let userInfo = {
// 	name: "Kate",
// 	age: 21,
// 	address: {
// 		city: "New York",
// 		country: "USA",
// 		street: "Lomachenko 3B/1",
// 	},
// 	[id]: "Nothing",
// }
// let portfolio = {
// 	project: "Pages",
// 	link: "http://github.io",
// 	img: "img/src/monkey.jpg",
// 	showPortfolio() {
		
// 		let show = () => console.log(`${this.project}`+" "+`${this.img}`+" "+`${this.link}`);
// 		show();
// 	}
// } 
// console.log(portfolio);
// portfolio.showPortfolio();
// let copy = portfolio;
// portfolio = null;
// console.log(" -------------------- ");
// copy.showPortfolio();


// function UserInfo (name){
// 	this.name = name;
// 	this.age = 15;
// }

// console.log(new UserInfo('Kate'));
// let numOne = 1.005 + Number.EPSILON;
// let num = Math.round(numOne*100)/100;
// console.log(num);//1.01

// let value = "135.58px";
// console.log(parseFloat( value));

// let value = 58 + "Frilancer";
// if(isNaN(value)){
// 	console.log("Результат выражения NaN");
// }

// let maxNumber = Math.max(10,58,39,-150,0);
// let minNumber = Math.min(10,58,39,-150,0);
// console.log(maxNumber);
// console.log(minNumber);

// let v = Math.floor(58.858);
// console.log(v);.


// let text = 456 + ;
// console.log(text);
// console.log(text.slice(5,6));
// let arr = ['вася','Иштван','оля'];
// let newArr = arr;
// newArr.push('Kate');
// console.log(arr.length);

// let users = ['Kate', 'Alex'];
// users.push('Mike');
// console.log(users);
// users.splice(1,1,'Genry');
// console.log(users);
// let removeUsers = users.splice(0,1);
// console.log(removeUsers);
// console.log(users);



// let str = "Mike,Kate,Henry,Alex,John";
// let array = str.split(',');
// console.log(array);


// let array = [
// 	{date: '2017-01-10'},
// 	{date: '2016-05-18'},
// 	{date: '2002-12-20'},
// 	{date: '2020-06-30'},
// ];

// console.log(array);

// array.sort((a,b) => a.date > b.date ? 1 : -1);

// console.log(array);



// // Task 5
// const root = document.getElementById('root');
// const divs = root.getElementsByTagName('div');

// for (let i = 0; i < divs.length; i++) {
// 	divs[i].addEventListener('click', function() {
// 		console.log(this.id);
// 	});
// }

/*
Напишите однострочное решение, которое вычисляет 
сумму квадратных корней для всех чётных 
чисел целочисленного массива.
*/

let array = [5,15,9,7,3,5];
const sqrtSumm =  array.reduce((previousSumm,element)=> previousSumm + Math.sqrt(element),0);

// console.log(Math.round(sqrtSumm,2));
console.log(sqrtSumm.toFixed(2));

/*
Напишите функцию, которая пишет в консоль число в заданном диапазоне,
в случае, если оно успешно делится или
не делится с остатком или без остатка в зависимости от параметров.
*/
// ! Замыкание 

// function getNumbersModulatordBy(modulus, loggerCallback) {
// 	// Функция, которая возвращает функцию - это подход из функционального программирования
// 	// Называется замыканием (Closure)
// 	return function(start, end) {
// 	  loggerCallback({ message: "Конфигурация", config: configuration });
// 	  loggerCallback({ message: "Полученный модулятор", modulus: modulus });
// 	  loggerCallback({
// 		message: "Полученный start и end",
// 		start: start,
// 		end: end
// 	  });
   
// 	  while (start <= end) {
// 		// Стоит обратить внимание:
// 		// 1. При нестрогом равенстве true == 1 и false == 0
// 		// 2. Здесь мы обращаемся к глобальному контексту configuration
// 		// p.s. поле isEntry может меняться
// 		if (start % modulus == configuration.isEntry) {
// 		  // В данном случае мы используем loggerCallback как middleware
// 		  // Это определит дальнейшую судьбу результата
// 		  // Позволяет убрать side-effect
// 		  loggerCallback(start);
// 		}
// 		start++;
// 	  }
// 	};
//    }
   
//    // Глобальный контекст не имеет блочной видимости
//    // В данном случае переменная поднимается выше в самое начало кода
//    // Исполнитель JavaScript видит её в независимости от места инициализации
//    var configuration = {
// 	modulus: 10,
// 	isEntry: false,
// 	start: 45,
// 	end: 68
//    };
   
//    var loggerCallback = data => console.log(data);
   
//    let tenNumbersModulator = getNumbersModulatordBy(
// 	configuration.modulus,
// 	loggerCallback
//    );
   
//    // Переменные с глобальным контекстом доступны из:
//    // 1. globalThis (в Node.js)
//    // 2. window (в браузере)
//    window.configuration.modulus = 5;
   
//    let fiveNumbersModulator = getNumbersModulatordBy(
// 	configuration.modulus,
// 	loggerCallback
//    );
   
//    tenNumbersModulator(configuration.start, configuration.end); // 50, 60
//    tenNumbersModulator(10, 100); // 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
   
//    // Так как мы изменили поле isEntry, то теперь:
//    // Функция вернёт те значения, которые не входят в модуляцию числа
//    window.configuration.isEntry = true;
   
//    fiveNumbersModulator(configuration.start, configuration.end); // 46, 51, 56, 61, 66
//    fiveNumbersModulator(10, 21); // 11, 16, 21


