// script.js
function checkPassword() {
    const password = document.getElementById('password').value;
    const images = {
        'besitos en el cuello': 'image1',
        'besos': 'image2',
        'beso sorpresa': 'image3',
        'bañarnos': 'image4',
        // Añade más contraseñas e IDs de imágenes según sea necesario
    };

    if (images[password]) {
        document.querySelectorAll('#images img').forEach(img => img.style.display = 'none');
        document.getElementById(images[password]).style.display = 'block';
    } else {
        alert('Contraseña incorrecta, vuelve a intentarlo mi niña, ahora me debes 837987894728930 besitos mas');
    }
}
