$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(115, 665, 30, 75, "rgba(22, 22, 25, 1)");
    createPlatform(425, 700, 70, 15, "rgba(27, 33, 33, 1)", 390, 467, 2);
    createPlatform(615, 570, 35, 50, "rgba(210, 180, 140, 1)");
    createPlatform(415, 445, 70, 20, "rgba(238, 215, 122, 1)");
    createPlatform(615, 430, 35, 10, "rgba(250, 230, 215, 1)");
    createPlatform(700, 501, 50, 12, "#8f8f8f");
    createPlatform(822, 522, 70, 5, "rgba(46, 40, 40, 1)");
    createPlatform(1057, 445, 40, 12, "rgba(32, 29, 80, 1)");
    createPlatform(1250, 650, 50, 18, "rgba(210, 180, 140, 1)");

    // TODO 3 - Create Collectables
    createCollectable("blanket", 610, 370, 0.3, 1);
    createCollectable("treats", 1350, 650, 0.2, 1.01);
    createCollectable("puppy", 1250, 600);
    createCollectable("toy", 835, 480, 0, 1, 815, 875, 2);

    // TODO 4 - Create Cannons
    createCannon("left", 575, 2500);
    createCannon("right", 425, 2500);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
