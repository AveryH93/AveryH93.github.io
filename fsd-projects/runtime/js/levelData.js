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
        speed: -1,
        gameItems: [
          { type: "string", x: 700, y: 275 },
          { type: "string", x: 300, y: 320 },
          { type: "string", x: 1333, y: 225 },
          { type: "enemy", x: 1200, y: 275 },
          { type: "enemy", x: 800, y: 300 },
          { type: "enemy", x: 400, y: 310 },
          { type: "reward", x: 2200, y: 300 },
          { type: "reward", x: 600, y: 300 },
          { type: "marker", x: 3000, y: 300, color: "purple" },
        ],
      },
      {
        name: "Christmas Tree Placement",
        number: 2,
        speed: -2,
        gameItems: [
          { type: "string", x: 700, y: 275 },
          { type: "string", x: 300, y: 320 },
          { type: "string", x: 1333, y: 225 },
          { type: "enemy", x: 1200, y: 275 },
          { type: "enemy", x: 800, y: 300 },
          { type: "enemy", x: 400, y: 310 },
          { type: "enemy", x: 800, y: 300 },
          { type: "reward", x: 300, y: 300 },
          { type: "reward", x: 400, y: 300 },
          { type: "reward", x: 500, y: 300 },
          { type: "reward", x: 600, y: 300 },
          { type: "reward", x: 2000, y: 300 },
          { type: "reward", x: 2100, y: 300 },
          { type: "reward", x: 2200, y: 300 },
          { type: "reward", x: 2300, y: 300 },
          { type: "reward", x: 2400, y: 300 },
          { type: "marker", x: 3000, y: 300, color: "yellow" },
        ],
      },
      {
        name: "Christmas Tree Lighting",
        number: 3,
        speed: -3,
        gameItems: [
          { type: "string", x: 700, y: 275 },
          { type: "string", x: 300, y: 320 },
          { type: "string", x: 1333, y: 225 },
          { type: "enemy", x: 1200, y: 275 },
          { type: "enemy", x: 800, y: 300 },
          { type: "enemy", x: 400, y: 310 },
          { type: "enemy", x: 800, y: 300 },
          { type: "reward", x: 2200, y: 300 },
          { type: "reward", x: 600, y: 300 },
          { type: "reward", x: 600, y: 300 },
          { type: "marker", x: 3000, y: 300, color: "white" },
        ],
      },
      {
        name: "Christmas Tree Decoration",
        number: 4,
        speed: -4,
        gameItems: [
          { type: "string", x: 700, y: 275 },
          { type: "string", x: 300, y: 320 },
          { type: "string", x: 1333, y: 225 },
          { type: "enemy", x: 1200, y: 275 },
          { type: "enemy", x: 800, y: 300 },
          { type: "enemy", x: 400, y: 310 },
          { type: "enemy", x: 800, y: 300 },
          { type: "reward", x: 2200, y: 300 },
          { type: "reward", x: 600, y: 300 },
          { type: "reward", x: 600, y: 300 },
          { type: "marker", x: 3000, y: 300, color: "green" },
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
