var correct = 0;
var incorrect = 0;
var cAnswer = null;
var pAnswer = null;
var i = 0;
var interval = null;
var questions = [
    {
        q: "What color is blue?",
        a: ["blue", "red", "green"],
        ca: "blue"
    },
    {
        q: "What is rice?",
        a: ["a legume", "a grain", "a bean"],
        ca: "a grain"
    },
    {
        q: "You paint with ____",
        a: ["charcoal", "graphite", "paint"],
        ca: "paint"
    }
];
$(".functions").on("click", "#start-button", function () {
    gameLoad();
    
})
$("#start-button").on("click",  function () {
    gameLoad();
    
})
$(".functions").on("click", "#restart-button", function () {

    reStart();
    
})
var counter= 8;
function endGame() {
    $("#the-timer").text("");
    $("#results").text("You guessed " + correct +" correctly and " + incorrect + " incorrectly");
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
    // clearInterval(interval);
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


