const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	var circle;
    for (var i = 0; i < 50; i++) {
        circle = new Circle(gameEngine, true);
        gameEngine.addEntity(circle);
    }
    for (var i = 0; i < 5; i++) {
        circle = new Circle(gameEngine, false);
        gameEngine.addEntity(circle);
    }
    gameEngine.weakened = gameEngine.entities[0];
    gameEngine.weakened.debug = true;
    gameEngine.weakened.MaxSpeed *= 0.70;
    gameEngine.weakened.color = "teal";

	gameEngine.init(ctx);

	gameEngine.start();
});
