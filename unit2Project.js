$(document).ready(init);

function init(){

    $(".choice").click(results);

    $("button").click(refresh);
}

var playerWin = 0;
var cpuWin =0;

var picture1 = $("#dino");
var picture2 = $("#hk");

//gather the computers pick and assign it to either rock/paper/scissors/lizard/spock using Math.Random
function computer () {
    var computerChoice = Math.floor(Math.random() * 5) + 1;

    if (computerChoice === 1) {
        computerChoice = "rock";
    }
    else if (computerChoice === 2) {
        computerChoice = "lizard";
    }
    else if (computerChoice === 3) {
        computerChoice = "spock";
    }
    else if (computerChoice === 4) {
        computerChoice = "scissors"
    }
    else{
        computerChoice = "paper"
    }
        return computerChoice;
}


//grab the computer choice and put it against the user input
function results(){
    var rock = $("#rock");
    var lizard = $("#lizard");
    var spock = $("#spock");
    var scissors = $("#scissors");
    var paper = $("#paper");

    //this.id grabs the users click input
    var outcome = this.id;
    var result = "";
    var cpu=computer();



    if (outcome === cpu){
        result = "Tie"
    }
    else if(outcome === "scissors" && cpu === "paper"){
        result = "Player wins the round";
        playerWin++;
    }
    else if(outcome === "paper" && cpu === "rock"){
        result = "Player wins the round";
        playerWin++;
    }
    else if(outcome === "rock" && cpu === "lizard"){
        result = "Player wins the round";
        playerWin++;
    }
    else if(outcome === "lizard" && cpu === "spock"){
        result = "Player wins the round";
    }
    else if(outcome === "spock" && cpu === "scissors"){
        result = "Player wins the round";
        playerWin++;
    }
    else if(outcome === "scissors" && cpu === "lizard"){
        result = "Player wins the round";
        playerWin++;
    }
    else if(outcome === "lizard" && cpu === "paper"){
        result = "Player wins the round";
        playerWin++;
    }
    else if(outcome === "paper" && cpu === "spock"){
        result = "Player wins the round";
        playerWin++;
    }
    else if(outcome === "spock" && cpu === "rock"){
        result = "Player wins the round";
        playerWin++;
    }
    else if(outcome === "rock" && cpu === "scissors"){
        result = "Player wins the round";
        playerWin++;
    }
    else{
        result = "Computer wins";
        cpuWin++;
    }

    $("#playerPick").text("You selected: " + outcome);
    $("#cpuPick").text("The computer selected: " +cpu);

    //output the winner below
    $("p").text(result);

    if(playerWin <=2 ){
        $("#player").val(playerWin);
    }
    if(cpuWin <=2){
        $("#cpu").val(cpuWin);
    }

    if(playerWin === 2){
        $("#gameOver").text("Player has won the game");
        picture1.classList.remove("hidden");
    }
    else if(cpuWin ===2){
        $("#gameOver").text("Computer has won the game")
    }

}

function refresh(){
location.reload();

}