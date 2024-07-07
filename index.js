document.addEventListener('DOMContentLoaded', function () {
    const titleText = document.createElement('h1');
    titleText.innerHTML='I love JavaScript';

    const imgProgramming = document.createElement('img');
    imgProgramming.src = './assets/js.jpeg';
    imgProgramming.alt = 'Javascript logo';

    document.body.appendChild(titleText);
    document.body.appendChild(imgProgramming);

});