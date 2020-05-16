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
    return newAttr;
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