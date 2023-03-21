let inputLoginEmail = document.querySelector('.input-login-email');
let inputLogin = document.querySelector('.title pswrd');
let inputLoginConfirm = document.querySelector('.title pswrd');

let btn = document.querySelector('button');




btn.addEventListener('click',function () {
    if(!inputLoginEmail|| !inputLogin){
        alert('пустое поле');
    }

    /* console.log('event.target');*/
})