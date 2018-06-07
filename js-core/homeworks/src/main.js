/*
Напишите функцию которая будет возвращать объект
с свойством name, а значением будет первый аргумент функции
*/
function returnObject(name) {
	let obj = {};
	obj.name = name;
	return obj;

}
var someObject = returnObject('Oleg');
console.log(someObject);



/*
Функция будет принимать 1 аргумент - ОБЪЕКТ у которого
будет свойство name
и возвращать новый объект изменяя свойство name
в большой регистр
*/
function toUpperCase(obj) {
	let newObj = {};
	newObj.name = obj.name.toUpperCase();
	return newObj;
}
const objectWithName = { name: 'privet kak dela' ,ee: 'l;j;j'};
console.log(toUpperCase(objectWithName));



/*
1. Напишите функцию которая принимает в
качестве аргумента массив и элемент массива
и добавляет элемент в конец массива
*/

let arr = [];
arr[0] = 'privet';
arr[1] = 'poka';
arr[2] = 'zdrastvuite';

function addToArray(arrParam, newElem) {
	//arrParam[arrParam.length] = newElem;
	arrParam.push(newElem);
	// без "естественных" способов добавления
}
addToArray(arr, 34);
addToArray(arr, 55);
console.log(arr);


/*
2. Напишите функцию которая получает 3 параметра
и возвращает объект типа:
    {
      argument1: param1,
      argument2: param2,
      argument3: param3,
    }
*/
function simpleObjectGenerator(one, two, three) {
	let obj = {};
	obj.argument1 = one;
	obj.argument2 = two;
	obj.argument3 = three;
	return obj;
}
console.log(simpleObjectGenerator('protocol', { url: '22' }, 8000));


/*
3.  Напишите функцию которая принимает 3 аргумента,
     третий аргумент - это объект.
    Функция создает новый объект и добавляет ключ
    это первый аргумент, а значение - второй аргумент
    Проверяет если есть свойство name в переданном объекте,
    тогда добавляет данное свойство и возвращает новый объект
*/
var myName = { name: 'Oleg' };

function addNameToUser(newKey, newValue, userName) {
	let obj = {};
	obj[newKey] = newValue;
	if(userName.name){
		obj.name = userName.name;
	}
return obj;
}
console.log(addNameToUser('family', '%Lustenko%', myName));
console.log(addNameToUser('name', 'privet Pasha', {}));
/* {name:'Oleg', family:'%Lustenko%'} */
console.log(myName);
/* {name:'Oleg'} */



/*
-> @@ SUPER !
  Напишите функцию, которая будет
   возвращать 'Fizz' если передаваемый параметр кратен 3,
   'Buzz', если передаваемый параметр кратен 5,
   'FizzBuzz' - если параметер кратен 3 и 5
   Если передаваемое число не кратно 3 или 5, то вернуть указанный параметр
*/
function fizzBuzz(num) {
if(num%3 == 0 && num%5 == 0){
	console.log('FizzBuzz');
}else{
	if(num%3 == 0){
		console.log('Fizz');
	}else if(num%5 == 0){
		console.log('Buzz');
	}else{
  		console.log(num);
	}	
}
} 

fizzBuzz(1); // 1
fizzBuzz(2); // 2
fizzBuzz(3); // 'Fizz'
fizzBuzz(5); // 'Buzz'
// ...
fizzBuzz(15); // 'FizzBuzz'
fizzBuzz(21); // 'Fizz'
fizzBuzz(45);


/* -> @@ SUPER 2
Напишите функцию, которая будет принимать 4 аргумента,
последний всегда функция.
Добавьте первые 3 аргумента в массив и вызовите переданную функцию с данным массивом
*/

function super2(arg1, arg2, arg3, callback) {
	let mass = [];
	mass.push(arg1,arg2,arg3);
	callback(mass);
}
super2(5, 6, 7, function (mass){
	let sum = mass[0]+mass[1]+mass[2];
	console.log(sum);
});
super2(5, 6, 7, function (mass){
	let multiply = mass[0]*mass[1]*mass[2];
	console.log(multiply);
})
//3