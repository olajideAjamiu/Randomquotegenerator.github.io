const quoteEl = document.getElementById('aquote');
const authorEl = document.getElementById('author');
const btnEl = document.getElementById('btn');
const apiURL ="https://api.quotable.io/random"

async function getQuote() {
    try {
        btnEl.innerText = "Loading Quote...";
        btnEl.disabled = true;
        quoteEl.innerText = "updating quote...";
        authorEl.innerText = "updatiing...";
   const response = await fetch(apiURL);
   const data =  await response.json();
   const quoteContent = data.content;
   const quoteAuthor = data.author;
   quoteEl.innerText = quoteContent;
   authorEl.innerText = "~ " + quoteAuthor;
   btnEl.innerText = "GET QUOTE";
        btnEl.disabled = false ;

    } catch (error) {
        console.log(error);
        quoteEl.innerText = "An error occured ";
   authorEl.display = "none";
   btnEl.disabled = true;

    }


    
}

btnEl.addEventListener('click', getQuote);
