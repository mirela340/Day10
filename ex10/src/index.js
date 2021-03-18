function myFunction() {
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            relase_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP",
            },
            gold: true,
        },
        002: {
            artist: "Djordje Balasevic",
            title: "Sevdalinka",
            relase_year: 2000,
            formats: {
                1: "CD",
                2: "LP",
                3: "Disk",
            },
        },
    };
    return myMusic;
}
myFunction()[2];
console.log(myFunction()[2]);
module.exports = myFunction;