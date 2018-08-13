// var bd = [{
//         fullName: 'alex1',
//         phone: 'Sky11',
//         email: 'yu@yy14.com'
//     },
//     {
//         fullName: 'balex2',
//         phone: 'Sky22',
//         email: 'yy@yy2.com'
//     },
//     {
//         fullName: 'calex3',
//         phone: 'Sky31',
//         email: 'yt@yy3.com'
//     },
//     {
//         fullName: 'dalex4',
//         phone: 'Sky2',
//         email: 'yy@ky26.com'
//     },
//     {
//         fullName: 'balex7',
//         phone: 'Sky43',
//         email: 'ay@yy3.com'
//     },
//     {
//         fullName: 'calex42',
//         phone: 'Sky2',
//         mail: 'cy@yy2.com'
//     },
//     {
//         fullName: 'aalex13',
//         phone: 'Sky3',
//         email: 'by@yy3.com'
//     }

// ]
var url = 'http://easycode-js.herokuapp.com/skal/users';
var mass = [];
var bd = [];

var serverRequest = () => {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            mass = JSON.parse(xhr.responseText);
            // console.log(`t `, mass);
            mass.forEach((element, i) => {
                //console.log(element);
                bd.push(element.fullName);
                bd[i] = element;

            });


        }
    };
    xhr.open('GET', url, true);
    xhr.send();
};

serverRequest();
console.log(`bd`, bd);
// var myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(bd);
//     }, 500);
// })