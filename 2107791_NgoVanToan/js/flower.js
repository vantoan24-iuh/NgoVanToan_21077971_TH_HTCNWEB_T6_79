$(document).ready(function() {

    function kTraHoTen() {
        var hoten = $("#hoten").val();
        //  Có ít nhất 2 từ và ký tự đầu tiên của mỗi từ phải được viết hoa. Thiết lập giá trị mặc định là Họ tên SV ví dụ: Tran Anh Dung
        var reg = /^[A-Z][a-z]+\s[A-Z][a-z]+\s[A-Z][a-z]+$/;
        if (hoten == "") {
            $("#errHoTen").html("Họ tên không được để trống");
            return false;
        }
        if (!reg.test(hoten)) {
            $("#errHoTen").html("Họ tên không hợp lệ");
            return false;
        }
        $("#errHoTen").html("");
        return true;
    }
    $("#hoten").blur(kTraHoTen);


    function kTraSDT() {
        var sdt = $("#sdt").val();
        var reg = /^0\d{3}\.\d{3}\.\d{3}$/;
        if (sdt == "") {
            $("#errSDT").html("Số điện thoại không được để trống");
            return false;
        }
        if (!reg.test(sdt)) {
            $("#errSDT").html("Số điện thoại phải đụng định dạng : 0xxx.xxx.xxx");
            return false;
        }
        $("#errSDT").html("");
        return true;
    }

    $("#sdt").blur(kTraSDT);

    function kTraNgayDat() {
        var ngaydat = $("#ngay").val();
        var date = new Date(ngaydat);
        var now = new Date();
        if (ngaydat == "") {
            $("#errDate").html("Ngày đặt không được để trống");
            return false;
        }
        if (date < now) {
            $("#errDate").html("Ngày đặt phải sau ngày hiện tại");
            return false;
        }
        $("#errDate").html("");
        return true;
    }

    $("#ngay").blur(kTraNgayDat);


    function kTraEmail() {
        var email = $("#email").val();
        var reg = /^[a-zA-Z0-9!@#$%^&*()_+]{3,}@iuh\.edu\.vn$/;

        if (email == "") {
            $("#errEmail").html("Email không được để trống");
            return false;
        }
        if (!reg.test(email)) {
            $("#errEmail").html("Email không hợp lệ");
            return false;
        }
        $("#errEmail").html("");
        return true;
    }

    $("#email").blur(kTraEmail);

    $("#btnDatHang").click(function() {
        if (kTraHoTen() || kTraSDT() || kTraNgayDat() || kTraEmail()) {
            var hoten = $("#hoten").val();
            var sdt = $("#sdt").val();
            var ngaydat = $("#ngay").val();
            var email = $("#email").val();
            var chonHoa = $("#chonHoa option:selected").text();
            // Lấy giá trị từ radio button đã chọn
            var thanhToan = $("input[name='chon']:checked").val(); // Lấy giá trị từ radio button

            if (!thanhToan) {
                alert("Bạn chưa chọn loại thanh toán!");
                return; // Dừng lại nếu chưa chọn loại thanh toán
            }

            var count = 1;
            var tablenew = "<tr><td>" + count++ + "</td><td>" + hoten + "</td><td>" + sdt + "</td><td>" + ngaydat + "</td><td>" + email + "</td><td>" + chonHoa + "</td></tr>" + thanhToan + "</td></tr>";
            $("#table").append(tablenew);

            $("#hoten").val("");
            $("#sdt").val("");
            $("#ngay").val("");
            $("#email").val("");
            $("#chonHoa").val("");
            $("input[name='chon']").prop("checked", false);
        }
    });
});