// Write code below this line
var players = {
    7: "Muhamed Besic",
    10: "Miralem Pjanic",
    11: "Edin Dzeko",
};

function myFunction(myObj) {
    var playerNumber = players["10"];
    var player = playerNumber;
    return player;
}
console.log(myFunction(players));
// Write code above this
module.exports = { players, myFunction };