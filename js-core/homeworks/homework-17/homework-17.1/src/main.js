var arr = ['img/download1.jpg', 'img/download2.jpg', 'img/download3.jpg', 'img/download4.jpg', 'img/download5.jpg']
left = document.getElementById('left');
right = document.getElementById('right');
var carousel = new Carousel(arr);
left.onclick = function() {
    carousel.left1();
}
right.onclick = function() {
    carousel.right1();
}
carousel.set(2000)