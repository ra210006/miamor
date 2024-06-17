function checkPassword() {
    const password = document.getElementById('password').value;
    const media = {
        'besitos en el cuello': { type: 'image', id: 'image1' },
        'BESITOS EN EL CUELLO': { type: 'image', id: 'image1' },
        'besos': { type: 'image', id: 'image2' },
        'dondesea': { type: 'image', id: 'image3' },
        'DONDESEA': { type: 'image', id: 'image3' },
        'bañarnos': { type: 'image', id: 'image4' },
        'documento1': { type: 'pdf', id: 'pdf1' },
        'documento2': { type: 'pdf', id: 'pdf2' },
        // Añade más contraseñas e IDs de imágenes/PDFs según sea necesario
    };

    const mediaContainer = document.getElementById('media');
    const imageElements = document.querySelectorAll('#media img');
    const pdfElements = document.querySelectorAll('#media iframe');

    if (media[password]) {
        const item = media[password];

        // Oculta todas las imágenes y PDFs
        imageElements.forEach(img => img.style.display = 'none');
        pdfElements.forEach(pdf => pdf.style.display = 'none');

        // Muestra el elemento correspondiente
        if (item.type === 'image') {
            document.getElementById(item.id).style.display = 'block';
        } else if (item.type === 'pdf') {
            document.getElementById(item.id).style.display = 'block';
        }
        
        mediaContainer.style.display = 'block';
    } else {
        alert('Contraseña incorrecta, vuelve a intentarlo mi niña, ahora me debes 837987894728930 besitos más');
    }
}
