let index = 0;
let titles = ["lion-king", "shrek", "toy-story"];
let movies = titles.length-1;

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;
    if (e.keyCode == '37') {
        index--;
    }
    else if (e.keyCode == '39') {
        index++;
    }

    index = rollover(index, movies);
    $('#main').attr('src', `./assets/` + titles[index] + '.jpg');
    $('#main-left').attr('src', `./assets/` + titles[iterate(false, index, movies)] + '.jpg');
    $('#main-right').attr('src', `./assets/` + titles[iterate(true, index, movies)] + '.jpg');

    console.log(index);
}

function rollover(i, n) {
    if (i > n) {
        return 0;
    } else if (i < 0) {
        return n;
    } else {
        return i;
    }
}

function iterate(forwards, i, n) {
    if(forwards) {
        i++;
        return rollover(i, n);
    } else {
        i--;
        return rollover(i, n);
    }
}