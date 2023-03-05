let inputLoginEmail = document.querySelector('.input-login-email');
let inputLoginText = document.querySelector('.input-login-text');
let btn = document.querySelector('button');




btn.addEventListener('click',function () {
    let a = inputLoginEmail.value;
    let b = inputLoginText.value;
    if(a==b){
        console.log('TRUE !!');

    }
    /* console.log('event.target');*/
})