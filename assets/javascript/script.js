var correct = 0;
var incorrect = 0;
var cAnswer = null;
var pAnswer = null;
var i = 0;
var interval = null;
var questions = [
    {
        q: "Do I look good in red?",
        a: ["Yes, indeed.", "&%@# no!", "Waffle."],
        ca: "Yes, indeed."
    },
    {
        q: "What brings out the best in a man?",
        a: ["Red lingerie!", "A challenge.", "HM Secret Service."],
        ca: "A challenge."
    },
    {
        q: "How many years did I take dance lessons?",
        a: ["Eleven years.", "Five years.", "Your whole life."],
        ca: "Eleven years."
    }
];
$(".functions").on("click", "#start-button", function () {
    gameLoad();

})
$("#start-button").on("click", function () {
    gameLoad();

})
$(".functions").on("click", "#restart-button", function () {
    reStart();

})
var counter = 8;
function endGame() {
    clearInterval(interval);
    $("#the-timer").text("");
    $("#results").text("You guessed " + correct + " correctly and " + incorrect + " incorrectly");
    $("#g-over").text("GAME OVER!");
    $("#restart-button").remove();
    $(".functions").append('<a class="btn btn-primary btn-lg" id="restart-button" role="button">Restart!</a>');
}

function run() {
    clearInterval(interval)
    interval = setInterval(timer, 1000);

}

function timer() {

    counter--;
    $("#the-timer").text(counter)
    if (counter === 0) {
        endGame();
    }
}
function reStart() {
    clearInterval(interval);
    i = 0;
    correct = 0;
    incorrect = 0;
    $("#restart-button").remove();
    $("#the-question").text('');
    $("#an-a").html('');
    $("#an-b").html('');
    $("#an-c").html('');
    $("#results").text("");
    $("#g-over").text("");
    $(".functions").append('<a class="btn btn-primary btn-lg" id="start-button" role="button">Start!</a>');

}
function gameLoad() {
    $("#start-button").remove();
    i = 0
    qaFill();
}

function qaFill() {
    clearInterval(interval);
    $("#the-question").text(questions[i].q);
    $("#an-a").html(questions[i].a[0]);
    $("#an-b").html(questions[i].a[1]);
    $("#an-c").html(questions[i].a[2]);
    run();
}

//I know this could be done A LOT more cleanly.
$("#an-a").on("click", function () {
    counter = 8;
    pAnswer = questions[i].a[0];
    cAnswer = questions[i].ca;
    if (pAnswer === cAnswer) {
        correct++;
        i++;
        $("#c-or-i").text(" correctly.");
    } else {
        i++;
        incorrect++;
        $("#c-or-i").text(" incorrectly.");
    }
    if (correct + incorrect != 3) {
        qaFill()
    }
    if (correct + incorrect === 3) {
        endGame();

    }

})

$("#an-b").on("click", function () {
    counter = 8;
    pAnswer = questions[i].a[1];
    cAnswer = questions[i].ca;
    if (pAnswer === cAnswer) {
        correct++;
        i++;
        $("#c-or-i").text(" correctly.");
    } else {
        i++;
        incorrect++;
        $("#c-or-i").text(" incorrectly.");
    }
    if (correct + incorrect != 3) {
        // clearInterval(interval);
        qaFill()
    }
    if (correct + incorrect === 3) {
        endGame();

    }
})

$("#an-c").on("click", function () {

    counter = 8;
    pAnswer = questions[i].a[2];
    cAnswer = questions[i].ca;
    if (pAnswer === cAnswer) {
        correct++;
        i++;
        $("#c-or-i").text(" correctly.");
    } else {
        i++;
        incorrect++;
        $("#c-or-i").text(" incorrectly.");;
    }
    if (correct + incorrect != 3) {
        // clearInterval(interrval);
        qaFill()
    }
    if (correct + incorrect === 3) {
        endGame();

    }
})


