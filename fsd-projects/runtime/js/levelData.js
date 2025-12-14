var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Christmas Tree Picking",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "enemy", x: 1200, y: groundY - 275 },
          { type: "enemy", x: 800, y: groundY - 300 },
          { type: "enemy", x: 400, y: groundY - 310 },
          { type: "reward", x: 2200, y: groundY - 300 },
          { type: "reward", x: 600, y: groundY - 300 },
        ],
      },
      {
        name: "Christmas Tree Placement",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "enemy", x: 1200, y: groundY - 275 },
          { type: "enemy", x: 800, y: groundY - 300 },
          { type: "enemy", x: 400, y: groundY - 310 },
          { type: "enemy", x: 800, y: groundY - 300 },
          { type: "reward", x: 2200, y: groundY - 300 },
          { type: "reward", x: 600, y: groundY - 300 },
          { type: "reward", x: 600, y: groundY - 300 },
        ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
