$(init);


function init(){
    $("button").click(buyPrize);

}

function buyPrize() {


    var ticketsLeft = $("#tickets").val();
    ticketsLeft=parseInt(ticketsLeft);

    var prizeCost = $("#prize").val();
    prizeCost = parseInt(prizeCost);

    while(ticketsLeft >5){

    $("p").append("Bought prize for " + prizeCost);

    ticketsLeft = ticketsLeft -prizeCost;

    $("#tickets").val(ticketsLeft);
}

}