document.getElementById('uploadBtn').addEventListener('click', function () {
    const fileInput = document.getElementById('photoInput');
    const descInput = document.getElementById('photoDesc');
    const gallery = document.getElementById('gallery');

    const file = fileInput.files[0];
    const desc = descInput.value.trim();

    if (!file) {
        alert('Please select a photo.');
        return;
    }

    if (!desc) {
        alert('Please enter a description.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        const photoCard = document.createElement('div');
        photoCard.classList.add('photo-card');

        const img = document.createElement('img');
        img.src = e.target.result;

        const p = document.createElement('p');
        p.textContent = desc;

        photoCard.appendChild(img);
        photoCard.appendChild(p);
        gallery.appendChild(photoCard);

        // Clear inputs
        fileInput.value = '';
        descInput.value = '';
    };
    reader.readAsDataURL(file);
});
