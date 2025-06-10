document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('mensaje').value;

    const correo = "correo@empresa.com";
    const mailtoLink = `mailto:${correo}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(mensaje)}`;

    window.location.href = mailtoLink;
});