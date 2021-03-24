/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function () {
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}

const data = [
  {
    "user": {
      "name": "Robert Hunter",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@TheRealHunter1965"
    },
    "content": {
      "text": "Without love in the dream, it'll never come true..."
    },
    "created_at": 1461784933487
  },
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]


const createTweetElement = function(tweet) {
  let $tweet = 
  `<article class="stylized-box">
  <div class="tweet-body-top">
  <div class="tweet-body">
  <div class="user-info">
  <div><img class="user-icon" src=${tweet.user.avatars}></div>
  <h4 class="real-name">${tweet.user.name}</h4>
  </div>
  <h5 class="username">${tweet.user.handle}</h5>
  </div>
  <p class="printed-tweet">${tweet.content.text}</p>
  </div>
  <br>
  <div class="tweet-body-bottom">
  <p class="date-posted">${tweet.created_at}</p>
  <div class="small-icons">
  <i class="fas fa-flag"></i>
  <i class="fas fa-retweet"></i>
  <i class="far fa-heart"></i>
  </div>
  </div>
  </article>`;
  return $tweet;
}

const renderTweets = function(tweets) {
  for (let tweet of tweets) {
    let newTweet = createTweetElement(tweet);
    $('#tweet-container').append(newTweet);
  }
}

renderTweets(data);
});


// let $tweet = createTweetElement(tweetData);
// // Test / driver code (temporary)
// console.log($tweet); // to see what it looks like
// $('#tweet-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.