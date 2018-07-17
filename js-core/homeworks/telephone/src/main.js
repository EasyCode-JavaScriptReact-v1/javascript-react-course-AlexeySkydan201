/*Приложение телефонный справочник

Создайте функцию конструктор.
У данной функции должны быть методы:

1+. Преобразование телефонного номера из формата 0993378130 в (099) 33-78-130
2+. Проверка, что телефонный номер содержит только числа
3+. Добавление пользователей в справочник
4+. Удаление пользователя по имени, фамилии
5+. Поиск пользователей по имени - отображает всех пользователей с одинаковым именем
6+. Изменение имени, фамилии, телефонного номера у выбраного пользователя ( здесь должно быть реализовано через this )
7+. Сортировка пользователей по номеру телефона, фамилии, имени и тд, по любому из свойств пользователя
8. Фильтр по указанному свойству

*/
const myApp = new PhoneApp();

function PhoneApp() {
    this.dataBase = [
        { id: 1, name: 'Vasya', phone: '1234' },
        { id: 2, name: 'Vasya2', phone: '12441' },
        { id: 5, name: 'Vasya5', phone: '12444' },
        { id: 6, name: 'Vasya6', phone: '12444' },
        { id: 7, name: 'Vasya2', phone: '12442' },
        { id: 8, name: 'Vasya2', phone: '12443' },
        { id: 9, name: 'Vasya2', phone: '12455' }
    ]
}
PhoneApp.prototype.phoneNum = function(phoneNum) {
    if (this.testOnNum(phoneNum) && this.ten(phoneNum)) {
        let str = phoneNum;
        return `(${str.substring(0,3)}) ${str.substring(3,5)}-${str.substring(5,7)}-${str.substring(7,10)}`;
    } else {
        return `неправильно введен номер`;
    }
}
PhoneApp.prototype.testOnNum = function(phoneNum) {
    let arr = phoneNum.split('');
    let isNum = function(number) {
        return !isNaN(number);
    }
    return arr.every(isNum);
}
PhoneApp.prototype.ten = function(phoneNum) {
    return phoneNum.length == 10 || `введите десятизначный номер`;
}
PhoneApp.prototype.addUser = function(name, phone) {
    let lastId = this.dataBase[this.dataBase.length - 1].id;
    let obj = {};
    obj.id = lastId + 1;
    obj.name = name;
    obj.phone = this.phoneNum(phone);
    this.dataBase.push(obj);
}
PhoneApp.prototype.deleteUser = function(name) {
    this.dataBase.forEach((value, i) => {
        if (value.name == name) {
            this.dataBase.splice(i, 1);
        }
    });
}
PhoneApp.prototype.search = function(name) {
    let arr = [];
    this.dataBase.forEach((value, i) => {
        if (value.name == name) {
            arr.push(value);
        }
    });
    return arr;
}
PhoneApp.prototype.change = function(name, newName, newPhone) {
    if (newName && newPhone) {
        this.changePhone(name, newPhone);
        this.changeName(name, newName);
    }
}
PhoneApp.prototype.changeName = function(name, newName) {
    this.dataBase.forEach((value, i) => {
        if (value.name == name) {
            this.dataBase[i].name = newName;
        }
    });
}
PhoneApp.prototype.changePhone = function(name, newPhone) {
    this.dataBase.forEach((value, i) => {
        if (value.name == name) {
            this.dataBase[i].phone = this.phoneNum(newPhone);
        }
    });
}
PhoneApp.prototype.sort = function(param) {
    //let tempArr = this.dataBase
    return this.dataBase.sort((a, b) => {
        return a[param] > b[param];
    });
}
PhoneApp.prototype.filter = function(str) {
    let dataBaseFilter = [];
    this.dataBase.forEach((value, i) => {
        for (let key in value) {
            for (let j = 0; j <= value[key].length - str.length; j++) {
                if (value[key].substr(j, str.length) == str) {
                    dataBaseFilter.push(value);
                    return;
                }
            }
        }
    });
    return dataBaseFilter;
}

console.log(myApp.phoneNum('1234567890'));
console.log(myApp.testOnNum('1234567890'));
myApp.ten('1234567890');
myApp.addUser('alex', '0671233445');
myApp.addUser('alex1', '5554618456');
//console.log(myApp.deleteUser('Vasya2'));
//console.log(myApp.deleteUser('alex'));
console.log(myApp.search('Vasya2'));
myApp.changeName('alex', 'Alexey');
myApp.change('Vasya6', 'Pedro', '3333333333');
myApp.changePhone('Pedro', '2222222222');
console.log(`dataBase `, myApp.dataBase);
console.log(`dataBase `, myApp.sort('name'));
//console.log(`dataBase `, myApp.sort('id'));
console.log(`filter `, myApp.filter('ex'));