var correct = 0;
var incorrect = 0;
var cAnswer = null;
var pAnswer = null;
var questions = [
    { q: "What color is blue?",
      a: ["blue","red","green"],
      ca: "blue"},
    { q: "What is rice?",
      a: ["a legume","a grain","a bean"],
      ca: "a grain"},
    { q: "You paint with ____",
      a: ["charcoal", "graphite", "paint"],
      ca: "paint" }
  ];

$("#start-button").on("click", function() {
    gameLoad();
})

function gameLoad() {
    $("#start-button").remove();
    $(".jumbotron").append('<a class="btn btn-primary btn-lg" id="start-button" role="button">ReStart!</a>');
    formFill();
}

function qaFill() {
    $("#the-question").text(questions[0].q);
    $("#an-a").html(questions[0].a[0]);
    $("#an-b").html(questions[0].a[1]);
    $("#an-c").html(questions[0].a[2]);
    cAnswer = questions[0].ca;
    pAnswer = "//onclick";
    if (pAnswer === cAnswer) {
        correct++
        //some kind of clear so the Q&A can be reset
        qaFill();
    }
}


