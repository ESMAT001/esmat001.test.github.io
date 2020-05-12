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