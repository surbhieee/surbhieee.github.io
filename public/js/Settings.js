class Settings extends Phaser.Scene {
    constructor() {
        super({ key: 'Settings' });
    }
    init(data) {
        console.log('init', data);
        //this.imageID = data.id;
        this.gameName = data.gameName;
    }

    preload() {
        console.log("here in preload of insturctions.js");
        //game.load.spritesheet('button', 'assets/clock.png', 193, 71);
        this.load.image('cancel', './assets/cancel.png');
        this.load.image('back', './assets/back.png');
        this.load.image('setting', './assets/setting.png');
        this.load.image('play', './assets/play.png');
        this.load.image('settingsButton', './assets/blueButton.png');
    }

    create() {
        console.log("here in create");
        var text2 = this.add.text(400, 120, 'Select an option!', { font: '42px comic sans' });
        var bgImage = this.add.image(300, 300, 'background').setDisplaySize(800, 350);
        var container = this.add.container(250, 50, [bgImage]);
        // var resumeButton = this.add.image(400,400,'play').setDisplaySize(60, 60).setInteractive();
        // playButton.on("pointerup", function(){
        //     this.scene.start("GameMaths");
        // }, this)

        var cancelButton = this.add.image(865, 210, 'cancel').setDisplaySize(40, 40).setInteractive();
        cancelButton.on("pointerup", function () {
            this.scene.start(this.gameName);

        }, this)


        var reset = this.add.image(550, 300, 'settingsButton').setDisplaySize(200, 60).setInteractive();
        var resetText = this.add.text(520, 290, 'Reset', { font: '20px comic sans' });
        reset.on("pointerup", function () {
            this.scene.start(this.gameName);
        }, this)

        var backMenu = this.add.image(550, 400, 'settingsButton').setDisplaySize(200, 60).setInteractive();
        var backToMenuText = this.add.text(510, 390, 'Back to Menu', { font: '20px comic sans' });
        backMenu.on("pointerup", function () {
            this.scene.start("Main");
        }, this)

    }
}
