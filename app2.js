setInterval(() => {
    var num;
    random = Math.ceil((Math.random()) * 4);
    switch (random) {
        case 1:
            num = 100;
            break;
        case 2:
            num = 115;
            break;
        case 3:
            num = 119;
            break;
        case 4:
            num = 97;
            break;
    }
    console.log(random)
    move(num);

}, 1000)