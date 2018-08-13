const strFooter = `<div class="container bottom-radius">
    <nav class="main-nav" id = "nav1">
            <a href="" class="tab active">
            <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
            <span class="tab-text">Contacts</span>
            </a>
            <a href="keypad.html" class="tab">
            <span class="glyphicon glyphicon-th" aria-hidden="true"></span>
            <span class="tab-text">Keypad</span>
            </a>
            <a href="edit-contact.html" class="tab">
            <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
            <span class="tab-text">Edit contact</span>
            </a>
            <a href="user.html" class="tab">
            <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
            <span class="tab-text">User</span>
            </a>
            <a href="add-user.html" class="tab">
            <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
            <span class="tab-text">Add user</span>
            </a>
    </nav>
</div>`
const footer = document.getElementById('fo-er')
footer.innerHTML += strFooter;
var nav = document.getElementById('nav1');
console.log(`app `, app.activPage);
[...nav.children].forEach(element => {
    element.addEventListener('click', () => {
        event.preventDefault();
        app.activPage = element.children[1].textContent;
        app.render();
        console.log(`dd `, element.children[1].textContent);
    });
});