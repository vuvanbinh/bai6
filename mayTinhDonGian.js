function phepcong(){
    let a = +document.getElementById('giatri1').value;
    let b = +document.getElementById('giatri2').value;
    let c =(a + b);
    alert('Kết quả là:' +' '+c);
}
function pheptru(){
    let a = +document.getElementById('giatri1').value;
    let b = +document.getElementById('giatri2').value;
    let c =(a - b);
    alert('Kết quả là:' +' '+c);
}
function phepnhan(){
    let a = +document.getElementById('giatri1').value;
    let b = +document.getElementById('giatri2').value;
    let c =(a * b);
    alert('Kết quả là:' +' '+c);
}
function phepchia(){
    let a = +document.getElementById('giatri1').value;
    let b = +document.getElementById('giatri2').value;
    let c =(a / b);
    alert('Kết quả là:' +' '+c);
    // document.getElementById('ketqua').innerHTML = c;
//em mốn nhập kết quả vào ô input có id='ketqua' mà không được :(
}
