// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

const topics = document.querySelector(".topics");
let topicsArray = [];

axios
  .get("https://lambda-times-api.herokuapp.com/topics")
  .then((res) => {
    // if the call is successful, it runs this callback
    // Remember, res is an object, res.data is an array
    // console.log("Here is the res: ", res);

    topicsArray = res.data.topics;

    topicsArray.forEach((e) => {
      //create element
      let topicDiv = document.createElement("div");
      //add styling
      topicDiv.classList.add("tab");
      //add content
      topicDiv.textContent = e;
      //append to DOM
      topics.appendChild(topicDiv);
    });
  })

  .catch((err) => {
    // if the call is unsuccessful, it runs this callback
    console.log("Error: ", err);
  });
