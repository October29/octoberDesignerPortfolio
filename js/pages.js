const brandDesign = document.getElementById('Diseno_de_marca');
const disenoWeb = document.getElementById('Diseno_web_signal');
const illustration = document.getElementById('Ilustracion');
const whatsapp = document.getElementById('whatsapp');
const behance = document.getElementById('behance');
const instagram = document.getElementById('instagram');
const twitter = document.getElementById('twitter');
const telegram = document.getElementById('telegram');
const mailme = document.getElementById('mailme');

brandDesign.addEventListener('click', fBrandDesign);
disenoWeb.addEventListener('click', fDisenoWeb);
illustration.addEventListener('click', fIllustration);
whatsapp.addEventListener('click', fWhatsapp);
behance.addEventListener('click', fBehance);
instagram.addEventListener('click', fInstagram);
twitter.addEventListener('click', fTwitter);
telegram.addEventListener('click', fTelegram);
mailme.addEventListener('click', fMailme);

function fBrandDesign() {
    window.location.href = "./page/brandDesign.html";
}
function fDisenoWeb() {
    window.location.href = "./page/diseñoweb.html";
}
function fIllustration() {
    window.location.href = "./page/ilustracion.html";
}

function fWhatsapp() {
    window.location.href = "https://wa.me/573023918771?text=Tengo%20un%20proyecto%20en%20mente!";
}
function fBehance() {
    window.location.href = "https://www.behance.net/octoberdesigner";
}
function fInstagram() {
    window.location.href = "https://www.instagram.com/octoberdesigner/";
}
function fTwitter() {
    window.location.href = "https://twitter.com/OctoberDesigner";
}
function fTelegram() {
    window.location.href = "https://t.me/OctoberDesigner";
}
function fMailme() {
    window.location.href = "mailto:octoberdesigner@proton.me";
}