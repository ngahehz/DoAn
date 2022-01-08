function main(){
    window.location="index.html";
}
/*BIEN TOAN CUC*/
var urlTemp = "../../BaiTap/public_html/img";
var numberOfDelProduct=-1;
var numberOfFixProduct=-1;
var numberOfCartProduct=-1;
let locTemp=[];
let finding=[];
let TimKiemSanPham=[];

/* NUT CLOSE O CAC TRANG */
function closedWarningIndex(){
    document.getElementById("warningindex").style.display="none";
    document.getElementById("warningindex2").style.display="none";
    document.getElementById("warningindex3").style.display="none";
    document.getElementById("warningindex4").style.display="none";
    document.getElementById("modal2").style.display="none";
}

function closedFrom1(){
    document.getElementById("modal1").style.display="none";
    document.getElementById("form1").style.display="none";
}

function closedFrom2(){
    document.getElementById("modal1").style.display="none";
    document.getElementById("form2").style.display="none";
}

function closedInfoIndex(){
    document.getElementById("modal1").style.display="none";
    document.getElementById("info").style.display="none";
}

function closedGioHang(){
    document.getElementById("modal1").style.display="none";
    document.getElementById("cart").style.display="none";
    document.getElementById("cartls").style.display="none";
}

function AcpPushIntoCart(){
    closedWarningIndex();
    closedInfoIndex();
    signIn();
}

function closedAdmin(){
    document.getElementById("modal").style.display="none";
    document.getElementById("warning").style.display="none";
    document.getElementById("warning1").style.display="none";
    document.getElementById("fixProduct").style.display="none";
}

function closedAdminForm(){
    document.getElementById("modal").style.display="none";
    document.getElementById("form2").style.display="none";
}

/*HIEN THI LEN CAC MODAL*/
function signIn(){
    document.getElementById("modal1").style.display="block";
    document.getElementById("form1").style.display="block";
}

function signUp(){
    document.getElementById("form1").style.display="none";
    document.getElementById("form2").style.display="block";
}

function clickInfoBS(i){
    document.getElementById("modal1").style.display="block";
    document.getElementById("info").style.display="block";
    document.getElementById("left_info").innerHTML="<img src='"+bestSelling[i].img+"'alt='Lỗi hình òi'/>";
    document.getElementById("r1_info").innerHTML=bestSelling[i].name;
    document.getElementById("r2_info").innerHTML="Giá tiền:"+PhienDichGiaTien(bestSelling[i].price)+"<br>Tác giả: "+bestSelling[i].author+"<br>Thể loại: "+PhienDichRaTheLoai(bestSelling[i].cate);
    document.getElementById("r3_info").innerHTML="<button type='button' onclick='PushIntoCart("+0+","+i+",0)'>Thêm vào giỏ hàng</button>";
}

function clickInfoThieuNhi(z,i){
    var tempArray;
    tempArray=chunkArray(thieunhiArray);
    document.getElementById("modal1").style.display="block";
    document.getElementById("info").style.display="block";
    document.getElementById("left_info").innerHTML="<img src='"+tempArray[z-1][i].img+"'alt='Lỗi hình òi'/>";
    document.getElementById("r1_info").innerHTML=tempArray[z-1][i].name;
    document.getElementById("r2_info").innerHTML="Giá tiền:"+PhienDichGiaTien(tempArray[z-1][i].price)+"<br>Tác giả: "+tempArray[z-1][i].author+"<br>Thể loại: "+PhienDichRaTheLoai(tempArray[z-1][i].cate);
    document.getElementById("r3_info").innerHTML="<button type='button' onclick='PushIntoCart("+z+","+i+",1)'>Thêm vào giỏ hàng</button>";
    console.log(document.getElementById("r3_info").innerHTML);
}

function clickInfoTrinhTham(z,i){
    var tempArray;
    tempArray=chunkArray(trinhthamArray);
    document.getElementById("modal1").style.display="block";
    document.getElementById("info").style.display="block";
    document.getElementById("left_info").innerHTML="<img src='"+tempArray[z-1][i].img+"'alt='Lỗi hình òi'/>";
    document.getElementById("r1_info").innerHTML=tempArray[z-1][i].name;
    document.getElementById("r2_info").innerHTML="Giá tiền:"+PhienDichGiaTien(tempArray[z-1][i].price)+"<br>Tác giả: "+tempArray[z-1][i].author+"<br>Thể loại: "+PhienDichRaTheLoai(tempArray[z-1][i].cate);
    document.getElementById("r3_info").innerHTML="<button type='button' onclick='PushIntoCart("+z+","+i+",2)'>Thêm vào giỏ hàng</button>";
}

function clickInfoTinhCam(z,i){
    var tempArray;
    tempArray=chunkArray(tinhcamArray);
    document.getElementById("modal1").style.display="block";
    document.getElementById("info").style.display="block";
    document.getElementById("left_info").innerHTML="<img src='"+tempArray[z-1][i].img+"'alt='Lỗi hình òi'/>";
    document.getElementById("r1_info").innerHTML=tempArray[z-1][i].name;
    document.getElementById("r2_info").innerHTML="Giá tiền:"+PhienDichGiaTien(tempArray[z-1][i].price)+"<br>Tác giả: "+tempArray[z-1][i].author+"<br>Thể loại: "+PhienDichRaTheLoai(tempArray[z-1][i].cate);
    document.getElementById("r3_info").innerHTML="<button type='button' onclick='PushIntoCart("+z+","+i+",3)'>Thêm vào giỏ hàng</button>";
}

function clickInfoTruyenTranh(z,i){
    var tempArray;
    tempArray=chunkArray(truyentranhArray);
    document.getElementById("modal1").style.display="block";
    document.getElementById("info").style.display="block";
    document.getElementById("left_info").innerHTML="<img src='"+tempArray[z-1][i].img+"'alt='Lỗi hình òi'/>";
    document.getElementById("r1_info").innerHTML=tempArray[z-1][i].name;
    document.getElementById("r2_info").innerHTML="Giá tiền:"+PhienDichGiaTien(tempArray[z-1][i].price)+"<br>Tác giả: "+tempArray[z-1][i].author+"<br>Thể loại: "+PhienDichRaTheLoai(tempArray[z-1][i].cate);
    document.getElementById("r3_info").innerHTML="<button type='button' onclick='PushIntoCart("+z+","+i+",4)'>Thêm vào giỏ hàng</button>";
}

function clickInfoTimKiem(z,i){
    var tempArray=JSON.parse(localStorage.getItem('finding'));
    tempArray=chunkArray(tempArray);
    document.getElementById("modal1").style.display="block";
    document.getElementById("info").style.display="block";
    document.getElementById("left_info").innerHTML="<img src='"+tempArray[z-1][i].img+"'alt='Lỗi hình òi'/>";
    document.getElementById("r1_info").innerHTML=tempArray[z-1][i].name;
    document.getElementById("r2_info").innerHTML="Giá tiền:"+PhienDichGiaTien(tempArray[z-1][i].price)+"<br>Tác giả: "+tempArray[z-1][i].author+"<br>Thể loại: "+PhienDichRaTheLoai(tempArray[z-1][i].cate);
    document.getElementById("r3_info").innerHTML="<button type='button' onclick='PushIntoCart("+z+','+i+",5)'>Thêm vào giỏ hàng</button>";
}

function xoaSanPhamOGioHang(i){
    document.getElementById("modal2").style.display="block";
    document.getElementById("warningindex2").style.display="flex";
    numberOfCartProduct=i;
}

function WarningThanhToan(){
    document.getElementById("modal2").style.display="block";
    document.getElementById("warningindex3").style.display="flex";
}

function clickLogout(){
    document.getElementById("modal2").style.display="block";
    document.getElementById("warningindex4").style.display="flex";
}

function Warning(i){
    document.getElementById("modal").style.display="block";
    document.getElementById("warning").style.display="flex";
    numberOfDelProduct=i;
}

function WarningLogoutAdmin(){
    document.getElementById("modal").style.display="block";
    document.getElementById("warning1").style.display="flex";
}

function fixProduct(i){
    var tempArray = JSON.parse(localStorage.getItem('product'));
    document.getElementById("modal").style.display="block";
    document.getElementById("fixProduct").style.display="block";
    document.getElementById("left_fix").innerHTML="<img src='"+tempArray[i].img+"'alt='Lỗi hình òi'/>";
    document.getElementById("idnamesp").placeholder=tempArray[i].name;
    document.getElementById("idcate").value=tempArray[i].cate;
    document.getElementById("idauthor").placeholder=tempArray[i].author;
    document.getElementById("idprice").placeholder=PhienDichGiaTien(tempArray[i].price);
    document.getElementById("idsp").placeholder=tempArray[i].productid;
    document.getElementById("idsc").placeholder=tempArray[i].type;
    numberOfFixProduct=i;
}

function ModalAddProduct (){
    document.getElementById("modal").style.display="block";
    document.getElementById("fixProduct").style.display="block";
    document.getElementById("r_f6").innerHTML='<input type="file" id="file"/><label for="file">Choose a file</label>'
                            +'<input type="button" id="showimage" onclick="showImage()" value="ok"/>'
                            +'<input type="button" id="fixing" onclick="AcpAddProduct()" value="Thêm"/>';
    document.getElementById("left_fix").innerHTML="No img had been choosen";
    document.getElementById("idnamesp").placeholder="product's name";
    document.getElementById("idauthor").placeholder="author";
    document.getElementById("idprice").placeholder="price";
    document.getElementById("idsp").placeholder="id product";
    document.getElementById("idsc").placeholder="Special";
    //console.log(document.getElementById("fixing"));
}

function ModalAddUser(){
    document.getElementById("modal").style.display="block";
    document.getElementById("form2").style.display="block";
}

/*HIEN THI GIAO DIEN*/

function HienThiBestSelling(){
    console.log(bestSelling);
    var t=document.getElementsByClassName("sp");
    for(var i=0;i<t.length;i++){
        console.log(bestSelling[i].img);
        t[i].innerHTML = '<img src="'+bestSelling[i].img+'" alt="Lỗi hình òi"/>'
                              + '<div class="infobs" onclick="clickInfoBS('+i+')">'+bestSelling[i].name+'</br>'+PhienDichGiaTien(bestSelling[i].price)+'</div>';
    }
}

/*XU LY MOI THU*/

function PushIntoCart(z,i,x){
    if(JSON.parse(localStorage.getItem('activeId'))===-1){
        document.getElementById("modal2").style.display="block";
        document.getElementById("warningindex").style.display="flex";
    }
    else  {
        var tempArray;
        switch(x){
            case 0:
                tempArray=bestSelling;
                createCartAndPushProduct(tempArray[i]);
                break;
            case 1:
                tempArray=chunkArray(thieunhiArray);
                createCartAndPushProduct(tempArray[z-1][i]);
                break;
            case 2:
                tempArray=chunkArray(trinhthamArray);
                createCartAndPushProduct(tempArray[z-1][i]);
                break;
            case 3:
                tempArray=chunkArray(tinhcamArray);
                createCartAndPushProduct(tempArray[z-1][i]);
                break;
            case 4:
                tempArray=chunkArray(truyentranhArray);
                createCartAndPushProduct(tempArray[z-1][i]);
                break;
            case 5:
                var tempArray=JSON.parse(localStorage.getItem('finding'));
                tempArray=chunkArray(tempArray);
                createCartAndPushProduct(tempArray[z-1][i]);
                break;
        }
        alert("Đã bỏ đồ vô giỏ hàng");
    }
}

function xemGioHang(){
    if(JSON.parse(localStorage.getItem('activeId'))===-1){
        document.getElementById("modal2").style.display="block";
        document.getElementById("warningindex").style.display="flex";
        document.getElementById("warningtext").innerHTML="Đăng nhập để xem giỏ hàng bạn nhé !";
    }
    else {
        var temp=JSON.parse(localStorage.getItem('cart'));
        var s="";
        document.getElementById("modal1").style.display="block";
        document.getElementById("cart").style.display="block";
        for(var i=0;i<temp.length;i++){
            s=s+'<div class="mini_info"><div class="info1">'+(i+1)+'</div><div class="info2"><img src="'+temp[i].img+
                    '" alt="Lỗi hình òi"/></div><div class="info3">'+temp[i].name+
                    '</div><div class="info4"><input min="1" class="ip4" type="number" value="'+temp[i].soluong+'" onchange="tinhTien('+(i+1)+','+temp[i].price+')"></div><div class="info5">'+
                    PhienDichGiaTien(temp[i].price*temp[i].soluong)+'</div><div class="info6"><input type="button" id="del" value="Xóa" onclick="xoaSanPhamOGioHang('+i+')"/></div> </div>';
        }
        document.getElementById("big_info").innerHTML=s;
        document.getElementById("tongtien").innerHTML=PhienDichGiaTien(tongTien());
    }
}

function xemLichSu(){
    var tempId=JSON.parse(localStorage.getItem('activeId'));
    document.getElementById("modal1").style.display="block";
    document.getElementById("cartls").style.display="block";
    var temp=JSON.parse(localStorage.getItem('user'));
    var s="";
    for(var j=0;j<temp[tempId].billed.length;j++){
        s=s+"Ngày: "+temp[tempId].billed[j].ngay;
        for(var k=0;k<temp[tempId].billed[j].info.length;k++){
            s=s+'<div class="mini_info"><div class="info1">'+(k+1)+'</div><div class="info2"><img src="'+temp[tempId].billed[j].info[k].img+
                    '" alt="Lỗi hình òi"/></div><div class="info3">'+temp[tempId].billed[j].info[k].name+
                    '</div><div class="info4">'+temp[tempId].billed[j].info[k].soluong+'</div><div class="info5">'+
                    PhienDichGiaTien(temp[tempId].billed[j].info[k].price*temp[tempId].billed[j].info[k].soluong)+'</div><div class="info6"></div></div>';
            console.log(s);
        }
    }
    document.getElementById("big_infols").innerHTML=s;
}

function tongTien(){
    var temp=0;
    var tempArray = JSON.parse(localStorage.getItem('cart'));
    for(var i=0;i<tempArray.length;i++)
        temp+=tempArray[i].soluong*tempArray[i].price;
    return temp;
}

function AcpBoSanPham(){
    document.getElementsByClassName("mini_info")[numberOfCartProduct].style.display="none";
    var tempArray = JSON.parse(localStorage.getItem('cart'));
    tempArray.splice(numberOfCartProduct,1);
    localStorage.setItem('cart',JSON.stringify(tempArray));
    numberOfCartProduct=-1;
    closedWarningIndex();
    var s="";
    for(var i=0;i<tempArray.length;i++){
        console.log("ok");
            s=s+'<div class="mini_info"><div class="info1">'+(i+1)+'</div><div class="info2"><img src="'+tempArray[i].img+
                    '" alt="Lỗi hình òi"/></div><div class="info3">'+tempArray[i].name+
                    '</div><div class="info4"><input min="1" class="ip4" type="number" value="'+tempArray[i].soluong+'" onchange="tinhTien('+(i+1)+','+tempArray[i].price+')"></div><div class="info5">'+
                    PhienDichGiaTien(tempArray[i].price*tempArray[i].soluong)+'</div><div class="info6"><input type="button" id="del" value="Xóa" onclick="xoaSanPhamOGioHang('+i+')"/></div> </div>';
        }
        document.getElementById("big_info").innerHTML=s;
        document.getElementById("tongtien").innerHTML=PhienDichGiaTien(tongTien());
}

function tinhTien(i,a){
    var t1=document.getElementsByClassName("info5");
    var t2=document.getElementsByClassName("ip4");
    var t3=document.getElementById("tongtien");
    t1[i].innerHTML=PhienDichGiaTien(t2[i-1].value*a);
    var temp=JSON.parse(localStorage.getItem('cart'));
    temp[i-1].soluong=t2[i-1].value;
    //console.log(temp[i-1]);
    //console.log(typeof(temp[i-1]));
    localStorage.setItem('cart',JSON.stringify(temp));
    t3.innerHTML=PhienDichGiaTien(tongTien());
}

function AcpThanhToan(){
    createBillListAndPushBill();
    closedWarningIndex();
    window.localStorage.removeItem('cart');
    alert("Thanh toán thành công !! Cám ơn bạn đã mua hàng <3");
    window.location.reload();
}

function AcpLogout(){
    localStorage.setItem('activeId',JSON.stringify(-1));
    window.localStorage.removeItem('cart');
    window.location.reload();
}

function LogoutAdmin(){
    localStorage.setItem('activeId',JSON.stringify(-1));
    main();
}

function PhienDichRaTheLoai(theloai){
    var s=" ";
    switch (theloai)
    {
        case 'a':
            return "thiếu nhi";
        case 'b':
            return "trinh thám";
        case 'c':
            return "tình cảm";
        case 'd':
            return "truyện tranh";
    }
}

function PhienDichGiaTien(giatien){
    let s=""+giatien;
    s=s.split('');
    for(var i=s.length-3;i>0;i=i-3)
        s.splice(i, 0, "," );
    s=s.join("");
    return s;
}

function GiaTienThanhNumber(giatien){
    var number = giatien.match(/\d/g);
    number = number.join("");
    number =parseInt(number);
    return number;
}

function DelProduct(){
    var tempArray = JSON.parse(localStorage.getItem('product'));
    tempArray.splice(numberOfDelProduct,1);
    localStorage.setItem('product',JSON.stringify(tempArray));
    closedAdmin();
    window.location.reload();
    numberOfDelProduct=-1;
}

function DelFinishedBill(x){
    var tempArray=JSON.parse(localStorage.getItem('FinishedBill'));
    for(var i=0;i<tempArray.length;i++){
        if(tempArray[i].idBill===x)
            tempArray.splice(i,1);
        localStorage.setItem('FinishedBill',JSON.stringify(tempArray));
    }
}

function fixingg(){
    var n=document.getElementById("file").value;
    var id ;
    if(n) {
        id=n.split("fakepath");
        id= urlTemp+id[1];
    }
    var t1=document.getElementById("idnamesp").value;
    var t2=document.getElementById("idcate").value;
    var t3=document.getElementById("idauthor").value;
    var t4=document.getElementById("idprice").value;
    var t5=document.getElementById("idsp").value;
    var t6=document.getElementById("idsc").value;
    var tempArray = JSON.parse(localStorage.getItem('product'));
    if(t1)tempArray[numberOfFixProduct].name=t1;
    if(t2)tempArray[numberOfFixProduct].cate=t2;
    if(t3)tempArray[numberOfFixProduct].author=t3;
    if(t4)tempArray[numberOfFixProduct].price=t4;
    if(t5)tempArray[numberOfFixProduct].productid=t5;
    if(t6)tempArray[numberOfFixProduct].type=t6;
    if(id)tempArray[numberOfFixProduct].img=id;
    localStorage.setItem('product',JSON.stringify(tempArray));
    alert("Sửa sản phẩm thành công");
    closedAdmin();
    window.location.reload();
    numberOfFixProduct=-1;
}

function showImage(){
    var n=document.getElementById("file").value;
    
    var id = n.split("fakepath");
    id= id[1];
    id=urlTemp+id;
    console.log(id);
    document.getElementById("left_fix").innerHTML="<img src='"+id+"'alt='Chưa có hình !'/>";
}

function AcpAddProduct(){
    var n=document.getElementById("file").value;
    var tempArray = JSON.parse(localStorage.getItem('product'));
    var id ;
    if(n) {
        id=n.split("fakepath");
        id= urlTemp+id[1];
    }
    else id=" ";
    var t1=document.getElementById("idnamesp").value;
    var t2=document.getElementById("idcate").value;
    var t3=document.getElementById("idauthor").value;
    var t4=document.getElementById("idprice").value;
    var t5=document.getElementById("idsp").value;
    var t6=document.getElementById("idsc").value;
    for(var i=0;i<tempArray.length;i++){
        if(parseInt(t5)===tempArray[i].productid){
            alert("id sản phẩm đã tồn tại");
            document.getElementById("idsp").focus();
            return false;
        }
    }
    var temp={name: t1,cate: t2,author:t3,price:t4,productid:t5,type:t6, img: id};
    tempArray.unshift(temp);
    localStorage.setItem('product',JSON.stringify(tempArray));
    alert("Thêm sản phẩm thành công");
    closedAdmin();
    window.location.reload();
}

function changeTT(i){
    var tempArray = JSON.parse(localStorage.getItem('billList'));
    if(tempArray[i].trangThai==="checked='checked'"){
        tempArray[i].trangThai="";
        DelFinishedBill(tempArray[i].idBill);
    }
    else {
        tempArray[i].trangThai="checked='checked'";
        createFinishedBill(tempArray[i]);
    }
    localStorage.setItem('billList',JSON.stringify(tempArray));
}

function timkiemsanpham(){
    var tempArray;
    tempArray  = JSON.parse(localStorage.getItem('product'));
    var keycate=document.getElementById("keycate").value;
    var tukhoa=document.getElementById("tukhoa").value;
    var keyprice=document.getElementById("keyprice").value;
    if((!tukhoa)&&(!keycate)&&(!keyprice)){
        alert("điều kiện lọc chưa ổn");
        return false;
    }
    for(var i=0;i<tempArray.length;i++){
        if(keycate&&tukhoa&&keyprice){
            if((keycate===tempArray[i].cate)&&(checkTenSP(tempArray[i].name,tukhoa))&&(checkKhoangGia(tempArray[i].price,keyprice))){
                finding.push(tempArray[i]);
            }
        }
        else if(keycate&&tukhoa){
            if((keycate===tempArray[i].cate)&&(checkTenSP(tempArray[i].name,tukhoa))){
                finding.push(tempArray[i]);
            }
        }
         else if(keycate&&keyprice){
            if((keycate===tempArray[i].cate)&&(checkKhoangGia(tempArray[i].price,keyprice))){
                finding.push(tempArray[i]);
            }
        }
         else if(tukhoa&&keyprice){
            if((checkTenSP(tempArray[i].name,tukhoa))&&(checkKhoangGia(tempArray[i].price,keyprice))){
                finding.push(tempArray[i]);
            }
        }
         else if(tukhoa){
            if(checkTenSP(tempArray[i].name,tukhoa)){
                finding.push(tempArray[i]);
            }
        }
         else if(keyprice){
            if(checkKhoangGia(tempArray[i].price,keyprice)){
                finding.push(tempArray[i]);
            }
        }
         else
            if(keycate===tempArray[i].cate){
                finding.push(tempArray[i]);
            }
    }
    creatTemp(finding);
    window.location="index.html?timkiem1";
}

function checkTenSP(a,b){
    if(a.toUpperCase().includes(b.toUpperCase()))
        return true;
    return false;
}

function checkKhoangGia(a,b){
    switch(b){
        case 'a':
            if(a<50000)return true;
            return false;
        case 'b':
            if(a<=100000&&a>=50000)return true;
            break;
        case 'c':
            if(a>=100000&&a<=200000)return true;
            return false;
        case 'd':
            if(a>=200000)return true;
            return false;
    }
    return false;
}

function oninputne(a){
    var tempArray = JSON.parse(localStorage.getItem('product'));
    const temp = tempArray.filter(value => {
        return value.name.toUpperCase().includes(a.toUpperCase());
    });
       
    var t='<table class="table1" width="80%"><tr><th style="width:7%">Id</th><th style="width:14%">Thể loại</th><th style="width:10%">Ảnh</th><th style="width:30%">Tên sản phẩm</th><th style="width:10%">Giá</th><th style="width:15%">Tác giả</th><th style="width:7%">Type</th><th style="width:7%"></th></tr>';
    for(var i=0;i<temp.length;i++)
        t+='<tr><td>'+temp[i].productid+'</td><td>'+PhienDichRaTheLoai(temp[i].cate)+'</td><td><img src="'+temp[i].img+'"alt="Chưa có hình !"/></td><td>'+temp[i].name+'</td><td>'+PhienDichGiaTien(temp[i].price)+'</td><td>'+tempArray[i].author+'</td><td>'+temp[i].type+
            '</td><td><form><input type="button" class="del" value="Xóa" onclick="Warning('+i+')"/><input type="button" class="fix" value="Sửa" onclick="fixProduct('+i+')"/></form></td></tr>';
    document.getElementById('r2_table').innerHTML=t+'</table>';
}

/* CHECK MOI THU*/
function lsgiohang(){
    var temp=JSON.parse(localStorage.getItem('activeId'));
    if(temp!==-1)
        document.getElementById('ikon_his').style.display='block';
}

function checkActive(){
    var temp=JSON.parse(localStorage.getItem('activeId'));
    var userArray=JSON.parse(localStorage.getItem('user'));
    if(temp!==-1){
        document.getElementById("ikon1").style.display="block";
        document.getElementById("ikon2").style.display="none";
        document.getElementById("ikon_user").innerHTML=userArray[temp].username;
    }
}

function checkSignIn(){
    var a=document.getElementById("idpass1").value;
    console.log(a);
    var b=document.getElementById("idnameid1").value;console.log(b);
    var userArray=JSON.parse(localStorage.getItem('user'));
    for(var i=0;i<userArray.length;i++)
        if(b===userArray[i].username && a===userArray[i].password && userArray[i].usertype==="ad")
        {
            alert("Đăng nhập thành công");
            localStorage.setItem('activeId',JSON.stringify(i));
            window.location="admin.html";
            return true;
        }
        else if (b===userArray[i].username && a===userArray[i].password && userArray[i].usertype==="cus"){
            alert("Đăng nhập thành công");
            localStorage.setItem('activeId',JSON.stringify(i));
            window.location.reload();
            return true;
        }
            alert("Đăng nhập không thành công");
            return false;
}

function checkSignUp(){
    var regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    var userArray=JSON.parse(localStorage.getItem('user'));
    if(document.getElementById("idname").value===''){
        alert("Họ và Tên bị rỗng");
        document.getElementById("idname").focus();
        return false;
    }
    if(document.getElementById("iddiachi").value===''){
        alert("Địa Chỉ bị rỗng");
        document.getElementById("iddiachi").focus();
        return false;
    }
    if(document.getElementById("idsdt").value===''){
        alert("Số điện thoại bị rỗng");
        document.getElementById("idsdt").focus();
        return false;
    }
    if(regex.test(document.getElementById("idsdt").value) === false){
        alert("Số điện thoại sai định dạng");
        document.getElementById("idsdt").focus();
        return false;
    }
    if(document.getElementById("idnam").checked===false&&document.getElementById("idnu").checked===false&&document.getElementById("idkhac").checked===false){
        alert("Giới tính bị rỗng");
        return false;
    }
    if(document.getElementById("idnameid").value===''){
        alert("Tên đăng nhập rỗng");
        document.getElementById("idnameid").focus();
        return false;
    }
    if(document.getElementById("idpass").value===''){
        alert("Mật khẩu rỗng");
        document.getElementById("idpass").focus();
        return false;
    }
    if(document.getElementById("idrepass").value===''){
        alert("Mật khẩu nhập lại rỗng");
        document.getElementById("idrepass").focus();
        return false;
    }
    if(document.getElementById("idrepass").value!==document.getElementById("idpass").value){
        alert("Mật khẩu khác với mật khẩu nhập lại");
        document.getElementById("idrepass").focus();
        return false;
    }
    for(var i=0;i<userArray.length;i++)
        if(document.getElementById("idnameid").value===userArray[i].username){
            alert("Tên đăng nhập đã tồn tại");
            document.getElementById("idnameid").focus();
            return false;
        }
    var user0={username:document.getElementById("idnameid").value,password:document.getElementById("idpass").value,
        fullname:document.getElementById("idname").value,address:document.getElementById("iddiachi").value,
        phone:document.getElementById("idsdt").value,usertype:'cus'};
    console.log(typeof(user0));
    userArray.push(user0);
    localStorage.setItem('user',JSON.stringify(userArray));
    alert("Đăng ký thành công");
}


/*PHAN TRANG CAC KIEU*/
function newDiv(x,y){
    var s=" ";
    for(var j=0;j<=x;j++){
        s=s+'<div class="sanpham">';
        if(j===x)
            for(var i=0;i<y;i++)
                s=s+'<div class="sp"></div>';
        else
            for(var i=0;i<4;i++)
                s=s+'<div class="sp"></div>';
        s=s+'<div style="clear:both"></div>'+'</div>';
    }
    return s;
}

function newPage(x){
    return newDiv(parseInt(x/4),x%4);
}
 
function pageNumber(j,a){
    var s=" ";
    if(j===1)return s ;
    for(var i=1;i<=j;i++)
        s=s+ "<div class='number'><a href='index.html?"+a+i+"'>"+i+"</a></div>";
    return s;
}

function Banner(){
    var url = window.location.href;     
    var id = url.split('?');
    id= id[1];
    
    if(id.includes('a'))
        document.getElementById("slideshow").innerHTML="<img id='img11' src='https://b-f4-zpcloud.zdn.vn/7697154842809176494/9e6b31536ad0a18ef8c1.jpg' alt='Lỗi hình òi'/>";
    else if(id.includes('b'))
        document.getElementById("slideshow").innerHTML="<img id='img22' src='https://b.f7.photo.talk.zdn.vn/1651298723928187096/188379f8257bee25b76a.jpg' alt='Lỗi hình òi'/>";
    else if(id.includes('c'))       
        document.getElementById("slideshow").innerHTML="<img id='img33' src='https://f14.photo.talk.zdn.vn/6830142803729521321/ec1847ad6d2ea670ff3f.jpg' alt='Lỗi hình òi'/>";
    else if(id.includes('d'))          
        document.getElementById("slideshow").innerHTML="<img id='img44' src='../../BaiTap/public_html/img/d.jpg' alt='Lỗi hình òi'/>";
}

function PageIndex(){
    var url = window.location.href;     
    var id = url.split('?');
    id= id[1];
    var tempArray;
    var s=" ";
            
    var temp=parseInt(JSON.parse(localStorage.getItem('product')).length/12);
    if(JSON.parse(localStorage.getItem('product')).length%12!==0)temp++;
    for(var z=1;z<=temp;z++)
        switch(id)
    {
        case 'timkiem'+z:
            var temptimkim=JSON.parse(localStorage.getItem('finding'));
            tempArray=chunkArray(temptimkim);
            s=newPage(tempArray[z-1].length);
            document.getElementById("content").innerHTML=s+"<div id='soTrang'></div>";
            document.getElementById("soTrang").innerHTML=pageNumber(tempArray.length,'timkiem');
            
            var t=document.getElementsByClassName("sp");
            for (var i = 0; i < t.length; i++){
                t[i].innerHTML = '<img src="'+tempArray[z-1][i].img+'" alt="Lỗi hình òi"/>'+ '<div class="infobs" onclick="clickInfoTimKiem('+z+','+i+')">'+tempArray[z-1][i].name+'</br>'+PhienDichGiaTien(tempArray[z-1][i].price)+'</div>';
            }
            break;
            
            
        case 'a'+z:
            tempArray=chunkArray(thieunhiArray);
            s=newPage(tempArray[z-1].length);
            document.getElementById("content").innerHTML=s+"<div id='soTrang'></div>";
            document.getElementById("soTrang").innerHTML=pageNumber(tempArray.length,'a');
            
            var t=document.getElementsByClassName("sp");
            for (var i = 0; i < t.length; i++){
                t[i].innerHTML = '<img src="'+tempArray[z-1][i].img+'" alt="Lỗi hình òi"/>'+ '<div class="infobs" onclick="clickInfoThieuNhi('+z+','+i+')">'+tempArray[z-1][i].name+'</br>'+PhienDichGiaTien(tempArray[z-1][i].price)+'</div>';
            }
            break;
                
        case 'b'+z:
            tempArray=chunkArray(trinhthamArray);
            s=newPage(tempArray[z-1].length);
            document.getElementById("content").innerHTML=s+"<div id='soTrang'></div>";
            document.getElementById("soTrang").innerHTML=pageNumber(tempArray.length,'b');
            
            var t=document.getElementsByClassName("sp");
            for (var i = 0; i < t.length; i++){
                t[i].innerHTML = '<img src="'+tempArray[z-1][i].img+'" alt="Lỗi hình òi"/>'+ '<div class="infobs" onclick="clickInfoTrinhTham('+z+','+i+')">'+tempArray[z-1][i].name+'</br>'+PhienDichGiaTien(tempArray[z-1][i].price)+'</div>';
            }
            break;
         
        case 'c'+z:
            tempArray=chunkArray(tinhcamArray);
            s=newPage(tempArray[z-1].length);
            document.getElementById("content").innerHTML=s+"<div id='soTrang'></div>";
            document.getElementById("soTrang").innerHTML=pageNumber(tempArray.length,'c');
            
            var t=document.getElementsByClassName("sp");
            for (var i = 0; i < t.length; i++){
                t[i].innerHTML = '<img src="'+tempArray[z-1][i].img+'" alt="Lỗi hình òi"/>'+ '<div class="infobs" onclick="clickInfoTinhCam('+z+','+i+')">'+tempArray[z-1][i].name+'</br>'+PhienDichGiaTien(tempArray[z-1][i].price)+'</div>';
            }
            break;
             
        case 'd'+z:
            tempArray=chunkArray(truyentranhArray);
            s=newPage(tempArray[z-1].length);
            document.getElementById("content").innerHTML=s+"<div id='soTrang'></div>";
            document.getElementById("soTrang").innerHTML=pageNumber(tempArray.length,'d');
            
            var t=document.getElementsByClassName("sp");
            for (var i = 0; i < t.length; i++){
                t[i].innerHTML = '<img src="'+tempArray[z-1][i].img+'" alt="Lỗi hình òi"/>'+ '<div class="infobs" onclick="clickInfoTruyenTranh('+z+','+i+')">'+tempArray[z-1][i].name+'</br>'+PhienDichGiaTien(tempArray[z-1][i].price)+'</div>';
            }
            break;
               
        default:	
            break;	
    }
};

function PageControl(){
    var url = window.location.href;     
    var id = url.split('?');
    id= id[1];
    console.log(id);
           
    switch(id)
    {
        case 'sanpham':
            ShowProductList();
            document.getElementsByClassName("fa-splotch")[2].style.color="yellow";
            break;
             
        case 'donhang':
            ShowBillList();
            document.getElementsByClassName("fa-splotch")[3].style.color="yellow";
            break;
               
        case 'chitietdonhang':
            ShowBillInFo();
            document.getElementsByClassName("fa-splotch")[4].style.color="yellow";
            break;
        
        case 'user':
            ShowUserList();
            document.getElementsByClassName("fa-splotch")[1].style.color="yellow";
            break;
        
        case 'donhanghoanthanh':
            ShowFinishedBill();
            document.getElementsByClassName("fa-splotch")[5].style.color="yellow";
            break;
            
        default:
            document.getElementsByClassName("fa-splotch")[0].style.color="yellow";
            break;
    }
};

/*TAO MOI THU*/
function creatTemp(a){
    localStorage.setItem('finding',JSON.stringify(a));
}

function createAdmin(){
    let userArray=[] ;
    if(localStorage.getItem('user')===null){
    var user1 ={ username: 'admin', password:'admin', fullname:'Keo Bong Gon',address:'Q7',phone:'0902558092',usertype:'ad'};
    var user2= { username: 'abc', password: 'abc', fullname:'Sugar',address:'Q4',phone:'090000935',usertype:'cus'};
    userArray.push(user1);
    userArray.push(user2);
    console.log(userArray);
    localStorage.setItem('user',JSON.stringify(userArray));
    
    }
}

function createProduct(){
    if(localStorage.getItem('product')===null){
        localStorage.setItem('product',JSON.stringify(productArray));
    }
}

function createActiveId(){
    if(localStorage.getItem('activeId')===null){
        localStorage.setItem('activeId',JSON.stringify(-1));
    }
}

function createCartAndPushProduct(a){
    let tempCart=[];
    if(localStorage.getItem('cart')===null){
        a.soluong=parseInt(1);
        tempCart.unshift(a);
        localStorage.setItem('cart',JSON.stringify(tempCart));
    }
    else { 
        var temp=JSON.parse(localStorage.getItem('cart'));
        for(var i=0;i<temp.length;i++){
            if(temp[i].productid===a.productid){
                temp[i].soluong=parseInt(temp[i].soluong+1);
                console.log("temp[i].soluong");
                localStorage.setItem('cart',JSON.stringify(temp));
                return 1;
            }
        }
        a.soluong=parseInt(1);
        temp.unshift(a);
        localStorage.setItem('cart',JSON.stringify(temp));
    }
    console.log(localStorage.getItem('cart'));
}

function createBillListAndPushBill(){
    let tempBillList=[];
    let tempLS=[];
    var today=new Date();
    var usertemp=JSON.parse(localStorage.getItem('user'));
    var temp=JSON.parse(localStorage.getItem('cart'));
    var bill ={};
    bill.idUser=JSON.parse(localStorage.getItem('activeId'));
    bill.ngay= today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    bill.trangThai="";
    bill.tongTien=GiaTienThanhNumber(document.getElementById("tongtien").innerHTML);
    bill.info= temp;
    console.log(usertemp[bill.idUser].billed);
    if(!usertemp[bill.idUser].billed){
        tempLS.push(bill);
        usertemp[bill.idUser].billed=tempLS;
        localStorage.setItem('user',JSON.stringify(usertemp));
    }
    else { 
        usertemp[bill.idUser].billed.push(bill);
        localStorage.setItem('user',JSON.stringify(usertemp));
    }
    
    if(localStorage.getItem('billList')===null){
        bill.idBill=0;
        tempBillList.push(bill);
        localStorage.setItem('billList',JSON.stringify(tempBillList));
    }
    else { 
        var temp=JSON.parse(localStorage.getItem('billList'));
        bill.idBill=temp.length;
        temp.push(bill);
        localStorage.setItem('billList',JSON.stringify(temp));
    }
    console.log(localStorage.getItem('billList'));
}

function createFinishedBill(bill){
    let tempFinishedBill=[];
    if(localStorage.getItem('FinishedBill')===null){
        tempFinishedBill.push(bill);
        localStorage.setItem('FinishedBill',JSON.stringify(tempFinishedBill));
    }
    else { 
        var temp=JSON.parse(localStorage.getItem('FinishedBill'));
        temp.push(bill);
        localStorage.setItem('FinishedBill',JSON.stringify(temp));
    }
    console.log(localStorage.getItem('FinishedBill'));
}


/*SHOW MOI THU*/
function ShowUserList(){
    if(localStorage.getItem('user')===null){
        return false;
    }
    document.getElementById('r2').innerHTML='<div id="r2_yeucau">Thêm tài khoản mới: <button type="button" class="del" onclick="ModalAddUser()">( + )</button> </div><div id="r2_table"></div>';
    var tempArray = JSON.parse(localStorage.getItem('user'));
    var t='<table width="80%"><tr><th style="width:10%">Mã Khách</th><th style="width:20%">Tên Đăng Nhập</th><th style="width:20%">Tên Đăng Ký</th><th style="width:20%">Mật Khẩu</th><th style="width:10%">Địa Chỉ</th><th style="width:15%">Số Điện Thoại</th><th style="width:5%">Loại</th></tr>';
    for(var i=0;i<tempArray.length;i++)
        t+='<tr><td>'+i+'</td><td>'+tempArray[i].username+'</td><td>'+tempArray[i].fullname+'</td><td>'+tempArray[i].password+'</td><td>'+tempArray[i].address+'</td><td>'+tempArray[i].phone+'</td><td>'+tempArray[i].usertype+'</td></tr>';
    document.getElementById('r2_table').innerHTML=t+'</table>';
    document.getElementById("r1").innerHTML=" DANH SÁCH TÀI KHOẢN";
}

function ShowProductList(){
    if(localStorage.getItem('product')===null){
        return false;
    }
    var tempArray = JSON.parse(localStorage.getItem('product'));
    document.getElementById('r2').innerHTML='<div id="r2_yeucau">Thêm sản phẩm mới: <button type="button" class="del" onclick="ModalAddProduct()">( + )</button></div><div id="r2yc" >Tìm kiếm sản phẩm: <input type="text" oninput="oninputne(this.value)" placeholder="Tìm kiếm"/></div><div id="r2_table"></div>';
    var t='<table class="table1" width="80%"><tr><th style="width:7%">Id</th><th style="width:14%">Thể loại</th><th style="width:10%">Ảnh</th><th style="width:30%">Tên sản phẩm</th><th style="width:10%">Giá</th><th style="width:15%">Tác giả</th><th style="width:7%">Type</th><th style="width:7%"></th></tr>';
    for(var i=0;i<tempArray.length;i++)
        t+='<tr><td>'+tempArray[i].productid+'</td><td>'+PhienDichRaTheLoai(tempArray[i].cate)+'</td><td><img src="'+tempArray[i].img+'"alt="Chưa có hình !"/></td><td>'+tempArray[i].name+'</td><td>'+PhienDichGiaTien(tempArray[i].price)+'</td><td>'+tempArray[i].author+'</td><td>'+tempArray[i].type+
            '</td><td><form><input type="button" class="del" value="Xóa" onclick="Warning('+i+')"/><input type="button" class="fix" value="Sửa" onclick="fixProduct('+i+')"/></form></td></tr>';
    document.getElementById('r2_table').innerHTML=t+'</table>';
    document.getElementById("r1").innerHTML=" DANH SÁCH SẢN PHẨM";
}

function ShowBillList(){
    if(localStorage.getItem('billList')===null){
        return false;
    }
    var tempArray = JSON.parse(localStorage.getItem('billList'));
    var t='<table class="table1" width="80%"><tr><th style="width:10%">Id Khách</th><th style="width:20%" >Tên Khách</th><th style="width:10%" >Id Bill</th><th style="width:12%">Ngày Đặt</th><th style="width:12%">Tổng Tiền</th><th style="width:12%" >Địa Chỉ</th><th style="width:12%" >Số Điện Thoại</th> <th style="width:12%">Hoàn Tất Đơn Hàng</th></tr>';
    for(var i=0;i<tempArray.length;i++)
        t+='<tr><td>'+tempArray[i].idUser+'</td><td>'+TimThongTinUser(tempArray[i].idUser,1)+'</td><td>'+tempArray[i].idBill+'</td><td>'+tempArray[i].ngay+'</td><td>'+PhienDichGiaTien(tempArray[i].tongTien)+'</td><td>'+TimThongTinUser(tempArray[i].idUser,3)+'</td><td>'+TimThongTinUser(tempArray[i].idUser,2)+'</td><td><form><input type="checkbox" id="checkTT" '+tempArray[i].trangThai+' onclick="changeTT('+i+')"/></form></td></tr>';
    document.getElementById('r2').innerHTML=t+'</table>';
    document.getElementById("r1").innerHTML=" DANH SÁCH ĐƠN HÀNG";
}

function TimThongTinUser(a,b){
    var tempArray = JSON.parse(localStorage.getItem('user'));
    for(var i=0;i<tempArray.length;i++)
        if(i===a){
            if(b===1)
                return tempArray[i].fullname;
            else if(b===2)
                return tempArray[i].phone;
            else 
                return tempArray[i].address;
        }
    
}

function ShowBillInFo(){
    if(localStorage.getItem('billList')===null){
        return false;
    }
    var s1=selectIdBill();
    document.getElementById('r2').innerHTML='<div id="r2_yeucau">Khoảng thời gian từ  <input type="date" id="ngay1"/> đến <input type="date" id="ngay2"/> <button type="button" class="del" onclick="LocBillInfo()">Lọc</button> </div><div id="r2_table"></div>';
    var tempArray = JSON.parse(localStorage.getItem('billList'));
    var sum=0;
    tempArray.forEach(function(e){sum += e.tongTien;});
    var t='<table class="table1" width="80%"><tr><th style="width:10%">'+s1+'</th><th style="width:10%">Id BillInfo</th><th style="width:15%">Ngày Đặt</th><th style="width:32%">Tên Sản Phẩm</th><th style="width:13%">Số Lượng</th><th style="width:20%">Tổng Tiền</th></tr>';
    for(var i=0;i<tempArray.length;i++)
        for(var j=0;j<tempArray[i].info.length;j++)
            t+='<tr><td>'+tempArray[i].idBill+'</td><td>'+j+'</td><td>'+tempArray[i].ngay+'</td><td>'+tempArray[i].info[j].name+'</td><td>'+tempArray[i].info[j].soluong+'</td><td>'+PhienDichGiaTien(tempArray[i].info[j].price*tempArray[i].info[j].soluong)+'</td></tr>';
    document.getElementById('r2_table').innerHTML=t+'<tr><td colspan="5" id="tongcong">TỔNG CỘNG</td><td id="tien">'+PhienDichGiaTien(sum)+'</td></tr></table>';
    document.getElementById("r1").innerHTML=" DANH SÁCH CHI TIẾT ĐƠN HÀNG";
}

function ShowFinishedBill(){
    if(localStorage.getItem('FinishedBill')===null){
        return false;
    }
    var tempArray = JSON.parse(localStorage.getItem('FinishedBill'));
    var s3=StringCate();
    var sum=0;
    var quantity=0;
    for(var i=0;i<tempArray.length;i++)
        for(var j=0;j<tempArray[i].info.length;j++)
            quantity+=parseInt(tempArray[i].info[j].soluong);
    tempArray.forEach(function(e){sum += e.tongTien;});
    document.getElementById('r2').innerHTML='<div id="r2_yeucau">Khoảng thời gian từ  <input type="date" id="ngay1"/> đến <input type="date" id="ngay2"/>'+s3+' <button type="button" class="del" onclick="LocFinishedBill()">Lọc</button> </div><div id="r2_table"></div>';
    
    var t='<table width="80%"><tr><th style="width:10%">Id Bill</th><th style="width:10%">Id BillInfo</th><th style="width:15%">Ngày Đặt</th><th style="width:30%">Tên Sản Phẩm</th><th style="width:10%">Thể loại</th><th style="width:10%">Số Lượng</th><th style="width:15%">Tổng Tiền</th></tr>';
    for(var i=0;i<tempArray.length;i++)
        for(var j=0;j<tempArray[i].info.length;j++)
            t+='<tr><td>'+tempArray[i].idBill+'</td><td>'+j+'</td><td>'+tempArray[i].ngay+'</td><td>'+tempArray[i].info[j].name+'</td><td>'+tempArray[i].info[j].cate+'</td><td>'+tempArray[i].info[j].soluong+'</td><td>'+PhienDichGiaTien(tempArray[i].info[j].price*tempArray[i].info[j].soluong)+'</td></tr>';
    document.getElementById('r2_table').innerHTML=t+'<tr><td colspan="5" id="tongcong">TỔNG CỘNG</td><td id="quantity">'+quantity+'</td><td id="tien">'+PhienDichGiaTien(sum)+'</td></tr></table>';
    document.getElementById("r1").innerHTML=" THỐNG KÊ";
}

function selectIdBill(){
    var tempArray = JSON.parse(localStorage.getItem('billList'));
    s="<select class='select' onchange='locIdBill(this.value)'><option>Id Bill</option>";
    for(var i=0;i<tempArray.length;i++)
        s+="<option value="+i+">"+i+"</option>";
    return s+"<option value ='all'>All</option></select>";
}

function locIdBill(a){
    var tempArray = JSON.parse(localStorage.getItem('billList'));
    var s1=selectIdBill();
    var sum=0;
    tempArray.forEach(function(e){sum += e.tongTien;});
    if(a==="all"){
        var t='<table class="table1" width="80%"><tr align="center"><th>'+s1+'</th><th>Id BillInfo</th><th>Ngày Đặt</th><th>Tên Sản Phẩm</th><th>Số Lượng</th><th>Tổng Tiền</th></tr>';
        for(var i=0;i<tempArray.length;i++)
            for(var j=0;j<tempArray[i].info.length;j++)
                t+='<tr align="center"><td style="width:10%">'+i+'</td><td style="width:10%">'+j+'</td><td style="width:15%">'+tempArray[i].ngay+'</td><td style="width:32%">'+tempArray[i].info[j].name+'</td><td style="width:13%">'+tempArray[i].info[j].soluong+'</td><td style="width:20%">'+PhienDichGiaTien(tempArray[i].info[j].price*tempArray[i].info[j].soluong)+'</td></tr>';
        document.getElementById('r2_table').innerHTML=t+'<tr><td colspan="5" id="tongcong">TỔNG CỘNG</td><td id="tien">'+PhienDichGiaTien(sum)+'</td></tr></table>';
        return true;
    }
    if(locTemp)
        locTemp=[];
    a=parseInt(a);
    locTemp.push(tempArray[a]);
    var sum=0;
    locTemp.forEach(function(e){sum += e.tongTien;});
    var t='<table class="table1" width="80%"><tr align="center"><th>'+s1+'</th><th>Id BillInfo</th><th>Ngày Đặt</th><th>Tên Sản Phẩm</th><th>Số Lượng</th><th>Tổng Tiền</th></tr>';
    for(var j=0;j<locTemp[0].info.length;j++)
        t+='<tr align="center"><td style="width:10%">'+a+'</td><td style="width:10%">'+j+'</td><td style="width:15%">'+locTemp[0].ngay+'</td><td style="width:32%">'+locTemp[0].info[j].name+'</td><td style="width:13%">'+locTemp[0].info[j].soluong+'</td><td style="width:20%">'+PhienDichGiaTien(locTemp[0].info[j].price*locTemp[0].info[j].soluong)+'</td></tr>';
    document.getElementById('r2_table').innerHTML=t+'<tr><td colspan="5" id="tongcong">TỔNG CỘNG</td><td id="tien">'+PhienDichGiaTien(sum)+'</td></tr></table>';
}

function LocBillInfo(){
    var date1=document.getElementById("ngay1").value;
    var date2=document.getElementById("ngay2").value;
    if((!date1)||(!date2)){
        alert("điều kiện lọc chưa ổn");
        return false;
    }
    
    var s1=selectIdBill();
    var tempArray1=[];
    var tempArray = JSON.parse(localStorage.getItem('billList'));
    for(var i=0;i<tempArray.length;i++)
            if(soSanhNgayThang(tempArray[i].ngay))
                tempArray1.push(tempArray[i]);
            
    var sum=0;
    
    tempArray1.forEach(function(e){sum += e.tongTien;});
    var t='<table width="80%"><tr><th style="width:10%">'+s1+'</th><th style="width:10%">Id BillInfo</th><th style="width:15%">Ngày Đặt</th><th style="width:32%">Tên Sản Phẩm</th><th style="width:13%">Số Lượng</th><th style="width:20%">Tổng Tiền</th></tr>';
    for(var i=0;i<tempArray1.length;i++){
        for(var j=0;j<tempArray1[i].info.length;j++)
        t+='<tr><td>'+tempArray1[i].idBill+'</td><td>'+j+'</td><td>'+tempArray1[i].ngay+'</td><td>'+tempArray1[i].info[j].name+'</td><td>'+tempArray1[i].info[j].soluong+'</td><td>'+PhienDichGiaTien(tempArray1[i].info[j].price*tempArray1[i].info[j].soluong)+'</td></tr>';
    }
    document.getElementById('r2_table').innerHTML=t+'<tr><td colspan="5" id="tongcong">TỔNG CỘNG</td><td id="tien">'+PhienDichGiaTien(sum)+'</td></tr></table>';
    
}

function LocFinishedBill(){
    var date1=document.getElementById("ngay1").value;
    var date2=document.getElementById("ngay2").value;
    var keyCate=document.getElementById("keyCate").value;
    if(((!date1)&&(date2))||((!date2)&&(!keyCate))||(date1&&(!date2)&&keyCate)){
        alert("điều kiện lọc chưa ổn");
        return false;
    }
    
    var tempArray1=[];
    var tempArray = JSON.parse(localStorage.getItem('FinishedBill'));
    for(var i=0;i<tempArray.length;i++){
        for(var j=0;j<tempArray[i].info.length;j++){
            if(keyCate&&date1){
                if(soSanhNgayThang(tempArray[i].ngay)&&(keyCate===tempArray[i].info[j].cate)){
                    let tempInfo = JSON.stringify(tempArray[i]);
                    let tempArray2 = JSON.parse(tempInfo);
                    tempArray2.info=tempArray[i].info[j];
                    tempArray2.idbillinfo=j;console.log(tempArray2);
                    tempArray1.push(tempArray2);
                }
            }
            
            else if(!keyCate){
                if(soSanhNgayThang(tempArray[i].ngay)){
                    let tempInfo = JSON.stringify(tempArray[i]);
                    let tempArray2 = JSON.parse(tempInfo);
                    tempArray2.info=tempArray[i].info[j];
                    tempArray2.idbillinfo=j;
                    tempArray1.push(tempArray2);
                }
            }
            else{
                if((keyCate===tempArray[i].info[j].cate)){
                    let tempInfo = JSON.stringify(tempArray[i]);
                    let tempArray2 = JSON.parse(tempInfo);
                    tempArray2.info=tempArray[i].info[j];
                    tempArray2.idbillinfo=j;
                    tempArray1.push(tempArray2);
                }
            }
        }
    }
    var sum=0;var quantity=0;
    for(var i=0;i<tempArray1.length;i++)
            quantity+=parseInt(tempArray1[i].info.soluong);
    tempArray1.forEach(function(e){sum += e.info.price*e.info.soluong;});
    var t='<table class="table1" width="80%"><tr><th style="width:10%">Id Bill</th><th style="width:10%">Id BillInfo</th><th style="width:15%">Ngày Đặt</th><th style="width:30%">Tên Sản Phẩm</th><th style="width:10%">Thể loại</th><th style="width:10%">Số Lượng</th><th style="width:15%">Tổng Tiền</th></tr>';
    for(var i=0;i<tempArray1.length;i++){
        t+='<tr><td>'+tempArray1[i].idBill+'</td><td>'+tempArray1[i].idbillinfo+'</td><td>'+tempArray1[i].ngay+'</td><td>'+tempArray1[i].info.name+'</td><td>'+tempArray1[i].info.cate+'</td><td>'+tempArray1[i].info.soluong+'</td><td>'+PhienDichGiaTien(tempArray1[i].info.price*tempArray1[i].info.soluong)+'</td></tr>';
    }
    document.getElementById('r2_table').innerHTML=t+'<tr><td colspan="5" id="tongcong">TỔNG CỘNG</td><td id="quantity">'+quantity+'</td><td id="tien">'+PhienDichGiaTien(sum)+'</td></tr></table>';
    
}

function soSanhNgayThang(a){
    var date1=document.getElementById("ngay1").value;
    var date2=document.getElementById("ngay2").value;
    var id = a.split('-');
    var date=id[2]+"-"+id[1]+"-"+id[0];
    if( (new Date(date1).getTime()) <(new Date(date).getTime()) &&(new Date(date).getTime()) <(new Date(date2).getTime()) ){
        return true;
    }
    return false;
}

function StringCate(){
    s="<select id='keyCate'><option value=''>Thể Loại</option>"
            +"<option value='a'>Thiếu Nhi</option><option value='b'>Trinh Thám</option>"
            +"<option value='c'>Tình Cảm</option><option value='d'>Truyện Tranh</option></select>";
    return s;
}

/*SAN PHAM*/
var productArray=[
    {productid:1410, cate:'a', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/221/bo-cau-bay-di-tim-ba.jpg', name:'Bồ Câu Bay Đi Tìm Bà', author:'WALTER MACKEN', price:77000, type:'0'},
    {productid:1411, cate:'a', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/221/biet-doi-tham-tu.jpg', name:'Biệt Đội Thám Tử', author:'QUYÊN GAVOYE', price:78000, type:'0'},
    {productid:1412, cate:'a', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/222/tipiti-chim-co-do.jpg', name:'Tipiti Chim Cổ Đỏ', author:'René Guillot', price:54000, type:'0'},
    {productid:1413, cate:'b', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/178/ke-nhin-trom-tb-2020.jpg', name:'Kẻ Nhìn Trộm', author:'Tần Minh', price:157000, type:'0'},
    {productid:1414, cate:'b', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/212/12729583794bdfcdab69cb2.jpg', name:'Kẻ Săn Người', author:'Christophe Guillaumot', price:55000, type:'0'},
    {productid:1415, cate:'b', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/212/12729583764bdfcda8acd39.jpg', name:'Ám Ảnh', author:'Carrie Jones', price:65000, type:'0'},
    {productid:1416, cate:'b', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/131/19-nam-muu-sat-tap-1.jpg', name:'19 Năm Mưu Sát - Tập 1', author:'Na Đa', price:115000, type:'0'},  
    {productid:1417, cate:'c', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/216/1_lned-v4.jpg', name:'Tình Ảo', author:'Từ Triệu Thọ', price:60000, type:'0'},
    {productid:1418, cate:'c', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/215/1_ax78-we.jpg', name:'Chàng Trai Nhà Bên', author:'Meg Cabot', price:40000, type:'0'},
    {productid:1419, cate:'c', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/149/7-ngay-phieu-lang.jpg', name:'Bảy Ngày Phiêu Lãng', author:'Tessa Dare', price:135000, type:'0'},
    {productid:1420, cate:'d', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/127/doraemon-dien-anh-mau-14-nobita-va-me-cung-thiec.jpg', name:'Doraemon Tập 14', author:'Fujiko F Fujio', price:50000, type:'0'},
    {productid:1421, cate:'d', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/127/doraemon-dien-anh-mau-13-nobita-va-vuong-quoc-tren-may.jpg', name:'Doraemon Tập 13', author:'Fujiko F Fujio', price:50000, type:'0'},
    {productid:1422, cate:'d', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/127/doraemon-dien-anh-mau-12-nobita-o-xu-so-nghin-le-mot-dem.jpg', name:'Doraemon Tập 12', author:'Fujiko F Fujio', price:50000, type:'0'},
    {productid:1423, cate:'d', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/127/doraemon-dien-anh-mau-11-nobita-va-hanh-tinh-muong-thu.jpg', name:'Doraemon Tập 11', author:'Fujiko F Fujio', price:50000, type:'0'},
    {productid:1424, cate:'d', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/127/doraemon-dien-anh-mau-5-nobita-va-lau-dai-duoi-day-bien.jpg', name:'Doraemon Tập 5', author:'Fujiko F Fujio', price:50000, type:'0'},
    {productid:1425, cate:'a', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/221/dem-dai-mot-doi.jpg', name:'Đêm Dài Một Đời', author:'LÊ TẤT ĐIỀU', price:142000, type:'0'},
    {productid:1426, cate:'a', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/220/tho-cho-be-hoc-noi_nfyf-8r.jpg', name:'Thơ Cho Bé Học Nói', author:'Phương Anh Ars', price:84400, type:'1'},
    {productid:1427, cate:'a', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/220/phu-thuy-xu-oz-minh-hoa-mau.jpg', name:'Phù Thủy Xứ OZ', author:'L. Frank Baum', price:107000, type:'0'},
    {productid:1428, cate:'a', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/219/truyen-co-grimm-tap-1.jpg', name:'Truyện Cổ Grimm - Tập 1', author:'Jacob Grimm', price:210000, type:'0'},
    {productid:1429, cate:'a', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/219/truyen-co-grimm-tap-2.jpg', name:'Truyện Cổ Grimm - Tập 2', author:'Jacob Grimm', price:200000, type:'0'},
    {productid:1430, cate:'a', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/214/chien-binh-co-dai.jpg', name:'Chiến Binh Cổ Đại', author:'Iris Volant', price:115000, type:'0'},
    {productid:1431, cate:'a', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/214/ki-quan-co-dai.jpg', name:'Kì Quan Cổ Đại', author:'Iris Volant', price:115000, type:'0'},
    {productid:1432, cate:'a', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/213/o-kia-tuoi-tho.jpg', name:'Ơ Kìa! Tuổi Thơ', author:'Đào Thiên An', price:68000, type:'0'},
    {productid:1433, cate:'a', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/221/emma-tham-hoa.jpg', name:'Emma Thảm Họa', author:'QUYÊN GAVOYE', price:58000, type:'0'},
    {productid:1434, cate:'a', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/216/1_voi1-0p.jpg', name:'Lòng Hiếu Thảo', author:'Nguyễn Hạnh', price:21000, type:'0'},
    {productid:1435, cate:'a', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/212/thien_duong_co_that_lcih-m7.jpg', name:'Thiên Đường Có Thật', author:'Todd Burpo', price:59000, type:'0'},
    {productid:1436, cate:'a', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/212/bia_hiep_si_vo_hinh.jpg', name:'Hiệp Sĩ Vô Hình', author:'Văn Biển', price:70000, type:'0'},
    {productid:1437, cate:'a', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/212/PR0953948_2-vong-tron-tuyet-mat.jpg', name:'39 Manh Mối - Phần 5', author:'Dương Thu', price:65000, type:'0'},
    {productid:1438, cate:'a', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/212/bia_6_39clues___ok.jpg', name:'39 Manh Mối - Phần 6', author:'Dương Thu', price:79000, type:'0'},
    {productid:1439, cate:'a', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/196/atlas-dai-duong.jpg', name:'Atlas Đại Dương', author:'Fleurus', price:100000, type:'0'},
    {productid:1440, cate:'a', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/193/chiec-goi-biet-noi.jpg', name:'Chiếc Gối Biết Nói', author:'Phạm Thị Ngọc Liên', price:75000, type:'0'},
    {productid:1441, cate:'a', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/193/mua-hoa-lung-chung-gio.jpg', name:'Mùa Hoa Lưng Chừng Gió', author:'Nguyễn Thu Hằng', price:48000, type:'0'},
    {productid:1442, cate:'b', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/131/19-nam-muu-sat-tap-2.jpg', name:'19 Năm Mưu Sát - Tập 2', author:'Na Đa', price:115000, type:'0'},
    {productid:1443, cate:'b', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/131/hoi-chung-e.jpg', name:'Hội Chứng E', author:'Franck Thilliez', price:179000, type:'1'},
    {productid:1444, cate:'b', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/131/thanh-dia-toi-ac.jpg', name:'Thánh Địa Tội Ác', author:'Willian Faulkner', price:160000, type:'0'},
    {productid:1445, cate:'b', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/131/mua-han-kinh-hoang.jpg', name:'Mùa Hạn Kinh Hoàng', author:'Jane Harper', price:119000, type:'0'},
    {productid:1446, cate:'b', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/131/dam-me-dat-gia.jpg', name:'Đam Mê Đắt Giá', author:'Robert Dugoni', price:129000, type:'0'},
    {productid:1447, cate:'b', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/130/sach-nhung-co-gai-mat-tich.jpg', name:'Những Cô Gái Mất Tích', author:'Megan Miranda', price:158000, type:'0'},
    {productid:1448, cate:'b', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/131/bo-ba-quai-hiep.jpg', name:'Bộ Ba Quái Hiệp', author:'Edgar Wallace', price:138000, type:'0'},
    {productid:1449, cate:'b', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/127/aftermath-ac-quy-rung-phe-tich.jpg', name:'Aftermath', author:'Nam Thanh', price:150000, type:'0'},
    {productid:1450, cate:'b', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/129/con-moi-xao-quyet.jpg', name:'Con Mồi Xảo Quyệt', author:'John Sandford', price:139000, type:'0'},
    {productid:1451, cate:'b', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/138/phuc-thu-tap-1.jpg', name:'Phục Thù - Tập 1', author:'Hô Diên Vân', price:108000, type:'0'},
    {productid:1452, cate:'b', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/138/phuc-thu-tap-2.jpg', name:'Phục Thù - Tập 2', author:'Hô Diên Vân', price:118000, type:'0'},
    {productid:1453, cate:'b', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/138/ma-thuat-bi-cam.jpg', name:'Ma Thuật Bị Cấm', author:'Keigo Higashino', price:115000, type:'0'},
    {productid:1454, cate:'b', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/138/don-phuong.jpg', name:'Đơn Phương', author:'Keigo Higashino', price:165000, type:'0'},
    {productid:1455, cate:'b', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/139/am-anh-kinh-hoang.jpg', name:'Ám Ảnh Kinh Hoàng', author:'Mike Omer', price:190000, type:'0'},
    {productid:1456, cate:'b', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/139/toi-ac-cam-lang.jpg', name:'Tội Ác Câm Lặng', author:'Melinda Leigh', price:145000, type:'0'},
    {productid:1457, cate:'b', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/139/am-muu-thay-nao.jpg', name:'Âm Mưu Thay Não', author:'Giản Tư Hải', price:129000, type:'0'},
    {productid:1458, cate:'c', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/157/yeu-khong-ben-bo.jpg', name:'Yêu Không Bến Bờ', author:'Bất Kinh Ngữ', price:126000, type:'0'},
    {productid:1459, cate:'c', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/223/mot-vi-du-xoang.png', name:'Một Ví Dụ Xoàng', author:'Nguyễn Bình Phương', price:150000, type:'0'},
    {productid:1460, cate:'c', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/222/vien-ngoc-ke-ben.jpg', name:'Viên Ngọc Kề Bên', author:'Khốn Ỷ Nguy Lâu', price:135000, type:'0'},
    {productid:1461, cate:'c', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/222/khac-cot-ghi-tam.jpg', name:'Khắc Cốt Ghi Tâm', author:'Jacqueline Woodson', price:88000, type:'0'},
    {productid:1462, cate:'c', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/222/toi-van-song.jpg', name:'Tôi Vẫn Sống', author:'Kate Alice Marshall', price:165000, type:'0'},
    {productid:1463, cate:'c', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/222/sau-anh.jpg', name:'Sau Anh', author:'Jojo Moyes', price:190000, type:'0'},
    {productid:1464, cate:'c', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/222/doi-ban-tay-siet-chat.jpg', name:'Đôi Bàn Tay Siết Chặt', author:'Ayuu', price:123000, type:'0'},
    {productid:1465, cate:'c', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/222/thung-lung-bat-hanh.jpg', name:'Thung Lũng Bất Hạnh', author:'Agatha Christie', price:120000, type:'1'},
    {productid:1466, cate:'c', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/222/sac-xanh-con-mai.jpg', name:'Sắc Xanh Còn Mãi', author:'Otsuichi', price:89000, type:'0'},
    {productid:1467, cate:'d', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/145/shin-cau-be-but-chi-tap-17.jpg', name:'Shin Tập 17', author:'Yoshito Usui', price:19000, type:'0'},
    {productid:1468, cate:'d', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/132/shin-cau-be-but-chi-tap-6.jpg', name:'Shin Tập 6', author:'Yoshito Usui', price:19000, type:'0'},
    {productid:1469, cate:'d', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/132/shin-cau-be-but-chi-tap-2.jpg', name:'Shin Tập 2', author:'Yoshito Usui', price:19000, type:'0'},
    {productid:1470, cate:'d', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/132/shin-cau-be-but-chi-tap-10.jpg', name:'Shin Tập 10', author:'Yoshito Usui', price:19000, type:'0'},
    {productid:1471, cate:'d', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/132/shin-cau-be-but-chi-tap-11.jpg', name:'Shin Tập 11', author:'Yoshito Usui', price:19000, type:'0'},
    {productid:1472, cate:'d', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/145/shin-cau-be-but-chi-tap-19.jpg', name:'Shin Tập 19', author:'Yoshito Usui', price:19000, type:'0'},
    {productid:1473, cate:'d', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/145/shin-cau-be-but-chi-tap-24.jpg', name:'Shin Tập 24', author:'Yoshito Usui', price:19000, type:'0'},
    {productid:1474, cate:'d', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/145/shin-cau-be-but-chi-tap-21.jpg', name:'Shin Tập 21', author:'Yoshito Usui', price:19000, type:'0'},
    {productid:1475, cate:'d', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/127/doraemon-dien-anh-mau-4-nobita-tham-hiem-vung-dat-moi.jpg', name:'Doraemon Tập 4', author:'Fujiko F Fujio', price:50000, type:'0'},
    {productid:1476, cate:'d', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/127/doraemon-dien-anh-mau-2-nobita-va-lich-su-khai-pha-vu-tru.jpg', name:'Doraemon Tập 2', author:'Fujiko F Fujio', price:50000, type:'0'},
    {productid:1477, cate:'d', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/126/doraemon-dien-anh-mau-nobita-va-hiep-si-rong.jpg', name:'Doraemon Tập 9', author:'Fujiko F Fujio', price:50000, type:'0'},
    {productid:1478, cate:'d', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/126/doraemon-dien-anh-mau-nobita-va-cuoc-chien-vu-tru.jpg', name:'Doraemon Tập 7', author:'Fujiko F Fujio', price:50000, type:'0'},
    {productid:1479, cate:'d', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/126/doraemon-dien-anh-mau-nobita-va-chuyen-phieu-luu-vao-xu-quy.jpg', name:'Doraemon Tập 6', author:'Fujiko F Fujio', price:50000, type:'0'},
    {productid:1480, cate:'d', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/221/conan-hoat-hinh-mau-nha-ao-thuat-voi-doi-canh-bac-tap-2.jpg', name:'Conan Tập 2', author:'Gosho Aoyama', price:60000, type:'0'},
    {productid:1481, cate:'d', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/222/conan-hoat-hinh-mau-am-muu-tren-bien-1.jpg', name:'Conan Tập 1', author:'Gosho Aoyama', price:60000, type:'0'},
    {productid:1482, cate:'d', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/221/conan-hoat-hinh-mau-nha-ao-thuat-voi-doi-canh-bac-tap-1.jpg', name:'Conan Tập 3', author:'Gosho Aoyama', price:60000, type:'0'},
    {productid:1483, cate:'d', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/197/conan-hoat-hinh-mau-me-cung-trong-thanh-pho-co-tap-2.jpg', name:'Conan Tập 7', author:'Gosho Aoyama', price:60000, type:'0'},
    {productid:1484, cate:'d', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/193/conan-hoat-hinh-mau-nhung-giay-cuoi-cung-toi-thien-duong-tap-2.jpg', name:'Conan Tập 4', author:'Gosho Aoyama', price:60000, type:'0'},
    {productid:1485, cate:'d', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/191/conan-hoat-hinh-mau-thu-pham-trong-doi-mat-tap-2.jpg', name:'Conan Tập 5', author:'Gosho Aoyama', price:60000, type:'0'},
    {productid:1486, cate:'d', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/189/conan-hoat-hinh-mau-ao-thuat-gia-cuoi-cung-cua-the-ki-tap-1.jpg', name:'Conan Tập 6', author:'Gosho Aoyama', price:60000, type:'0'},
    {productid:1487, cate:'d', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/188/conan-hoat-hinh-mau-muc-tieu-thu-14-tap-2.jpg', name:'Conan Tập 8', author:'Gosho Aoyama', price:60000, type:'0'},
    {productid:1488, cate:'d', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/141/conan-hoat-hinh-mau-hoa-huong-duong-trong-bien-lua-tap-1.jpg', name:'Conan Tập 9', author:'Gosho Aoyama', price:60000, type:'0'},
    {productid:1489, cate:'d', img:'https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/146/conan-hoat-hinh-mau-tay-ban-tia-tap-2.jpg', name:'Conan Tập 10', author:'Gosho Aoyama', price:60000, type:'1'}
];

let bestSelling=[];
let tinhcamArray=[];
let thieunhiArray=[];
let trinhthamArray=[];
let truyentranhArray=[];

for(var i=0;i<JSON.parse(localStorage.getItem('product')).length;i++)
    if(JSON.parse(localStorage.getItem('product'))[i].type==='1')
        bestSelling.unshift(JSON.parse(localStorage.getItem('product'))[i]);

for(var i=0;i<JSON.parse(localStorage.getItem('product')).length;i++){
    switch(JSON.parse(localStorage.getItem('product'))[i].cate)
        {
            case 'a':
                thieunhiArray.unshift(JSON.parse(localStorage.getItem('product'))[i]);
                break;
            case 'b': 	
                trinhthamArray.unshift(JSON.parse(localStorage.getItem('product'))[i]);
                 break;	
            case 'c': 
                tinhcamArray.unshift(JSON.parse(localStorage.getItem('product'))[i]);
                break;
            case 'd': 
                truyentranhArray.unshift(JSON.parse(localStorage.getItem('product'))[i]);
                break;
            default :
                break;
        }
}

function chunkArray(a){
    var index ;
    var myChunk;
    var arrayLength = a.length;
    var tempArray = [];
    for (index = 0; index < arrayLength; index += 12) {
        myChunk = a.slice(index, index+12);
        tempArray.push(myChunk);
    }
    return tempArray;
}
