// Write code below this line
var myPet = {
    species: "Labrador",
    name: "Zuco",
    legs: 4,
    friends: ["Bijeli", "Crni"]
};
function myFunction(myObj) {
    return myObj;
}
// Write code above this line
console.log(myFunction(myPet));
module.exports = { myPet, myFunction };