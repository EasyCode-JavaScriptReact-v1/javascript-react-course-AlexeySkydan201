// class Carousel {
//     constructor() {
//         this.img = document.getElementById('img');
//         this.left = document.getElementById('left');
//         this.right = document.getElementById('right');
//         this.num = document.getElementById('num');
//     }
//     left1() {
//         var e = this.img.src.match(/download[1-5]/)[0];
//         var i = e[e.length - 1];
//         i--;
//         if (i == 0) { i = 5 };
//         this.img.src = this.img.src.replace(/download[1-5]/, `download${i}`);
//         this.num.textContent = i;
//     }
//     right1() {
//         var e = this.img.src.match(/download[1-5]/)[0];
//         var i = e[e.length - 1];
//         i++;
//         if (i == 6) { i = 1 };
//         this.img.src = this.img.src.replace(/download[1-5]/, `download${i}`);
//         this.num.textContent = i;
//     }
//     setInt() {
//         function fun() {
//             var e = this.img.src.match(/download[1-5]/)[0];
//             var i = e[e.length - 1];
//             i++;
//             if (i == 6) { i = 1 };
//             this.img.src = this.img.src.replace(/download[1-5]/, `download${i}`);
//             this.num.textContent = i;
//         }
//         setInterval(fun, 2000)
//     }
// }
// var carousel = new Carousel();
// left.onclick = function() {
//     carousel.left1();
// }
// right.onclick = function() {
//     carousel.right1();
// }
// carousel.setInt();
function include(url) {
    var script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}
class Carousel {
    constructor(arr) {
        this.img = document.getElementById('img');
        this.num = document.getElementById('num');
        this.i = 0;
        this.img.src = arr[0];
    }
    left1() {
        this.i--;
        if (this.i < 0) { this.i = 4 }
        this.img.src = arr[this.i];
        this.num.textContent = this.i + 1;
    }
    right1() {
        this.i++;
        if (this.i > 4) { this.i = 0 }
        this.img.src = arr[this.i];
        this.num.textContent = this.i + 1;
        console.log(this.i)
    }
    set(time) {
        let f = () => {
            this.i++;
            if (this.i > 4) { this.i = 0 }
            this.img.src = arr[this.i];
            this.num.textContent = this.i + 1;
        }
        setInterval(f, time);
    }
}