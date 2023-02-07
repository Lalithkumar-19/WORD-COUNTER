setInterval(words, 1000);

function words() {
    var text = document.getElementById("inputing").value;
    var numWords = 0;
    for (var i = 0; i < text.length; i++) {
        var Character = text[i];
        if (Character == " ") {
            numWords += 1;
        }
    }
    numWords += 1;
    document.getElementById("words")
        .value = numWords;
}
setInterval(char, 1000);

function char() {
    var count = 0;
    var jio = 0;
    var text = document.getElementById("inputing").value;
    for (var i = 0; i < text.length; i++) {
        var chara = text[i];
        if (chara == "") {
            count = count + 1;
        } else {
            jio = jio + 1;
        }


    }
    var total = jio - count;
    document.getElementById("char").value = total;
}
setInterval(sentence, 1000);

function sentence() {
    var count = 0;
    var text = document.getElementById("inputing").value;
    for (var i = 0; i < text.length; i++) {
        var chara = text[i];
        if (chara == ".") {
            count = count + 1;
        } else if (chara == "?") {
            count = count + 1;
        }
    }
    var total = count;
    document.getElementById("sentence").value = total;
}