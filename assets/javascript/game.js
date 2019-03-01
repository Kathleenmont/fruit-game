// global variables

var target = 0;
var wins = 0;
var losses = 0;
var yourScore = 0;
var added = 0;
var message;


// make 1st fruit element add class and image src
var blackberry= $("<img>");
blackberry.addClass("fruit blackberry-image");
blackberry.attr("src", "assets/images/blackberry.png");
$("#blackberry").append(blackberry);


// make 2st fruit element add class and image
var grapefruit = $("<img>");
grapefruit.addClass("fruit grapefruit-image");
grapefruit.attr("src", "assets/images/grapefruit.png");
$("#grapefruit").append(grapefruit);

// make 3rd fruit element add class and image
var banana = $("<img>");
banana.addClass("fruit banana-image");
banana.attr("src", "assets/images/banana.png");
$("#banana").append(banana);

// make 4th fruit element add class and image
var pomegranate = $("<img>");
pomegranate.addClass("fruit pomegranate-image");
pomegranate.attr("src", "assets/images/pomegranate.png");
$("#pomegranate").append(pomegranate);


// make a render function that updates global variables wins/losses points ect

function rendor() {
    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#target-number").text(target);
    $("#your-total").text(yourScore);
    $("#message").text(message);
    $("#added").text(added);
}



// create a start game function and in it put :
startGame();
function startGame() {
    // make a target variable set it to random number between 19-120 
    target = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

    // also put in it a random number gererating variable for each fruit
    blackberryPoints = Math.floor(Math.random() * (12)) + 1;

    // also put in it a random number gererating variable for each fruit
    grapefruitPoints = Math.floor(Math.random() * (12)) + 1;

    // also put in it a random number gererating variable for each fruit
    bananaPoints = Math.floor(Math.random() * (12)) + 1;

    // also put in it a random number gererating variable for each fruit
    pomegranatePoints = Math.floor(Math.random() * (12)) + 1;

    // set start game points
    yourScore = 0;
    added = 0;

    

    rendor();

    // make 4 onclick functions, one for each fruit
    $(".blackberry-image").on("click", function () {
        // make a counter variable that stores (concatenates) points when fruit is clicked put in each fruit
        yourScore += blackberryPoints;
        added = blackberryPoints;
        rendor();
    });

    $(".grapefruit-image").on("click", function () {
        yourScore += grapefruitPoints;
        added = grapefruitPoints;
        rendor();
    });

    $(".banana-image").on("click", function () {
        yourScore += bananaPoints;
        added = bananaPoints;
        rendor();
    
    });

    $(".pomegranate-image").on("click", function () {
        yourScore += pomegranatePoints;
        added = pomegranatePoints;
        rendor();
        
    });
    // on click event for all fruits with logic for game and points updates if win/lose
    $(".fruit").on("click", function () {
        if (target === yourScore) {
            wins++;
            message = "You won that round! Way to go!"
            startGame();
        } else if (target < yourScore) {
            losses++;
            message = "You lost that one!"
            startGame();
        }

    });

    

}