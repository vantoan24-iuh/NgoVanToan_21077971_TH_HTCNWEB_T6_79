$(document).ready(function() {
    function resetError(elementId, errorId) {
        $(errorId).html("(*)");
        $(errorId).removeClass('error');
        $(elementId).removeClass('is-invalid');
    }

    function kTraMaSV() {
        var maSV = $('#txtMaSV').val();
        var masvReg = /^03-\d{8}$/;
        if (masvReg.test(maSV)) {
            resetError('#txtMaSV', '#errMaSV');
            return true;
        } else {
            $('#errMaSV').html("(*) Mã sinh viên phai có dạng: 03-34567890");
            $('#errMaSV').addClass('error');
            $('#txtMaSV').addClass('is-invalid');
            return false;
        }
    }


    function kTraHoTen() {
        var hoten = $('#txtHoTen').val();
        var hotenReg = /^[A-Z][a-z]+\s[A-Z][a-z]+\s[A-Z][a-z]+$/;
        if (hotenReg.test(hoten)) {
            resetError('#txtHoTen', '#errHoTen');
            return true;
        } else {
            $('#errHoTen').html("(*) Họ tên phai viết hoa chữ cái đầu tiên và không chứa số");
            $('#errHoTen').addClass('error');
            $('#txtHoTen').addClass('is-invalid');
            return false;
        }
    }

    function ktraEmail() {
        var email = $('#email').val();
        // Địa chỉ Email theo mẫu có phần đuôi: @iuh.edu.vn
        var emailReg = /^[A-Za-z0-9]+@iuh.edu.vn$/;
        if (emailReg.test(email)) {
            resetError('#email', '#errEmail');
            return true;
        } else {
            $('#errEmail').html("(*) Email phai có dạng: @iuh.edu.vn");
            $('#errEmail').addClass('error');
            $('#email').addClass('is-invalid');
            return false;
        }
    }

    function kTraDichVu() {
        var dichvu = $('#dichvu').val();

        if (dichvu === '' || dichvu === '0') {
            $('#dichvu').addClass('is-invalid');
            $('#errDichVu').html('Vui lòng chọn dịch vụ.');
            return false;
        } else {
            $('#dichvu').removeClass('is-invalid');
            $('#errDichVu').html('');
            return true;
        }
    }

    $('#dichvu').change(function() {
        if (kTraDichVu()) {
            // Nếu dịch vụ hợp lệ, lấy giá trị đã chọn
            var selectedPrice = $(this).val();
            // Gán giá trị vào trường giá tiền
            $('#txtgia').val(selectedPrice);
        } else {
            // Nếu không hợp lệ, xóa giá trị trong ô giá tiền
            $('#txtgia').val('');
        }
    });

    function kTraDoDung() {
        var total = 0;
        // Lấy tất cả checkbox có id là 'check'
        $('input[id="check"]:checked').each(function() {
            total += parseInt($(this).val());
        });
        $('#txtTienDoDung').val(total);

        return total > 0;
    }

    function tinhTongTien() {
        // Lấy giá trị tiền dịch vụ và tiền đồ dùng
        var tienDichVu = parseInt($('#txtgia').val()) || 0; // Nếu không có giá trị thì mặc định là 0
        var tienDoDung = parseInt($('#txtTienDoDung').val()) || 0;

        // Tính tổng tiền
        var tongTien = tienDichVu + tienDoDung;

        // Cập nhật tổng tiền vào ô txttong
        $('#txttong').val(tongTien);
    }
    $('input[id="check"]').change(function() {
        kTraDoDung();
        tinhTongTien();
    });

    $('#dichvu').change(function() {
        kTraDichVu();
        tinhTongTien(); // Tính lại tổng tiền khi thay đổi dịch vụ
    });

    $('#txtMaSV').blur(kTraMaSV);
    $('#txtHoTen').blur(kTraHoTen);
    $('#email').blur(ktraEmail);
    $('#dichvu').blur(kTraDichVu);
    $('#check').blur(kTraDoDung);

    let count = 1
    $('#btn').click(function() {
        if (kTraMaSV() && kTraHoTen() && ktraEmail() && kTraDichVu() && kTraDoDung()) {
            // Lấy các giá trị từ form
            var maSV = $('#txtMaSV').val();
            var hoten = $('#txtHoTen').val();
            var email = $('#email').val();
            var tdv = $('#txtgia').val();
            var tdd = $('#txtTienDoDung').val();
            var tong = $('#txttong').val();

            // Tạo hàng mới và thêm vào bảng
            var tableNew = '<tr><td>' + count++ + '</td><td>' + maSV + '</td><td>' + hoten + '</td><td>' + email + '</td><td>' + tdv + '</td><td>' + tdd + '</td><td>' + tong + '</td></tr>';
            $('#table tbody').append(tableNew);

            // Reset form sau khi thêm thành công
            $('#txtMaSV').val('');
            $('#txtHoTen').val('');
            $('#email').val('');
            $('#dichvu').val('');
            $('#txtgia').val('');
            $('#txtTienDoDung').val('');
            $('#txttong').val('');
        }
    });


});