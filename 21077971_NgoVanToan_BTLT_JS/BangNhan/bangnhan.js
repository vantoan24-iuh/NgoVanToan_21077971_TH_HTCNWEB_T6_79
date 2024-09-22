function bangNhan() {
    // var n = prompt("Nhập số n: ");
    var result = 0;
    for (var i = 2; i <= 10; i++) {
        for (var j = 1; j <= 10; j++) {
            result = i * j;
            document.write(i + " * " + j + " = " + result + "<br>");
        }
        document.write("<br>");
    }
}