document.addEventListener("keypress", (e) => {
    var obj = document.querySelector(".sqr");
    var top = obj.getBoundingClientRect().top;
    var bottom = obj.getBoundingClientRect().bottom;
    var left = obj.getBoundingClientRect().left;
    var right = obj.getBoundingClientRect().right;
    var num = 30;
    var width = window.innerWidth;
    var height = window.innerWidth;
    console.log(height);
    var p;
    switch (e.keyCode) {
        case 119:
            p = "top";
            var xx = funb(obj, p);
            var xy = fun(obj, p);
            obj.setAttribute("style", p + ":" + (xy - num) + "px;" + xx);
            console.log(xx + '   a');
            console.log(xy + 'aaaaa ');
            break
        case 115:
            p = "top";
            var xx = funb(obj, p);
            var xy = fun(obj, p);
            obj.setAttribute("style", p + ":" + (xy + num) + "px;" + xx);
            console.log(xx);
            console.log(xy);
            break;
        case 97:
            p = "left";
            var xx = funb(obj, p);
            var xy = fun(obj, p);
            obj.setAttribute("style", p + ":" + (xy - num) + "px;" + xx);
            break;
        case 100:
            p = "left";
            var xx = funb(obj, p);
            var xy = fun(obj, p);
            obj.setAttribute("style", p + ":" + (xy + num) + "px;" + xx);
            break;
    }
})
var fun = (obj, p) => {
    var str = obj.getAttribute("style");
    var newStr = str.split(";");
    var newp = "";
    for (let i = 0; i < newStr.length; i++) {
        var x = newStr[i].split(":")
        if (x[0] == p) {
            newp = parseInt(x[1]);
        }
    }
    console.log(newp);
    return newp;
}
var funb = (obj, p) => {
    var str = obj.getAttribute("style");
    var newStr = str.split(";");
    var newp = "";
    for (let i = 0; i < newStr.length - 1; i++) {
        var x = newStr[i].split(":")
        if (x[0] == p) {

        } else {
            newp += newStr[i] + ";";
        }
    }
    // console.log(newp);
    return newp;
}