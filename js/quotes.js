const quotes = [
{
    quote : "quote1",
    author : "author1"
},

{
    quote : "quote2",
    author : "author2"
},
{
    quote : "quote3",
    author : "author3"
},
{
    quote : "quote4",
    author : "author4"
},
{
    quote : "quote5",
    author : "author5"
},
{
    quote : "quote6",
    author : "author6"
},
{
    quote : "quote7",
    author : "author7"
},
{
    quote : "quote8",
    author : "author8"
},
{
    quote : "quote9",
    author : "author9"
},
{
    quote : "quote10",
    author : "author10"
}

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const leng = quotes.length;

setQuote();


function setQuote(){
    if(localStorage.getItem("todaysQuote") == null){
        const today = quotes[Math.floor(Math.random() * leng)];
        setInterval(todaysQuote(today),86400 );
    }
    const todayQuote = localStorage.getItem("todaysQuote").toString();
    quote.innerText = todayQuote.quote;
    author.innerText = todayQuote.author;
}

function todaysQuote(today){
    localStorage.setItem("todaysQuote", today);
}
