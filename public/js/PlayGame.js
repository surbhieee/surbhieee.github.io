class PlayGame extends Phaser.Scene {
    constructor() {

        super({ key: 'PlayGame' });
    }
    source;
    complete;
    end;

    preload() {
        console.log("here in preload of insturctions.js");
        //game.load.spritesheet('button', 'assets/clock.png', 193, 71);
        this.load.image('cancel', './assets/cancel.png');
        this.load.image('info', './assets/info.png');
        this.load.image('setting', './assets/setting.png');
        this.load.image('clock', './assets/clock.png');
    }

    create() {
        console.log("here in create");
        var text1 = this.add.text(450, 50, 'GameName', { font: '44px comic sans' });
        text1.setTint(0xff00ff, 0xffff00, 0x0000ff, 0xff0000);

        var bgImage = this.add.image(470, 300, 'background').setDisplaySize(1050, 500);
        var container = this.add.container(100, 50, [bgImage]);

        var infoButton = this.add.image(665, 350, 'info').setDisplaySize(40, 40).setInteractive();
        // infoButton.on("pointerup", function(){
        //     this.scene.start("Instructions");
        // }, this)
        var settingButton = this.add.image(665, 400, 'setting').setDisplaySize(40, 40).setInteractive();
        settingButton.on("pointerup", function () {
            this.scene.start("MathsSettings");
        }, this)
        var backButton = this.add.image(665, 440, 'back').setDisplaySize(40, 40).setInteractive();
        backButton.on("pointerup", function () {
            this.scene.start("Main");
        }, this)

        this.physics.world.setFPS(30);


        this.source = this.physics.add.image(0, 300, 'clock').setDisplaySize(100, 100);
        this.input.on('pointerdown', function () {
            this.source.body.setVelocityX(100);
        }, this);

        infoButton.on('pointerdown', function () {
            this.scene.pause();
            console.log("infoClicked");
            this.scene.launch('Settings');

        }, this);

    }


    update(time) {
        if (!this.complete) {
            this.end = time;
        }

        if (this.source.x >= 700 && this.source.body.velocity.x > 0) {

            //this.source.body.setVelocityX(0);
        }
    }
}

