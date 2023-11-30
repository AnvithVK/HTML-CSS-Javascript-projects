function generateQuote(){
    var quotes = {"- Jules Renard, The Journal of Jules Renard":'"The truly free man is the one who can turn down an invitation to dinner without giving an excuse."',"-Anvith":'"Fuck My Life"'

    }

    var authors = Object.keys(quotes);

    var author = authors[Math.floor(Math.random()*authors.length)];
    console.log(authors);


    var quote = quotes[author];

    console.log(quote);

    document.getElementById("quote").innerHTML=quote;

    document.getElementById("author").innerHTML=author;
}