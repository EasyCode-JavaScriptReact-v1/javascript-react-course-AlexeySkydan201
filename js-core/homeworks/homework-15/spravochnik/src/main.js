var tabl = (arr) => {
    arr.forEach(element => {
        var tbody = document.getElementById('myTable').getElementsByTagName("tbody")[0];
        console.log(tbody)
        var row = document.createElement("TR")
        var td1 = document.createElement("TD")
        td1.appendChild(document.createTextNode(element.name))
        var td2 = document.createElement("TD")
        td2.appendChild(document.createTextNode(element.lastName))
        var td3 = document.createElement("TD")
        td3.appendChild(document.createTextNode(element.mail))
        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);
        tbody.appendChild(row);
        return tbody;
    });

}
var bd = [{
        name: 'alex1',
        lastName: 'Sky1',
        mail: 'yy@yy1.com'
    },
    {
        name: 'alex2',
        lastName: 'Sky2',
        mail: 'yy@yy2.com'
    },
    {
        name: 'alex3',
        lastName: 'Sky3',
        mail: 'yy@yy3.com'
    }

]
tabl(bd);