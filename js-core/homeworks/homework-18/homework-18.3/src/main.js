var resizes = document.getElementsByClassName('resize');
var sections = document.querySelector('section');
console.log(sections);

[...sections.children].forEach((section, i) => {
    let resize = section.children[0];
    console.log(section);
    resize.onmousedown = (e) => {
        var coords = getCoords(resize);
        var shiftX = e.pageX;
        //var shiftY = e.pageY - coords.top;
        var sectionCoords = getCoords(section);

        console.log(`s `, sectionCoords, `q `, e.pageX);
        //moveAt(e);
        //resize.style.zIndex = 1000;

        function moveAt(e) {

            resize.style.left = (e.pageX - shiftX) + 'px';
            console.log(`e `, section.style.width);
            section.style.width = (e.pageX - shiftX) + 'px';

            //console.log(e);
            //resize.style.top = e.pageY - shiftY + 'px';
        }
        document.onmousemove = function(e) {
            moveAt(e);
        };

        resize.onmouseup = function() {
            document.onmousemove = null;
            resize.onmouseup = null;
            section.onmouseup = null;
        };
        resize.ondragstart = function() {
            return false;
        };

    }
});

function getCoords(elem) { // кроме IE8-
    var box = elem.getBoundingClientRect();

    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };

}