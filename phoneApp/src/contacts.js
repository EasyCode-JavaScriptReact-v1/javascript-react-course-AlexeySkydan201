class Contacts {
    constructor(bd) {
        this.bd = bd;
        this.form = document.getElementById('form');
        this.strForm = `<form class="form-inline search-form" >
        <div class="form-group">
            <label class="sr-only" for="search">Search</label>
            <input type="text" class="form-control" id="search" placeholder="Search" value="">
            
        </div>
        </form>`;
        this.form.innerHTML += this.strForm;
        this.table = document.getElementById('myTable');
        this.thead = `<thead>
        <tr>
            <th onclick = "s.sorts('name')">Name</th>
            <th onclick = "s.sorts('lastName')">Last name</th>
            <th onclick = "s.sorts('mail')">Email</th>
        </tr>
        </thead>`;
        this.search = document.getElementById('search');
    }
    filter(str) {
        let dataBaseFilter = [];
        this.bd.forEach((value, i) => {
            for (let key in value) {
                for (let j = 0; j <= value[key].length - str.length; j++) {
                    if (value[key].substr(j, str.length) == str) {
                        dataBaseFilter.push(value);
                        return;
                    }
                }
            }
        });
        //this.tbody(dataBaseFilter);
        return dataBaseFilter;
    }
    sorts(param) {
        this.bd.sort((a, b) => {
            return a[param] > b[param];
        });
        this.tbody(this.bd);
    }
    tbody(bd) {
        var result = bd.reduce(function(sum, current) {
            return sum + `<tr>
        <td>${current.name}</td>
        <td>${current.lastName}</td>
        <td>${current.mail}</td>
        </tr>`;
        }, '');
        let h = this.thead + `<tbody>${result}</tbody>`;
        this.table.innerHTML = h;
    }
}
var s = new Contacts(bd);
s.sorts();
s.search.oninput = function() {
    let t = s.filter(search.value);
    s.bd = t;
    s.sorts();

};

/*
var form = document.getElementById('form');
var strForm = `<form class="form-inline search-form" >
<div class="form-group">
    <label class="sr-only" for="search">Search</label>
    <input type="text" class="form-control" id="search" placeholder="Search" value="">
    
</div>
</form>`;
form.innerHTML += strForm;

var table = document.getElementById('myTable');
var thead = `<thead>
<tr>
    <th onclick = "sorts('name')">Name</th>
    <th onclick = "sorts('lastName')">Last name</th>
    <th onclick = "sorts('mail')">Email</th>
</tr>
</thead>`;


var search = document.getElementById('search');
search.oninput = function() {

    newMass = filter(search.value).slice()
};

var filter = function(str) {
    let dataBaseFilter = [];
    bd.forEach((value, i) => {
        for (let key in value) {
            for (let j = 0; j <= value[key].length - str.length; j++) {
                if (value[key].substr(j, str.length) == str) {
                    dataBaseFilter.push(value);
                    return;
                }
            }
        }
    });
    tbody(dataBaseFilter);
    return dataBaseFilter;
}


var sorts = (param) => {
    bd.sort((a, b) => {
        return a[param] > b[param];
    });

    tbody(bd);
}
var tbody = (bd) => {
    var result = bd.reduce(function(sum, current) {
        return sum + `<tr>
    <td>${current.name}</td>
    <td>${current.lastName}</td>
    <td>${current.mail}</td>
    </tr>`;
    }, '');
    let h = thead + `<tbody>${result}</tbody>`;
    table.innerHTML = h;
}
sorts();
*/