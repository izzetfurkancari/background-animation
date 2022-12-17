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
    })};
    var colorArray = [
        '#3498DB',
        '#E74C3C',
        '#A569BD',
        '#1ABC9C',
        '#58D68D',
        '#F1C40F',
        '#DC7633'
    ];

    window.addEventListener('resize', function () {
        obj.width = window.innerWidth;
        obj.height = window.innerHeight;

        init();

    });
    function Circle(x, y, dx, dy, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.minRadius = radius;
        this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

        this.draw = function () {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ctx.fillStyle = this.color;
            ctx.fill();
        }

        this.update = function () {
            if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
                this.dx = -this.dx;
            }
            this.x += this.dx;

            if (this.y + 30 > innerHeight || this.y - 30 < 0) {
                this.dy = -this.dy;
            }
            this.y += this.dy;

            //interactivity

            if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
                if (this.radius < maxRadius) {
                    this.radius += 1;
                }
            } else if (this.radius > this.minRadius) {
                this.radius -= 1;
            }


            this.draw();
        }
    }