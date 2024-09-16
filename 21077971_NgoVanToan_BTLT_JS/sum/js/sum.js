function calcSum() {
    value1 = parseInt(document.getElementById("value1").value);
    value2 = parseInt(document.getElementById("value2").value);
    sum = value1 + value2;

    document.getElementById("result").innerHTML = "Tổng của " + value1 + " + " + value2 + " là: " + sum;
}