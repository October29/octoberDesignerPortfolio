const brandDesign = document.getElementById('Diseno_de_marca');
const disenoWeb = document.getElementById('Diseno_web_signal');
const illustration = document.getElementById('Ilustracion');

brandDesign.addEventListener('click', fBrandDesign);
disenoWeb.addEventListener('click', fDisenoWeb);
illustration.addEventListener('click', fIllustration);

function fBrandDesign() {
    window.location.href = "../page/brandDesign.html";
}
function fDisenoWeb() {
    window.location.href = "../page/diseñoweb.html";
}
function fIllustration() {
    window.location.href = "../page/ilustracion.html";
}