var circle = function(clas, moveY, moveX, x, y, condition) {
    this.clas = clas;
    this.moveY = moveY;
    this.moveX = moveX;
    this.x = x;
    this.y = y;
    this.condition = condition;
    this.chkX = function() {
        var obj = document.querySelector(`.${this.clas}`);
        return obj.getBoundingClientRect().x;
    };
    this.chkY = function() {
        var obj = document.querySelector(`.${this.clas}`);
        return obj.getBoundingClientRect().y;
    };
    this.chkWidth = function() {
        var obj = document.querySelector(`.${this.clas}`);
        return obj.getBoundingClientRect().width;
    };
    this.html = `<div class="color ${this.clas}" style="top:${this.y}px;left:${this.x}px;">`;
    this.insert = function() {
        document.querySelector("body").insertAdjacentHTML("beforebegin", this.html)
    };
    this.move = function() {
        var obj = document.querySelector(`.${this.clas}`);
        var x = obj.getBoundingClientRect().x;
        var y = obj.getBoundingClientRect().y;
        // console.log("X1=" + x + ", Y1=" + y);
        var num = 1;
        var width = window.innerWidth;
        var height = window.innerHeight;
        if (y == 0) {
            this.moveY = "bottom";
            console.log();
        } else if (y == height - 100) {
            this.moveY = "top";
        } else if (x == 0) {
            this.moveX = "right";
        } else if (x == width - 100) {
            this.moveX = "left";
        }
        if (!this.condition) {
            // if (this.moveY == "top") {
            //     this.moveY = "bottom";
            // }
            //  else if (this.moveY == "bottom") {
            //     this.moveY = "top";
            // }
            if (this.moveX == "left") {
                this.moveX = "right";
            } else if (this.moveX == "right") {
                this.moveX = "left";
            }
        }
        newMove(this.moveY, obj, num);
        newMove(this.moveX, obj, num);
    }
};
var circle1 = new circle("sqr", "bottom", "right", 20, 0, true);
let circle2 = new circle("sqr1", "bottom", "left", 90, 80, true);
var calculate = () => {
    let num = Math.round(Math.pow(Math.pow((circle2.chkX() - ((circle1.chkWidth() / 2) * (Math.pow(2, 1 / 2)) / 2)) - (circle1.chkX() - ((circle1.chkWidth() / 2) * (Math.pow(2, 1 / 2)) / 2)), 2) + Math.pow((circle2.chkY() - ((circle1.chkWidth() / 2) * (Math.pow(2, 1 / 2)) / 2)) - (circle1.chkY() - ((circle1.chkWidth() / 2) * (Math.pow(2, 1 / 2)) / 2)), 2), 1 / 2));
    console.log(`num=${num},width=${circle1.chkWidth()}`);
    if (fun() <= circle1.chkWidth()) {
        circle1.condition = false;
        circle2.condition = false;
    } else {
        circle1.condition = true;
        circle2.condition = true;
    }
}
let arr = [circle1, circle2];
arr.forEach(element => {
    element.insert();
});

for (let i = 0; i < arr.length; i++) {
    var r = 10;
    if (i % 2 == 0) {
        r = 10;
    } else {
        r = 15;
    }
    // console.log(r);
    setInterval(() => {
        calculate();
        // console.log(circle1.condition);
        arr[i].move();
    }, r)
};

function fun() {
    var oop = document.querySelector(".sqr").getBoundingClientRect();
    var oop1 = document.querySelector(".sqr1").getBoundingClientRect();
    return Math.round(Math.pow(Math.pow((oop1.x - (50 * (Math.pow(2, 1 / 2)) / 2)) - (oop.x - (50 * (Math.pow(2, 1 / 2)) / 2)), 2) + Math.pow((oop1.y - (50 * (Math.pow(2, 1 / 2)) / 2)) - (oop.y - (50 * (Math.pow(2, 1 / 2)) / 2)), 2), 1 / 2));
}

// Math.pow(Math.pow((29 - (50 * (Math.pow(2, 1 / 2)) / 2)) - (34 - (50 * (Math.pow(2, 1 / 2)) / 2)), 2) + Math.pow((114 - (50 * (Math.pow(2, 1 / 2)) / 2)) - (14 - (50 * (Math.pow(2, 1 / 2)) / 2)), 2), 1 / 2);