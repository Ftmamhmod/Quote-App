
var quotes = [`“Be the change that you wish to see in the world.”`, `“If you tell the truth, you don't have to remember anything.”`, `“To live is the rarest thing in the world. Most people exist, that is all.” `, `“I have not failed. I've just found 10,000 ways that won't work.”  `, `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” `, `“If you can't explain it to a six year old, you don't understand it yourself.” `, `“If you only read the books that everyone else is reading, you can only think what everyone else is thinking.” `, `“Life isn't about finding yourself. Life is about creating yourself.” `];
var author = [`― Mahatma Gandhi`, `― Mark Twain`,` ― Oscar Wilde`,`― Thomas A. Edison`,` ― Albert Einstein`,` ― Albert Einstein`,` ― Haruki Murakami, Norwegian Wood`,`― George Bernard Shaw`];
// function generateQuote() {

//     document.getElementById('quoteOutput').innerHTML = (`${quotes[1]}`);
// };




function getQuote() {

    var choices = Math.floor(Math.random() * quotes.length);
    document.querySelector('#quoteOutput').innerHTML = (`${quotes[choices]}`);
    document.querySelector('#authorOutput').innerHTML = (`${author[choices]}`);
    console.log([choices])
}
