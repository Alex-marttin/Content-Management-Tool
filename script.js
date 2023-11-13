document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('textIn');
    const addTextBtn = document.getElementById('textBtn');
    const imageInput = document.getElementById('imageIn');
    const addImageBtn = document.getElementById('imageBtn');
    const videoUrlInput = document.getElementById('videoLink');
    const addVideoBtn = document.getElementById('videoBtn');
    const contentContainer = document.getElementById('contentContainer');

    textBtn.addEventListener('click', () => {
        const text = textInput.value;
        const paragraph = document.createElement('p');
        paragraph.textContent = text;
        contentContainer.appendChild(paragraph);
        textInput.value = '';
    });

    imageBtn.addEventListener('click', () => {
        const image = document.createElement('img');
        image.src = URL.createObjectURL(imageInput.files[0]);
        contentContainer.appendChild(image);
        imageInput.value = '';
    });

     videoBtn.addEventListener('click', () => {
        const videoUrl = videoUrlInput.value;
        const video = document.createElement('iframe');
        video.src = videoUrl;
        video.setAttribute('allowfullscreen', 'true');
        contentContainer.appendChild(video);
        videoUrlInput.value = '';
    });
});