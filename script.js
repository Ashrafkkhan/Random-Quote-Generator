const quotes = [
    "The best way to get started is to quit talking and begin doing.",
    "Don't let yesterday take up too much of today.",
    "It's not whether you get knocked down, it's whether you get up.",
    "If you are working on something exciting, it will keep you motivated.",
    "Success is not in what you have, but who you are.",
    "Your limitation—it's only your imagination.",
    "Push yourself, because no one else is going to do it for you."
];

const quoteText = document.getElementById('quote');
const newQuoteBtn = document.getElementById('new-quote');

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function changeBackground() {
    const colors = ["#FFCDD2","#F8BBD0","#E1BEE7","#D1C4E9","#C5CAE9","#BBDEFB","#B3E5FC","#B2EBF2","#B2DFDB","#C8E6C9"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

newQuoteBtn.addEventListener('click', () => {
    quoteText.textContent = getRandomQuote();
    changeBackground();
});
