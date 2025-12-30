const correct_username = "efe_haliloglu";
const correct_password = "12345";

const form = document.getElementById("giris_formu");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
        e.preventDefault(); // sayfa yenilenmesin

const username = document.getElementById("kullanici_adi").value;
const password = document.getElementById("sifre").value;

if(username == correct_username && password == correct_password){
    message.textContent = `Tekrar hoşgeldin ${username}`;
}else{
    message.textContent = `Şifre veya kullanıcı adı hatalı! `;
}

});