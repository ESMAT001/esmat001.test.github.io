var move = "bottom";
var move2 = "right";
var move3 = "top";
var move4 = "right";
setInterval(() => {
    start(".sqr");
}, 10);
setInterval(() => {
    start1(".sqr1");
}, 22);
var start = (clas) => {
    var obj = document.querySelector(clas);
    var x = obj.getBoundingClientRect().x;
    var y = obj.getBoundingClientRect().y;
    var num = 1;
    var width = window.innerWidth;
    var height = window.innerHeight;

    if (y == 0) {
        move = "bottom";
    } else if (y == height - 100) {
        move = "top";
    } else if (x == 0) {
        move2 = "right";
    } else if (x == width - 100) {
        move2 = "left";
    }
    newMove(move, obj, num);
    newMove(move2, obj, num);
}
var start1 = (clas) => {
    var obj = document.querySelector(clas);
    var x = obj.getBoundingClientRect().x;
    var y = obj.getBoundingClientRect().y;
    var num = 1;
    var width = window.innerWidth;
    var height = window.innerHeight;

    if (y == 0) {
        move3 = "bottom";
    } else if (y == height - 100) {
        move3 = "top";
    } else if (x == 0) {
        move4 = "right";
    } else if (x == width - 100) {
        move4 = "left";
    }
    newMove(move3, obj, num);
    newMove(move4, obj, num);
}
var newMove = (p, obj, num) => {
    var top;
    var bottom;
    var left;
    var right;
    top = true;
    bottom = true;
    left = true;
    right = true;
    switch (p) {
        case "top":
            if (top) {
                p = "top";
                var position = positionOfCircle(obj, p);
                var rest = RestOFthePosition(obj, p);
                obj.setAttribute("style", p + ":" + (position - num) + "px;" + rest);
            }
            break;
        case "bottom":
            if (bottom) {
                p = "top";
                var position = positionOfCircle(obj, p);
                var rest = RestOFthePosition(obj, p);
                obj.setAttribute("style", p + ":" + (position + num) + "px;" + rest);
            }
            break;
        case "left": //left
            if (left) {
                p = "left";
                var position = positionOfCircle(obj, p);
                var rest = RestOFthePosition(obj, p);
                obj.setAttribute("style", p + ":" + (position - num) + "px;" + rest);
            }
            break;
        case "right": //right
            if (right) {
                p = "left";
                var position = positionOfCircle(obj, p);
                var rest = RestOFthePosition(obj, p);
                obj.setAttribute("style", p + ":" + (position + num) + "px;" + rest);
            }
            break;
        default:
            break;
    }
}