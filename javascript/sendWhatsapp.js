window.onload = document.getElementById("submit-form").addEventListener("click", sendWhatsapp);
window.onload = document.getElementById("msg").addEventListener("click", clearTextField);
window.onload = document.getElementById("msg").addEventListener("focusin", clearTextField);

function sendWhatsapp() {
    const msg = document.getElementById("msg").value;
    const wsCommand = "https://api.whatsapp.com/send?phone=5521972244257&text=" + msg;
    window.open(wsCommand);
    document.getElementById("msg").value = "Thank you for the message ❤️";
}

function clearTextField() {
    document.getElementById("msg").value = "";
}