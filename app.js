document.addEventListener("keypress", (e) => { move(e.keyCode); });
var move = (e) => {
    var obj = document.querySelector(".sqr");
    var x = obj.getBoundingClientRect().x;
    var y = obj.getBoundingClientRect().y;
    var num = 10;
    var width = window.innerWidth;
    var height = window.innerHeight;
    var top;
    var bottom;
    var left;
    var right;
    if (x < 30 && y < 30) { //top left
        top = false;
        bottom = true;
        left = false;
        right = true;
    } else if (x >= width - 120 && y < 30) { //top right
        top = false;
        bottom = true;
        left = true;
        right = false;
    } else if (x < 30 && y >= height - 120) { //bottom left
        top = true;
        bottom = false;
        left = false;
        right = true;
    } else if (x >= width - 120 && y >= height - 120) { //bottom right
        top = true;
        bottom = false;
        left = true;
        right = false;
    } else if (y < 30) { //top
        top = false;
        bottom = true;
        left = true;
        right = true;
    } else if (y >= height - 120) { //bottom
        top = true;
        bottom = false;
        left = true;
        right = true;
    } else if (x < 30) { //left
        top = true;
        bottom = true;
        left = false;
        right = true;
    } else if (x >= width - 120) { //right
        top = true;
        bottom = true;
        left = true;
        right = false;
    } else {
        top = true;
        bottom = true;
        left = true;
        right = true;
    }
    console.log("top=" + top + ", bottom=" + bottom + ", left=" + left + " ,right=" + right);
    var p;
    console.log(e.keyCode + "key");
    switch (e) {
        case 119:
            if (top) {
                p = "top";
                var position = positionOfCircle(obj, p);
                var rest = RestOFthePosition(obj, p);
                obj.setAttribute("style", p + ":" + (position - num) + "px;" + rest);
                console.log(position + "--top--" + rest);
            }
            break;
        case 115:
            if (bottom) {
                p = "top";
                var position = positionOfCircle(obj, p);
                var rest = RestOFthePosition(obj, p);
                obj.setAttribute("style", p + ":" + (position + num) + "px;" + rest);
                console.log(position + "--bottom--" + rest);
            }
            break;
        case 97: //left
            if (left) {
                p = "left";
                var position = positionOfCircle(obj, p);
                var rest = RestOFthePosition(obj, p);
                obj.setAttribute("style", p + ":" + (position - num) + "px;" + rest);
                console.log(position + "-right---" + rest);
            }
            break;
        case 100: //right
            if (right) {
                p = "left";
                var position = positionOfCircle(obj, p);
                var rest = RestOFthePosition(obj, p);
                obj.setAttribute("style", p + ":" + (position + num) + "px;" + rest);
                console.log(position + "-left---" + rest);
            }
            break;
    }
}
var positionOfCircle = (obj, position) => {
    var attr = obj.getAttribute("style");
    var str = attr.split(";");
    var newAttr = "";
    for (let i = 0; i < str.length; i++) {
        var x = str[i].split(":")
        if (x[0] == position) {
            newAttr = parseInt(x[1]);
        }
    }
    console.log(newAttr);
    return newAttr;
}

var RestOFthePosition = (obj, p) => {
    var attr = obj.getAttribute("style");
    var str = attr.split(";");
    var newAttr = "";
    for (let i = 0; i < str.length - 1; i++) {
        var x = str[i].split(":")
        if (x[0] == p) {} else {
            newAttr += str[i] + ";";
        }
    }
    // console.log(newp);
    return newAttr;
}