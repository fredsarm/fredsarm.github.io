window.onload = document.getElementById("submit-form").addEventListener("click", sendWhatsapp);

function sendWhatsapp() {
    const msg = document.getElementById("msg").value;
    const wsCommand = "https://api.whatsapp.com/send?phone=5521972244257&text=" + msg;
    window.open(wsCommand);
}

