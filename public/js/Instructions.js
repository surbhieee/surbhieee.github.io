class Instructions extends Phaser.Scene {
    constructor(abc) {
        super({ key: 'Instructions' });
    }
    imageID;
    subject;
    gameName;
    init(data) {
        console.log('init', data);
        //this.imageID = data.id;
        this.subject = data.selectedSubject;
        this.gameName = data.gameName;
    }

    preload() {
        console.log("here in preload of insturctions.js");
        //game.load.spritesheet('button', 'assets/clock.png', 193, 71);
        this.load.image('cancel', './assets/cancel.png');
        this.load.image('back', './assets/back.png');
        this.load.image('setting', './assets/setting.png');
        this.load.image('play', './assets/play.png');
        this.load.image('instructionBg', './assets/whiteRectImage.jpg');
    }

    create() {
        console.log("here in create");
        var text1 = this.add.text(440, 50, this.subject, { font: '44px comic sans' });
        text1.setTint(0xff00ff, 0xffff00, 0x0000ff, 0xff0000);
        var text2 = this.add.text(440, 120, 'Instructions!', { font: '42px comic sans' });

        var bgImage = this.add.image(300, 300, 'background').setDisplaySize(800, 350);
        var container = this.add.container(250, 50, [bgImage]);

        var instructionBg = this.add.image(350, 340, 'instructionBg').setDisplaySize(600, 300);
        var instructionContainer = this.add.container(200, 0, [instructionBg]);

        var inst1 = this.add.text(280, 250, '~ Click the Star or Planet name to check the gravitational force!', { font: '20px comic sans' });
        inst1.setFill('black');
        var inst2 = this.add.text(280, 300, '~ Click the Star or Planet name to check the gravitational force!', { font: '20px comic sans' });
        inst2.setFill('black');
        var inst3 = this.add.text(280, 350, '~ Click the Star or Planet name to check the gravitational force!', { font: '20px comic sans' });
        inst3.setFill('black');

        var playButton = this.add.image(550, 460, 'play').setDisplaySize(60, 60).setInteractive();

        playButton.on("pointerdown", function () {
            this.scene.start(this.gameName);
        }, this)

        var cancelButton = this.add.image(800, 220, 'cancel').setDisplaySize(40, 40).setInteractive();
        cancelButton.on("pointerdown", function () {
            this.scene.start(this.gameName);
        }, this)

        var backButton = this.add.image(800, 460, 'back').setDisplaySize(40, 40).setInteractive();
        backButton.on("pointerup", function () {
            this.scene.start("SelectGame");
        }, this)
    }
}

