$(document).ready(function() {
    function resetError(elementId, errorId) {
        $(errorId).html("(*)");
        $(errorId).removeClass('error');
        $(elementId).removeClass('is-invalid');
    }

    function kTraMaSV() {
        var maSV = $('#txtMa').val();
        var maReg = /^[0-9]{8}$/;
        if (maReg.test(maSV)) {
            resetError('#txtMa', '#erma');
            return true;
        } else {
            $('#erma').html("(*) Mã sinh viên phải đúng 8 chữ số");
            $('#erma').addClass('error');
            $('#txtMa').addClass('is-invalid');
            return false;
        }
    }

    function kTraHT() {
        var hoTen = $('#txtHT').val();
        var hoTenReg = /^[A-Z]{1}[a-z]+(\s[A-Z]{1}[a-z]*)+$/;
        if (hoTenReg.test(hoTen)) {
            resetError('#txtHT', '#erHT');
            return true;
        } else {
            $('#erHT').html("(*) Họ tên phải viết hoa chữ cái đầu tiên");
            $('#erHT').addClass('error');
            $('#txtHT').addClass('is-invalid');
            return false;
        }
    }

    function kTraNgaySinh() {
        var ngaySinh = $('#ngaySinh').val();
        var today = new Date();
        var checkngay = new Date(ngaySinh);
        if (checkngay < today) {
            resetError('#ngaySinh', '#erNS');
            return true;
        } else {
            $('#erNS').html("(*) Ngày sinh phải nhỏ hơn ngày hiện tại");
            $('#erNS').addClass('error');
            $('#ngaySinh').addClass('is-invalid');
            return false;
        }
    }

    function kTraQueQuan() {
        var queQuan = $('#txtQQ').val();
        var queQuanReg = /^[A-Z]{1}[a-z]+(\s[A-Z]{1}[a-z]*)+$/;
        if (queQuanReg.test(queQuan)) {
            resetError('#txtQQ', '#erQQ');
            return true;
        } else {
            $('#erQQ').html("(*) Quê quán phải viết hoa chữ cái đầu tiên");
            $('#erQQ').addClass('error');
            $('#txtQQ').addClass('is-invalid');
            return false;
        }
    }

    function kTraLop() {
        var lop = $('#txtLop').val();
        var lopReg = /^[a-zA-Z]{4,6}[0-9]{2}[a-zA-Z]{1,3}$/;
        if (lopReg.test(lop)) {
            resetError('#txtLop', '#erlop');
            return true;
        } else {
            $('#erlop').html("(*) Lớp phải đúng định dạng");
            $('#erlop').addClass('error');
            $('#txtLop').addClass('is-invalid');
            return false;
        }
    }

    $('#txtMa').blur(kTraMaSV);
    $('#txtHT').blur(kTraHT);
    $('#ngaySinh').blur(kTraNgaySinh);
    $('#txtQQ').blur(kTraQueQuan);
    $('#txtLop').blur(kTraLop);

    let count = 1;
    $('#btnSubmit').click(function(e) {
        e.preventDefault(); // Prevent form submission
        if (kTraMaSV() && kTraHT() && kTraNgaySinh() && kTraQueQuan() && kTraLop()) {
            var ma = $('#txtMa').val();
            var hoTen = $('#txtHT').val();
            var ngaySinh = $('#ngaySinh').val();
            var queQuan = $('#txtQQ').val();
            var lop = $('#txtLop').val();

            var trNew = '<tr><td>' + count++ + '</td><td>' + ma + '</td><td>' + hoTen + '</td><td>' + ngaySinh + '</td><td>' + queQuan + '</td><td>' + lop + '</td></tr>';
            $('#table').append(trNew);

            // Clear input fields
            $('#txtMa').val('');
            $('#txtHT').val('');
            $('#ngaySinh').val('');
            $('#txtQQ').val('');
            $('#txtLop').val('');
        }
    });
});