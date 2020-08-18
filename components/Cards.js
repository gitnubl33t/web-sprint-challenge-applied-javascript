// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

let cardsDiv = document.querySelector(".cards-container");

axios
  .get("https://lambda-times-api.herokuapp.com/articles")
  .then((res) => {
    // if the call is successful, it runs this callback
    // Remember, res is an object, res.data is an array
    // console.log("Here is the res: ", res);

    let bootstrap = res.data.articles.bootstrap;
    let javascript = res.data.articles.javascript;
    let jquery = res.data.articles.jquery;
    let node = res.data.articles.node;
    let tech = res.data.articles.tech;
    let articles = res.data.articles;

    bootstrap.forEach((i) => {
      articleCreator(i);
    });

    javascript.forEach((i) => {
      articleCreator(i);
    });

    jquery.forEach((i) => {
      articleCreator(i);
    });

    node.forEach((i) => {
      articleCreator(i);
    });

    tech.forEach((i) => {
      articleCreator(i);
    });
  })

  .catch((err) => {
    // if the call is unsuccessful, it runs this callback
    console.log("Error: ", err);
  });

function articleCreator(articleObj) {
  //create new elements
  const articleCard = document.createElement("div");
  const articleHead = document.createElement("div");
  const authorDiv = document.createElement("div");
  const imgDiv = document.createElement("div");
  const authorImg = document.createElement("img");
  const authorSig = document.createElement("span");

  //append to the DOM
  articleCard.appendChild(articleHead);
  articleCard.appendChild(authorDiv);
  authorDiv.appendChild(imgDiv);
  imgDiv.appendChild(authorImg);
  authorDiv.appendChild(authorSig);
  cardsDiv.appendChild(articleCard);

  //add styling
  articleCard.className = "card";
  articleHead.className = "headline";
  authorDiv.className = "author";
  imgDiv.className = "img-container";

  //add text content
  articleHead.textContent = articleObj.headline;
  authorImg.src = articleObj.authorPhoto;
  authorSig.textContent = authorSig;

  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.

  articleCard.addEventListener("click", (e) => {
    console.log(articleHead.textContent);
  });
}
