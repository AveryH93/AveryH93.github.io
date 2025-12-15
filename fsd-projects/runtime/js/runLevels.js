var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;
    var groundX = game.groundX;

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
    //createString(700, 275);
    //createString(300, 320);
    //createString(1333, 225);

    function createEnemy(x, y) {
      var enemy = game.createGameItem("enemy", 25);
      var redSquare = draw.rect(50, 50, "red");
      redSquare.x = -25;
      redSquare.y = -25;
      enemy.addChild(redSquare);
      enemy.x = x;
      enemy.y = groundY - y;
      game.addGameItem(enemy);
      enemy.velocityX = -1;
      enemy.rotationalVelocity = 1;
      enemy.onPlayerCollision = function () {
        game.changeIntegrity(-10);
      };
      enemy.onProjectileCollision = function () {
        game.increaseScore(100);
        enemy.fadeOut();
      };
    };

    function createReward(x, y) {
      var reward = game.createGameItem("reward", 25);
      var blueSquare = draw.rect(50, 50, "blue");
      blueSquare.x = -25;
      blueSquare.y = -25;
      reward.addChild(blueSquare);
      reward.x = x;
      reward.y = groundY - y;
      game.addGameItem(reward);
      reward.velocityX = -1;
      reward.rotationalVelocity = 1;
      reward.onPlayerCollision = function () {
        game.changeIntegrity(10);
        reward.fadeOut();
      };
      reward.onProjectileCollision = function () {
        reward.fadeOut();
      };
    };

    //createEnemy(1200, groundY - 275);
    //createEnemy(800, groundY - 300);
    //createEnemy(400, groundY - 310);

    //createReward(2200, groundY - 300);
    //createReward(600, groundY - 300);

    function createMarker(x, y, color) {
      var marker = game.createGameItem("marker", 25);
      var purpleSquare = draw.rect(50, 50, color);
      purpleSquare.x = -25;
      purpleSquare.y = -25;
      marker.addChild(purpleSquare);
      marker.x = x;
      marker.y = groundY - y;
      game.addGameItem(marker);
      marker.velocityX = -1;
      marker.rotationalVelocity = 1;
      marker.onPlayerCollision = function () {
        startLevel();
        alert(`onPlayerCollision: Level = ${currentLevel}`);
      };
      reward.onProjectileCollision = function () {
        startLevel();
        alert(`onProjectileCollision: Level = ${currentLevel}`);
      };      
    }

    function startLevel() {
      // TODO 13 goes below here


      alert(`startLevel: Level = ${currentLevel}`);
      if (currentLevel >= 0) {
        alert(levelData[currentLevel].name);

        for (let i = 0; i < levelData[currentLevel].gameItems.length; i++) {
          
          if (levelData[currentLevel].gameItems[i].type === "string") {
            createString(levelData[currentLevel].gameItems[i].x, levelData[currentLevel].gameItems[i].y);
          }
          else if (levelData[currentLevel].gameItems[i].type === "marker") {
            //createMarker(levelData[currentLevel].gameItems[i].x, levelData[currentLevel].gameItems[i].y);
          }
          else if (levelData[currentLevel].gameItems[i].type === "enemy") {
            createEnemy(levelData[currentLevel].gameItems[i].x, levelData[currentLevel].gameItems[i].y);
          }
          else if (levelData[currentLevel].gameItems[i].type === "reward") {
            createReward(levelData[currentLevel].gameItems[i].x, levelData[currentLevel].gameItems[i].y);
          }
        }
      }

      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
      alert(`startLevel (new): Level = ${currentLevel}`);
    }
    if (currentLevel === 0) {
      startLevel();
    }
    //createMarker(3000, groundY - 300);
    
    for (let i = 0; i < levelData[currentLevel - 1].gameItems.length; i++) {
      
      if (levelData[currentLevel - 1].gameItems[i].type === "marker") {
        createMarker(levelData[currentLevel - 1].gameItems[i].x, levelData[currentLevel - 1].gameItems[i].y, levelData[currentLevel - 1].gameItems[i].color);
      }
    }
    
    /*
    if (currentLevel >= 0) {
      alert(levelData[currentLevel - 1].name);

      for (let i = 0; i < levelData[currentLevel - 1].gameItems.length; i++) {
        
        if (levelData[currentLevel - 1].gameItems[i].type === "string") {
          createString(levelData[currentLevel - 1].gameItems[i].x, levelData[currentLevel - 1].gameItems[i].y);
        }
        else if (levelData[currentLevel - 1].gameItems[i].type === "marker") {
          createMarker(levelData[currentLevel - 1].gameItems[i].x, levelData[currentLevel - 1].gameItems[i].y, levelData[currentLevel - 1].gameItems[i].color);
        }
        else if (levelData[currentLevel - 1].gameItems[i].type === "enemy") {
          createEnemy(levelData[currentLevel - 1].gameItems[i].x, levelData[currentLevel - 1].gameItems[i].y);
        }
        else if (levelData[currentLevel - 1].gameItems[i].type === "reward") {
          createReward(levelData[currentLevel - 1].gameItems[i].x, levelData[currentLevel - 1].gameItems[i].y);
        }
      }
    }
    */
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
