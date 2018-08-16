class Base {
    constructor(url) {
        this.url = `http://easycode-js.herokuapp.com/${url}/users`;
        this.mass = [];
        this.bd = [];
    }
    serverRequest() {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                this.mass = JSON.parse(xhr.responseText);
                this.mass.forEach((element, i) => {
                    this.bd.push(element.fullName);
                    this.bd[i] = element;
                });


            }
        };
        xhr.open('GET', this.url, true);
        xhr.send();
    }
}