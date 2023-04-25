let inputLoginEmail = document.querySelector('.input-login-email');
let inputLogin = document.querySelector('.title pswrd');
let inputLoginConfirm = document.querySelector('.title pswrd');

let btn = document.querySelector('button');




btn.addEventListener('click',function () {
    if(!inputLoginEmail){
        alert('пустое поле');
    }
    if(inputLogin !== inputLoginConfirm){
        alert('пароли не совпадают');
    }
})
