window.onload = function () {
    var obj = document.querySelector('canvas');
    obj.width = window.innerWidth;
    obj.height = window.innerHeight;
    var ctx = obj.getContext('2d');

    var mouse = {
        x: undefined,
        y: undefined
    }

    var maxRadius = 50;
    //var minRadius = Math.random() * 6 + 1;
    window.addEventListener('mousemove', function (event) {
        mouse.x = event.x;
        mouse.y = event.y;
    })}