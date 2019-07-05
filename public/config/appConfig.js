var config = {
    type: Phaser.AUTO,
    width: 1136,
    height: 640,
    parent: 'technoLab',
    physics: {
    default:"arcade",   
    arcade: {
        
        gravity: { y: 0 }
    },
    matter: {
        
        gravity: { y: 0.5 }
    }
        
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [Main, SelectGame, Instructions, PlayGame, Settings, GravityGame, AngleGame, IdentifyShape, GravityGame1, GravityGame2, multiGame]
};

var game = new Phaser.Game(config);
