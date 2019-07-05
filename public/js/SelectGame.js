class SelectGame extends Phaser.Scene {
    constructor() {
        super({ key: 'SelectGame' });
    }
    
    physicsContainer;
    init(data) {
        console.log('init', data);
        //this.imageID = data.id;
        this.subject = data.selectedSubject;
    }
    preload() {
        console.log("here in preload");
        this.load.image('background', './assets/backgroundMenu.jpg');
        this.load.image('physicsIcon', './assets/formula.png');
        this.load.image('gravityPull', './assets/gravityPull.png');
        this.load.image('gravityWeight', './assets/gravityWeight.png');
        this.load.image('multiPlayer', './assets/multiPlayer.png');
        this.load.image('shapeGame', './assets/shapeGame.png');
        this.load.image('angle', './assets/angle.png');
        this.load.image('back', './assets/back.png');
    }
    create() {

        var bgImage = this.add.image(300, 300, 'background').setDisplaySize(800, 350);
        var container = this.add.container(250, 50, [bgImage]);

        if(this.subject === "Physics"){
            var text1 = this.add.text(350, 50, 'Physics Games', { font: '64px comic sans' })
            text1.setTint(0xff00ff, 0xffff00, 0x0000ff, 0xff0000);
            var text2 = this.add.text(420, 130, 'Choose a Game to Play!', { font: '22px comic sans' });
            
            var pullGameText = this.add.text(280, 230, 'Gravity Pull', { font: '22px comic sans' }).setInteractive();
            var pullGameButton = this.add.image(330, 330, 'gravityPull').setDisplaySize(100, 100).setInteractive();
            pullGameButton.once('pointerup', function () {
            this.scene.start('Instructions', {selectedSubject:"Physics", gameName: "GravityGame"});
            }, this);

            var weightGameText = this.add.text(460, 230, 'Gravity Weight', { font: '22px comic sans' }).setInteractive();
            var weightGameButton = this.add.image(530, 330, 'gravityWeight').setDisplaySize(100, 100).setInteractive();
            weightGameButton.once('pointerup', function () {
            this.scene.start('Instructions', {selectedSubject:"Physics", gameName: "GravityGame2"});
            }, this);

            var multiPlayerText = this.add.text(680, 230, 'MultiPlayer', { font: '22px comic sans' }).setInteractive();
            var multiPlayerButton = this.add.image(730, 330, 'multiPlayer').setDisplaySize(100, 100).setInteractive();
            multiPlayerButton.once('pointerup', function () {
            this.scene.start('Instructions', {selectedSubject:"Physics", gameName: "multiGame"});
            }, this);
            
        }else{
           var text1 = this.add.text(320, 50, 'Mathematics Games', { font: '54px comic sans' })
            text1.setTint(0xff00ff, 0xffff00, 0x0000ff, 0xff0000);
            var text2 = this.add.text(420, 130, 'Choose a Game to Play!', { font: '22px comic sans' });
            
            var shapeGameText = this.add.text(300, 230, 'Identify the Shape', { font: '22px comic sans' }).setInteractive();
            var shapeGameButton = this.add.image(370, 330, 'shapeGame').setDisplaySize(100, 100).setInteractive();
            shapeGameButton.once('pointerup', function () {
            this.scene.start('Instructions', {selectedSubject:"Mathematics", gameName: "IdentifyShape"});
            }, this);

            var weightGameText = this.add.text(630, 230, 'Study the Angle', { font: '22px comic sans' }).setInteractive();
            var weightGameButton = this.add.image(700, 330, 'angle').setDisplaySize(100, 100).setInteractive();
            weightGameButton.once('pointerup', function () {
            this.scene.start('Instructions', {selectedSubject:"Mathematics", gameName: "AngleGame"});
            }, this);
        }
        
        var backButton = this.add.image(920, 500, 'back').setDisplaySize(40, 40).setInteractive();
        backButton.on("pointerup", function () {
            this.scene.start("Main");
        }, this)       
    }


}



