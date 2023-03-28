export const BreakingBad = async(element) => {
    document.querySelector('#app-title').innerHTML = "BreakingBad App"
    element.innerHTML = "Loading...";

    const quoteLabel = document.createElement('blockquote');
    const authorLabel = document.createElement('h3');
    const nextQuoteButton = document.createElement('button');
    nextQuoteButton.innerText = "Next Quote";

    const renderQuote = (data) => {
        quoteLabel.innerHTML = data.quote;
        authorLabel.innerHTML = data.author;

        element.replaceChildren(quoteLabel, authorLabel, nextQuoteButton);
    }

    nextQuoteButton.addEventListener('click', async() => {
        element.innerHTML = "Loading...";
        const quote = await fetchQuote();
        renderQuote(quote);
    });

    fetchQuote()
        .then(renderQuote);
}

const fetchQuote = async() => {
    const resp = await fetch("https://api.breakingbadquotes.xyz/v1/quotes");
    const data = await resp.json();

    return data[0];
}