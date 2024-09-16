function checkLeapYear() {
    var year = prompt("Nhập năm cần kiểm tra: ");

    if (!isNaN(year)) {
        if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
            document.write("Năm " + year + " là năm nhuận");
        } else {
            document.write("Năm " + year + " không phải là năm nhuận");
        }
    } else {
        document.write("Vui lòng nhập số hợp lệ");
    }


}