$(document).ready(function () {

const data = [];

const escape =  function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

const timeSinceTweet = (unix) => {
  return moment(unix).fromNow();
};

const createTweetElement = function(tweet) {
  let $tweet = 
  `<article class="stylized-box">
  <div class="tweet-body-top">
  <div class="tweet-body">
  <div class="user-info">
  <div><img class="user-icon" src=${escape(tweet.user.avatars)}></div>
  <h4 class="real-name">${escape(tweet.user.name)}</h4>
  </div>
  <h5 class="username">${escape(tweet.user.handle)}</h5>
  </div>
  <p class="printed-tweet">${escape(tweet.content.text)}</p>
  </div>
  <br>
  <div class="tweet-body-bottom">
  <p class="date-posted">${escape(timeSinceTweet(tweet.created_at))}</p>
  <div class="small-icons">
  <i class="fas fa-flag"></i>
  <i class="fas fa-retweet"></i>
  <i class="far fa-heart"></i>
  </div>
  </div>
  </article>`;
  return $tweet;
}

const loadTweets = function() {
  $.get("/tweets", function(res) {
    renderTweets(res);
  })
};

const renderTweets = function(tweets) {
  for (let tweet of tweets) {
    let newTweet = createTweetElement(tweet);
    $('#tweet-container').append(newTweet);
  }
};

$('#submit-new-tweet').submit(function(event) {
  event.preventDefault();
  if (!$('#tweet-text').val()) {
    $('#error-container').html('&#33; Please enter some text before submitting &#33;').slideDown().delay(2750).slideUp();
  } else if ($('#tweet-text').val().length > 140) {
    $('#error-container').html('&#33; Tweet must be less than 140 characters &#33;').slideDown().delay(2750).slideUp();
  } else {
  $.ajax({
    url: '/tweets', 
    method: 'POST', 
    data: $('#submit-new-tweet').serialize()})
    .then(() => {
      $('#tweet-container').empty();
      loadTweets();
    })
    .then(() => {
      this.reset();
    })
  }
});

  renderTweets(data);
  loadTweets();
});
