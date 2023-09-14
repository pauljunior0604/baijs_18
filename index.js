// Viết chương trình cho phép người dùng thêm  số vào mảng 

var arrNumber = []

document.getElementById('btnNhapSo').onclick = function() {
    //input Number
    var iSo = Number(document.getElementById('nhapSo_1').value);
    //output number
    var ketQua = 0;
    //process
    arrNumber.push(iSo);

    ketQua = '['+ arrNumber +']';
    //in mảng ra gd

    document.getElementById('arrNumber').innerHTML = ketQua;

}

//Bài tập 1: Tổng số dương các mảng


document.getElementById('btnTinhTong').onclick = function () {
    //output number
    var sum = 0;
    //process
    for (var i = 0; i < arrNumber.length; i++){
        if (arrNumber[i]>0){
            sum += arrNumber[i];
        }
       
    }
    document.getElementById('ketQua_b1').innerHTML = 'Tổng số dương: ' + sum;
}

//Bài Tập 2: Đếm số dương

document.getElementById('btnDemSo').onclick = function () {
    //output number
    var demSo = 0;
    //process
    for (var i = 0; i < arrNumber.length; i++){
        if (arrNumber[i] > 0)
        demSo++
    }
    document.getElementById('ketQua_b2').innerHTML = 'Số dương: ' + demSo;
}

//Bài tập 3: Tìm số nhỏ nhất

document.getElementById('btnNhoNhat').onclick = function () {
    //output Number
    var min = arrNumber[0];
    //process
    for (var i = 0; i < arrNumber.length; i++){
        if(arrNumber[i] < min){
            min = arrNumber[i];
        }
    }
    document.getElementById('ketQua_b3').innerHTML = 'Số nhỏ nhất: ' + min;
}

//Bài tập 4: Tìm số dương nhỏ nhất

document.getElementById('btnSoMin').onclick = function () {
    var soM = -1;
    for (var i = 0; i < arrNumber.length; i++) {
        if ((soM<0) && (arrNumber[i] > soM)&& (arrNumber[i]>0)) {
            soM = arrNumber[i];
        }else {
            if((soM > arrNumber[i])&& (arrNumber[i]>0)){
                soM = arrNumber[i];
            }
        }
    }
    document.getElementById('ketQua_b4').innerHTML = "Số dương nhỏ nhất là : " + soM;
}


//bài tập 5: Tìm số chẵn cuối cùng

document.getElementById('btnSoChan').onclick = function () {
    //output number
    var soC = 0;
    //process
    for (var i = 0; i < arrNumber.length;i++) {
        if (arrNumber[i] % 2 == 0){
            soC = arrNumber[i];
        }
    }
    document.getElementById('ketQua_b5').innerHTML = 'Số chẵn cuối cùng: ' + soC;
}



document.getElementById('btnDoiCho').onclick = function () {
    var viTri1 = Number(document.getElementById('viTri1').value)
    var viTri2 = Number(document.getElementById('viTri2').value)
    var temp = 0;
    temp = arrNumber[viTri1]
    arrNumber[viTri1] = arrNumber[viTri2];
    arrNumber[viTri2] = temp;
    document.getElementById('ketQua_b6').innerHTML = '['+ arrNumber +']';
}



//bài tập 7: Sắp xếp tăng dần cùng
 
document.getElementById('btnSapXep').onclick= function () {
    //process
    var sapXep = arrNumber;
    sapXep.sort();
   

    
    document.getElementById("ketQua_b7").innerHTML = "Mảng sau khi sắp xếp: " + '['+ sapXep +']';

}

//bài tập 8: Tìm số nguyên tố đầu tiên

document.getElementById('btnSoNguyenTo').onclick = function(){
    var ketQua = '';
    // var songuyento = arrNumber[0];
    for(var i=0; i<arrNumber.length; i++){
        var kiemTra = kiemTraSoNguyenTo(arrNumber[i]);
        if(kiemTra === true){ //Nếu kiemTra =  true
            ketQua ='Số nguyên tố đầu tiên: ' + arrNumber[i];
            break;
        }
        else{
            ketQua = "Không có số nguyên tố !"
        }
    }
    document.getElementById('ketQua_b8').innerHTML = ketQua;

}
//Viết hàm kiểm tra số nguyên tố
function kiemTraSoNguyenTo(id1) {//input 1 số 5
    //Biến kiểm tra là output: Đúng là số nguyên tố => true, sai là false
    var kiemTra = true;
    if(id1<=1){
        kiemTra = false;
    }
    for (var uoc = 2; uoc <= id1 / 2; uoc++) {
        //Mỗi lần duyệt qua 1 ước thì kiểm tra ước đó 
        if (id1 % uoc == 0) {
            // ước lớn hơn 3
            kiemTra = false;
            break;
        }
    }
    return kiemTra;
}

//Bài tập 9  đếm số nguyên

var arrNumber1 = [];
document.getElementById('btnNhapSo1').onclick = function () {
    var themSo1 = Number(document.getElementById('themSo1').value);
    var ketQuaThemSo1 = '';
    arrNumber1.push(themSo1);
    ketQuaThemSo1 = "[" + arrNumber1 + "]";
    document.getElementById('ketQua_b91').innerHTML = ketQuaThemSo1;
}
document.getElementById('btnDemSoNguyen').onclick = function () {
    var dem = 0;
    for (var soHang = 0; soHang <= arrNumber1.length; soHang++) {
        if (Number.isInteger(arrNumber1[soHang]) == true) {
            dem++
        }
    }
    document.getElementById('ketQua_b9').innerHTML = "Mảng có " + dem + " số nguyên";
}



//bài tập 10 : so sánh số âm và số dương

document.getElementById('btnSoSanh').onclick = function() {
    //output string
   var ketQua_b10 = '';
    
    for (var soAm = 0, soDuong =0, i = 0; i < arrNumber.length; i++) {
        if(arrNumber[i] > 0) {
            soDuong++;
            
        }else if (arrNumber[i] < 0) {
            soAm++;''
            
        }
    
    }
    if(soAm>soDuong){
        ketQua_b10 = 'Số âm > Số dương: '
    } else if (soDuong>soAm){
        ketQua_b10 ='Số dương > Số âm '
    }else {
        ketQua_b10 ='Số âm = Số dương'
    }
    document.getElementById('ketQua_b10').innerHTML = ketQua_b10;
}