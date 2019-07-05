class GravityGame extends Phaser.Scene {
    constructor() {
        super({ key: 'GravityGame' });
    }
    preload() {
        this.load.image('block', './assets/ball.png');
        this.load.image('settingsButton', './assets/blueButton.png');
        this.load.image('cancel', './assets/cancel.png');
        this.load.image('info', './assets/info.png');
        this.load.image('setting', './assets/setting.png');
        this.load.image('back', './assets/back.png');
    }

    create() {
        var text1 = this.add.text(280, 50, 'Gravity on different Stars and Planets', { font: '32px comic sans' });
        text1.setTint(0xff00ff, 0xffff00, 0x0000ff, 0xff0000);
        var bgImage = this.add.image(470, 300, 'background').setDisplaySize(1050, 500);
        var container = this.add.container(100, 50, [bgImage]);

        console.log(this.physics);
        //this.physics.world.gravity.y = 60;

        var group = this.physics.add.group({
            defaultKey: 'block',
            bounceX: 1,
            bounceY: 1,
            collideWorldBounds: true
        });

        var sunObject = group.create(200, 300).setDisplaySize(80, 80);;
        sunObject.body.allowGravity = false;
        var sun = this.add.image(200, 190, 'settingsButton').setDisplaySize(90, 60).setInteractive();
        var SunText = this.add.text(180, 180, 'Sun', { font: '20px comic sans' });
        sun.on("pointerup", function () {
            if (sunObject.body.allowGravity == false) {
                sunObject.body.allowGravity = true;
                sunObject.setGravity(0, 274);
            }
        }, this)

        var earthObject = group.create(300, 300).setDisplaySize(80, 80);
        earthObject.body.allowGravity = false;
        var earth = this.add.image(300, 190, 'settingsButton').setDisplaySize(90, 60).setInteractive();
        var EarthText = this.add.text(280, 180, 'Earth', { font: '20px comic sans' });
        earth.on("pointerup", function () {
            if (earthObject.body.allowGravity == false) {
                earthObject.body.allowGravity = true;
                earthObject.setGravity(0, 9.798);
            }
        }, this)

        var moonObject = group.create(400, 300).setDisplaySize(80, 80);
        moonObject.body.allowGravity = false;
        var moon = this.add.image(400, 190, 'settingsButton').setDisplaySize(90, 60).setInteractive();
        var MoonText = this.add.text(375, 180, 'Moon', { font: '20px comic sans' });
        moon.on("pointerup", function () {
            if (moonObject.body.allowGravity == false) {
                moonObject.body.allowGravity = true;
                moonObject.setGravity(0, 1.62);
            }
        }, this)

        var MercuryObject = group.create(500, 300).setDisplaySize(80, 80);
        MercuryObject.body.allowGravity = false;
        var Mercury = this.add.image(500, 190, 'settingsButton').setDisplaySize(90, 60).setInteractive();
        var MercuryText = this.add.text(465, 180, 'Mercury', { font: '20px comic sans' });
        Mercury.on("pointerup", function () {
            if (MercuryObject.body.allowGravity == false) {
                MercuryObject.body.allowGravity = true;
                MercuryObject.setGravity(0, 3.7);
            }
        }, this)

        var MarsObject = group.create(600, 300).setDisplaySize(80, 80);
        MarsObject.body.allowGravity = false;
        var Mars = this.add.image(600, 190, 'settingsButton').setDisplaySize(90, 60).setInteractive();
        var MarsText = this.add.text(580, 180, 'Mars', { font: '20px comic sans' });
        Mars.on("pointerup", function () {
            if (MarsObject.body.allowGravity == false) {
                MarsObject.body.allowGravity = true;
                MarsObject.setGravity(0, 3.71);
            }
        }, this)


        var sunGravity = this.add.text(780, 200, 'Gravity on Sun is : 274N', { font: '20px comic sans' });
        var EarthGravity = this.add.text(780, 250, 'Gravity on Earth is : 9.798N', { font: '20px comic sans' });
        var MoonGravity = this.add.text(780, 300, 'Gravity on Moon is : 1.62N', { font: '20px comic sans' });
        var MercuryGravity = this.add.text(780, 350, 'Gravity on Mercury is : 3.7N', { font: '20px comic sans' });
        var MarsGravity = this.add.text(780, 400, 'Gravity on Mars is : 3.71N', { font: '20px comic sans' });

        var infoButton = this.add.image(1050, 500, 'info').setDisplaySize(40, 40).setInteractive();
        infoButton.on("pointerup", function () {
            this.scene.start("Instructions");
        }, this)
        var settingButton = this.add.image(1050, 550, 'setting').setDisplaySize(40, 40).setInteractive();
        settingButton.on("pointerup", function () {
            this.scene.start("Settings", { gameName: "GravityGame" });
        }, this)
        var backButton = this.add.image(1050, 590, 'back').setDisplaySize(40, 40).setInteractive();
        backButton.on("pointerup", function () {
            this.scene.start("SelectGame");
        }, this)

    }

}

