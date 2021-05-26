const youtubeKey = "AIzaSyA6V2CKqNUsgK0b6n1xT0lUupO0YY1dR8M";
const youtubeUser = "UC_o4J6mjdUxpP2snJT4vGsQ";
const url = "https://www.googleapis.com/youtube/v3";
const subCount = document.getElementById("subCount");

let getSubscriber = () => {
  fetch(`${url}/channels?part=statistics&id=${youtubeUser}&key=${youtubeKey}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      subCount.innerHTML = data.items[0].statistics.subscriberCount;
    });
};

getSubscriber();
