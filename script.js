let inputLoginEmail = document.querySelector('.input-login-email');
let inputLoginText = document.querySelector('.input-login-text');
let btn = document.querySelector('button');
let input1 = document.querySelector('.input-login-email');

console.log(input1);
console.log(input1.value);

btn.addEventListener('click',function () {
    try {
        if(!input1.value){
            throw new Error('Пустое поле')
        } else {
            checkInput(input1);
        }
    } catch (error) {
        alert(error.message);
    }
})

input1.addEventListener('click',function (){
    input1.value = "+375297756871"
})
