var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE 

    function createString(x, y){
      var hitZoneSize = 25;
      var damageFromObstacle = 10;
      var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
      sawBladeHitZone.x = x;
      sawBladeHitZone.y = y;
      game.addGameItem(sawBladeHitZone);
      var obstacleImage = draw.bitmap("img/orange-string-removebg-preview.png");
      sawBladeHitZone.addChild(obstacleImage);
      obstacleImage.x = -25
      obstacleImage.y = -25
      obstacleImage.scaleX = 0.125;
      obstacleImage.scaleY = 0.125;
    }

    function createEnemy(x, y, velocity) {
      var enemy = game.createGameItem("enemy", 25);
      var redSquare = draw.rect(50, 50, "red");
      redSquare.x = -25;
      redSquare.y = -25;
      enemy.addChild(redSquare);
      enemy.x = x;
      enemy.y = groundY - y;
      game.addGameItem(enemy);
      enemy.velocityX = velocity ?? -1;
      enemy.rotationalVelocity = 1;
      enemy.onPlayerCollision = function () {
        game.changeIntegrity(-10);
      };
      enemy.onProjectileCollision = function () {
        game.increaseScore(100);
        enemy.fadeOut();
      };
    };

    function createReward(x, y, velocity) {
      var reward = game.createGameItem("reward", 25);
      var blueSquare = draw.rect(50, 50, "blue");
      blueSquare.x = -25;
      blueSquare.y = -25;
      reward.addChild(blueSquare);
      reward.x = x;
      reward.y = groundY - y;
      game.addGameItem(reward);
      reward.velocityX = velocity ?? -1;
      reward.rotationalVelocity = 1;
      reward.onPlayerCollision = function () {
        game.changeIntegrity(10);
        reward.fadeOut();
      };
      reward.onProjectileCollision = function () {
        reward.fadeOut();
      };
    };

    function createMarker(x, y, velocity, color) {
      var marker = game.createGameItem("marker", 25);
      var purpleSquare = draw.rect(50, 50, color);
      purpleSquare.x = -25;
      purpleSquare.y = -25;
      marker.addChild(purpleSquare);
      marker.x = x;
      marker.y = groundY - y;
      game.addGameItem(marker);
      marker.velocityX = velocity ?? -1;
      marker.rotationalVelocity = 1;
      marker.onPlayerCollision = function () {
        startLevel();
        marker.fadeOut();
      };
      marker.onProjectileCollision = function () {
        startLevel();
        marker.fadeOut();
      };      
    }

    function startLevel() {
      // TODO 13 goes below here

      if (currentLevel >= 0) {
        for (let i = 0; i < levelData[currentLevel].gameItems.length; i++) {         
          if (levelData[currentLevel].gameItems[i].type === "string") {
            createString(levelData[currentLevel].gameItems[i].x, levelData[currentLevel].gameItems[i].y);
          }
          else if (levelData[currentLevel].gameItems[i].type === "marker") {
            createMarker(levelData[currentLevel].gameItems[i].x, levelData[currentLevel].gameItems[i].y, levelData[currentLevel].speed, levelData[currentLevel].gameItems[i].color);
          }
          else if (levelData[currentLevel].gameItems[i].type === "enemy") {
            createEnemy(levelData[currentLevel].gameItems[i].x, levelData[currentLevel].gameItems[i].y, levelData[currentLevel].speed);
          }
          else if (levelData[currentLevel].gameItems[i].type === "reward") {
            createReward(levelData[currentLevel].gameItems[i].x, levelData[currentLevel].gameItems[i].y, levelData[currentLevel].speed);
          }
        }
      }

      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
          alert("Congratulations!");
        };
      }
    }
    if (currentLevel === 0) {
      startLevel();
    }
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
