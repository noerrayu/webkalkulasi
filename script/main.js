function calc() {
    var n1 = parseFloat(document.getElementById('n1').value);
    var n2 = parseFloat(document.getElementById('n2').value);

    var oper = document.getElementById('operators').value;

    if (oper === '+') {
        document.getElementById('result').value = n1 + n2;
    }

    if (oper === '-') {
        document.getElementById('result').value = n1 - n2;
    }

    if (oper === '/') {
        document.getElementById('result').value = n1 / n2;
    }

    if (oper === 'x') {
        document.getElementById('result').value = n1 * n2;
    }

    var num = document.getElementById('result').value;

    if (num == 0) {
        document.getElementById("result").style.backgroundColor = 'blue';
    } else if ((num % 2) !== 0) {
        document.getElementById("result").style.backgroundColor = 'yellow';
    } else if ((num % 1) == 0) {
        document.getElementById("result").style.backgroundColor = 'green';
    }
}

// var i = 0;
// $(".result").each(function (i) {

//     if (i % 2 == 0) {
//         $(this).addClass("redBox");
//     } else
//         $(this).addClass("whiteBox")

// });