class PhysicsSettings extends Phaser.Scene {
    constructor() {
        super({ key: 'PhysicsSettings' });
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
        var text1 = this.add.text(280, 50, 'Mathematics', { font: '44px comic sans' });
        text1.setTint(0xff00ff, 0xffff00, 0x0000ff, 0xff0000);


        var bgImage = this.add.image(300, 300, 'background').setDisplaySize(650, 500);
        var container = this.add.container(100, 50, [bgImage]);
        // var resumeButton = this.add.image(400,400,'play').setDisplaySize(60, 60).setInteractive();
        // playButton.on("pointerup", function(){
        //     this.scene.start("GameMaths");
        // }, this)

        var cancelButton = this.add.image(665, 210, 'cancel').setDisplaySize(40, 40).setInteractive();
        cancelButton.on("pointerup", function () {
            this.scene.start("GamePhysics");
        }, this)


        var resume = this.add.image(400, 300, 'settingsButton').setDisplaySize(200, 60).setInteractive();
        var resumeText = this.add.text(370, 290, 'Resume', { font: '20px comic sans' });
        resume.on("pointerup", function () {
            this.scene.start("GamePhysics");
        }, this)

        var reset = this.add.image(400, 350, 'settingsButton').setDisplaySize(200, 60).setInteractive();
        var resetText = this.add.text(380, 340, 'Reset', { font: '20px comic sans' });
        reset.on("pointerup", function () {
            this.scene.start("GamePhysics");
        }, this)

        var backMenu = this.add.image(400, 400, 'settingsButton').setDisplaySize(200, 60).setInteractive();
        var backToMenuText = this.add.text(350, 390, 'Back to Menu', { font: '20px comic sans' });
        backMenu.on("pointerup", function () {
            this.scene.start("Main");
        }, this)

    }
}
