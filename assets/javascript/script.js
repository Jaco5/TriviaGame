var correct = 0;
var incorrect = 0;
var cAnswer = null;
var pAnswer = null;
var i = 0;

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

$("#start-button").on("click", function () {
    gameLoad();
    timer();
})
$("#restart-button").on("click", function () {
    gameLoad();
    timer();
})

   
// function timer(number) {
//     
// }

function gameLoad() {
    $("#start-button").remove();
    i = 0
    qaFill();
}

function qaFill() {

    $("#the-question").text(questions[i].q);
    $("#an-a").html(questions[i].a[0]);
    $("#an-b").html(questions[i].a[1]);
    $("#an-c").html(questions[i].a[2]);
    timer()
}


$("#an-a").on("click", function () {
    pAnswer = questions[i].a[0]
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
        window.location = "winscreen.html";
       
    }

})

$("#an-b").on("click", function () {
    pAnswer = questions[i].a[1]
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
        window.location = "winscreen.html";
        
    }
})

$("#an-c").on("click", function () {
    pAnswer = questions[i].a[2]
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
        qaFill()
    }
    if (correct + incorrect === 3) {
        window.location = "winscreen.html";
        
    }
})


