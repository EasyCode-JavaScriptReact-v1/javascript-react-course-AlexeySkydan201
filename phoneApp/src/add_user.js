class ADD_USER {
    constructor(bd) {
        this.bd = bd;
        this.container1 = document.getElementById('container');
        this.scroll = document.getElementById('scroll');
        this.arrEditMainInfo = ['First Name', 'Last Name', 'Company'];
        this.arrAdd = ['add mobile phone', 'add  home phone', 'add email', 'add address', 'add birthday', 'add social profile', 'add field']
    }
    main(bd) {
        this.container();
    }
    container() {
        this.container1.innerHTML += this.editMainInfo();
        this.container1.innerHTML += this.scrollHolder();
    }
    editMainInfo() {
        let photo = `<div class="edit-foto">
            <button class="add-foto-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                <span contenteditable="true">add foto</span></button>
        </div>`;
        var result = this.arrEditMainInfo.reduce((sum, current) => {
            return sum + `<div class="edit-field">
            <button href="#" class="add-btn" ><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                    
                </button><span contenteditable="true">${current}</span>
        </div>`
        }, '');
        let mainInfoHolder = `<div class="main-info-holder">${result}</div>`
        return `<div class="edit-main-info">${photo}${mainInfoHolder}</div>`;
    }
    scrollHolder() {
        var result = this.arrAdd.reduce((sum, current) => {
            return sum + `<div class="edit-field">
            <button href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                </button><span contenteditable="true">${current}</span>
                
        </div>`
        }, '');
        let delet = `<div class="edit-field">
        <button href="#" class="delete-contact">save contact</button>
        </div>`
        return `<div class="scroll-holder" ><div class="edit-info">${result}${delet}</div></div>`

    }
}
var add = new ADD_USER(bd);
add.main();
console.log(add.container1.children[0].children[1].children[0].textContent)