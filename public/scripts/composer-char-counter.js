$(document).ready(function () {
  console.log("The document is ready!");
  $("#tweet-text").on("input", function (event) {
    const totalCharacters = $(this).val().length;
    let charactersLeft = 140 - totalCharacters;
    const counter = $(this).parent().next("div").children(".counter");
    counter.text(charactersLeft);
    if (charactersLeft <= 0) {
      counter.addClass("red-alert");
    } else {
      counter.removeClass("red-alert");
    }
  });
});
