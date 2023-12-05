function tinhlaixuat(){
    var Sotiengui = parseFloat(document.getElementById("Sotiengui").value);
    var Laixuat = parseFloat(document.getElementById("Laixuat").value);
    var Sothanggui = parseInt(document.getElementById("Sothanggui").value);
    var tongTien = Sotiengui;
    for (var i = 1; i <= Sothanggui; i++) {
        tongTien += tongTien * Laixuat / 100;
    }
    document.getElementById("tongTien").innerHTML = tongTien.toFixed(2);
}
