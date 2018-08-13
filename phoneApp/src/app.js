class App {
    constructor() {
        this.bd = bd;
        this.lol = document.getElementById('lol');
        this.activPage = 'Contacts';
        this.pages = {
            contacts: new Contacts(this.bd),
            keypad: new Keypad(this.bd),
            user: new User(this.bd),
            editUser: new EditUser(this.bd),
            addUser: new AddUser(this.bd),
        }
    }
    render(id) {
        console.log(`qq `, this.activPage)
        if (this.activPage == 'Contacts') {
            this.lol.innerHTML = '';
            let c = this.pages.contacts;
            setTimeout(() => {
                c.render(this.bd);
                c.search.oninput = function() {
                    let t = c.filter(search.value);
                    c.bd = t;
                    c.sorts();
                };
            }, 500);
        }
        if (this.activPage == 'User') {
            this.lol.innerHTML = '';
            let c = this.pages.user;
            c.render(id);
        }
        if (this.activPage == 'Keypad') {
            this.lol.innerHTML = '';
            let c = this.pages.keypad;
            c.render();
        }
        if (this.activPage == 'Edit contact') {
            this.lol.innerHTML = '';
            let c = this.pages.editUser;
            c.render(id);
        }
        if (this.activPage == 'Add user') {
            this.lol.innerHTML = '';
            let c = this.pages.addUser;
            c.render();
        }
    }
}
var app = new App(bd);
app.render();