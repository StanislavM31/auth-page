let inputLoginEmail = document.querySelector('.input-login-email');
let inputLogin = document.querySelector('.title pswrd');
let inputLoginConfirm = document.querySelector('.title pswrd');

let btn = document.querySelector('button');




btn.addEventListener('click',function () {
    if(!inputLoginEmail){
        alert('пустое email or phone number');
    }
})
document.querySelector('.pwdPhone').addEventListener('click',function (){
    document.querySelector('.pwdPhone').value = "+375297756871"
})

