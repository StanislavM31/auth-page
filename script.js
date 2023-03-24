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
function checkInput(value){
    ///^[a-z\._\-]+@[a-z]+\.[a-z]{1,5}$/gm.test(value)==false || /\+(375)[2-9]{2}[1-9]{7}$/gm.test(value)==false
    try {
        if((/[\w]+@+\w{4,5}.(com||ru)$/gm.test(value.value)) || /\+(375)[2-9]{2}[1-9]{7}$/gm.test(value.value)){
            alert(`${value.value} is valid`);
        } else{
            throw new Error('Email or Phone is NOT valid')
        }
    } catch (error) {
        alert(error.message);
    }
}