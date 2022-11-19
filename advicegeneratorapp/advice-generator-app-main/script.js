const adviceId = document.querySelector('#adviceId');
const adviceText = document.querySelector('#adviceText');
const submit = document.querySelector('#submit');

function getAdvice() {
fetch('https://api.adviceslip.com/advice').then(response => {
    return response.json();
}).then(adviceData => {
    const adviceId2 = adviceData.slip.id;
    const advice = adviceData.slip.advice;

    adviceId.textContent = `Advice #: ${adviceId2}`;
    adviceText.innerHTML = `<p>${advice}</p>`;

}).catch(error => {
    console.log(error);
})
}

submit.addEventListener('click', () => {
    getAdvice();
});

window.onload = () => {
    getAdvice();
};