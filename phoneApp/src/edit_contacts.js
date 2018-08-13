class EditUser {
    constructor(bd) {
        /*
        вставить id из бд и отображать usera
        уменьшить кол-во полей
        */
        this.bd = bd;
        this.lol = document.getElementById('lol');
        this.container1 = document.getElementById('container');
        this.scroll = document.getElementById('scroll');
        this.arrEditMainInfo = ['First Name', 'Last Name', 'Company'];
        this.arrAdd = ['add fullName', 'add  email', 'add birthdate', 'add address', 'add gender ']
    }
    render(id) {
        console.log(`nnn`, id)
        this.bd.forEach(element => {
            if (element._id == id) {
                this.arrAdd[0] = 'name - ' + element.fullName;
                this.arrAdd[1] = 'email - ' + element.email;
                if (element.birthdate == undefined) {
                    this.arrAdd[2] = 'birthdate - ' + element.birthdate
                } else {
                    this.arrAdd[2] = 'birthdate - ' + element.birthdate.substring(0, 10);
                }
                this.arrAdd[3] = 'location - ' + element.address;
                this.arrAdd[4] = 'gender - ' + element.gender;
            }

        });
        this.lol.innerHTML += this.header();
        this.lol.innerHTML += this.main();
    }
    header() {
        return `<header class="header">
        <div class="container top-radius">
            <nav class="user-top-line">
                <a href="user.html">Cansel</a>
                <button type="submit" form="edit-contact" formaction="#" formmethod="get" class="done-btn">Done</button>
            </nav>
        </div>
    </header>`;
    }
    main(bd) {
        return `<main class="main">
        <div class="container" id="container">
        ${this.container()}
        </div>
        </main>`
    }
    container() {
        return this.editMainInfo() + this.scrollHolder();
    }
    editMainInfo() {
        let photo = `<div class="edit-foto"><img src="images/user-face-mini.png" alt="#" class=" user-img img-circle center-block"></div>`;
        var result = this.arrEditMainInfo.reduce((sum, current) => {
            return sum + `<div class="edit-field">
            <button href="#" class="add-btn" ><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                    
                </button><span contenteditable="true">${current}</span>
        </div>`
        }, '');
        let mainInfoHolder = `<div class="main-info-holder">${result}</div>`
        return `<div class="edit-main-info">${photo}</div>`;
    }
    scrollHolder() {
        var ph = ` <div class="edit-field">
        <button href="#" class="delete-btn"><span class="glyphicon glyphicon-minus-sign" aria-hidden="true"></span>
            <span>phone</span>
            <span>+38 (063) 733 44 55</span>
            </button>
    </div>`;
        var result = this.arrAdd.reduce((sum, current) => {
            return sum + `<div class="edit-field">
            <button href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                </button><span contenteditable="true">${current}</span>
                
        </div>`
        }, '');
        let delet = `<div class="edit-field">
        <button href="#" class="delete-contact">delete contact</button>
        </div>`
        return `<div class="scroll-holder" ><div class="edit-info">${ph}${result}${delet}</div></div>`

    }
}
var add = new EditUser(bd);
//add.render();
//console.log(add.container1.children[0].children[1].children[0].textContent)