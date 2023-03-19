const qrAPIUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';

const inputBox = document.querySelector('.input-box');
const inputBtn = document.querySelector('.user-input button');
const qrBox = document.querySelector('.qr-box');
const qrContainer = document.querySelector('.qr-container');
const wrapper = document.querySelector('.wrapper');
let prevInput = inputBox.value;
inputBtn.addEventListener('click', () => {
    if (!inputBox.value) return;
    if(inputBox.value === prevInput){
        inputBtn.innerHTML = 'Already Generated'
        return;
    }
    prevInput = inputBox.value;
    inputBtn.innerHTML = 'Generating QR...';
    fetch(`${qrAPIUrl}${inputBox.value}`)
        .then((res) => {
            qrBox.src = res.url;
            qrContainer.classList.remove('no-display');
            wrapper.style.height = '390px';
            inputBtn.innerHTML = 'Generate QR';
        })
        .catch((err) => {
            inputBtn.innerHTML = 'Incorrect Input!';
            wrapper.style.height = '170px';
            qrBox.src = "";
            qrContainer.classList.add('no-display');
        })
});
inputBox.addEventListener('keyup', () => {
    if (!inputBox.value) {
        prevInput = "";
        wrapper.style.height = '170px';
        qrBox.src = "";
        qrContainer.classList.add('no-display');
        inputBtn.innerHTML = 'Generate QR';
    }
})



