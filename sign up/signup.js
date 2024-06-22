var button = document.getElementById("button");
button.addEventListener("click", getvalue);
function getvalue() {
    let name = document.getElementById("name").value;
    let gmail = document.getElementById("gmail").value;
    let pass = document.getElementById("pass").value;
    let confirmPass = document.getElementById("confirm-pass").value;
    let sdt = document.getElementById("sdt").value;
    if (name === "" && gmail === "" && pass === "" && confirmPass === "" && sdt === "") {
        alert("Vui lòng điền đầy đủ thông tin");
    } else if (pass !== confirmPass) {
        alert("Mật khẩu xác nhận không khớp");
    } else {
        var dangky = {
            name: name,
            gmail: gmail,
            sdt: sdt,
            pass: pass
        };
        var json = JSON.stringify(dangky);
        localStorage.setItem(name, json);
        alert("Tạo tài khoản thành công");
        location.href = "../sign in/signin.html";
    }
}