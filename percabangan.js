const prompt = require('prompt-sync')({ sigint: true });

const password = prompt('Enter password: ');
const validPassword = '12345' 

if(password === validPassword){
    console.log("Selamat datang bos!")
} else {
    console.log("Password Salah, coba lagi!")
} 

console.log("Terimakasih sudah menggunakan aplikasi kami")