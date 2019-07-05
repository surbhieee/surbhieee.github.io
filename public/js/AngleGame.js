class AngleGame extends Phaser.Scene {
    constructor() {
        super({ key: 'AngleGame' });
    }
    line;
    line2;
    text;
    graphics;
    angle;
    preload() {
        this.load.image('settingsButton', './assets/blueButton.png');
        this.load.image('info', './assets/info.png');
        this.load.image('setting', './assets/setting.png');
        this.load.image('back', './assets/back.png');
    }
    create() {

        var text1 = this.add.text(280, 50, 'Check the Angle', { font: '32px comic sans' });
        text1.setTint(0xff00ff, 0xffff00, 0x0000ff, 0xff0000);
        var bgImage = this.add.image(470, 300, 'background').setDisplaySize(1050, 500);
        var container = this.add.container(100, 50, [bgImage]);

        this.graphics = this.add.graphics({ lineStyle: { width: 5, color: 0xaa00aa } });

        this.line = new Phaser.Geom.Line(350, 350, 600, 400);
        this.line2 = new Phaser.Geom.Line(350, 350, 600, 350);

        this.text = this.add.text(700, 200, '');
        this.text2 = this.add.text(700, 250, '');

        var angleButton = this.add.image(800, 300, 'settingsButton').setDisplaySize(200, 60).setInteractive();
        var angleText = this.add.text(770, 290, 'Angle', { font: '20px comic sans' });
        angleButton.on("pointerup", function () {
            this.text2.setText('Current Angle: ' + Phaser.Math.RadToDeg(this.angle));
        }, this)

        var infoButton = this.add.image(1050, 500, 'info').setDisplaySize(40, 40).setInteractive();
        infoButton.on("pointerup", function () {
            this.scene.start("Instructions");
        }, this)
        var settingButton = this.add.image(1050, 550, 'setting').setDisplaySize(40, 40).setInteractive();
        settingButton.on("pointerup", function () {
            this.scene.start("Settings", { gameName: "AngleGame" });
        }, this)
        var backButton = this.add.image(1050, 590, 'back').setDisplaySize(40, 40).setInteractive();
        backButton.on("pointerup", function () {
            this.scene.start("SelectGame");
        }, this)
    }

    update() {
        Phaser.Geom.Line.ReflectAngle(this.line, this.line2)
        Phaser.Geom.Line.RotateAroundXY(this.line, 350, 350, 0.002)

        this.graphics.clear();

        this.graphics.strokeLineShape(this.line);
        this.graphics.strokeLineShape(this.line2);

        this.angle = Phaser.Geom.Line.Angle(this.line);

        this.text.setText('Line Angle: ' + Phaser.Math.RadToDeg(this.angle));
    }
}