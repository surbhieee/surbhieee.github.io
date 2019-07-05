class GravityGame1 extends Phaser.Scene {
    constructor() {
        super({ key: 'GravityGame1' });
    }
 preload ()
{
    this.load.image('sun', './assets/earth.png');
    this.load.image('alien', './assets/particle.png');
    this.load.image('cancel', './assets/cancel.png');
        this.load.image('info', './assets/info.png');
        this.load.image('setting', './assets/setting.png');
        this.load.image('settingsButton', './assets/blueButton.png');
}

 create ()
{

    var text1 = this.add.text(280, 50, 'Gravitational force on Earth!', { font: '32px comic sans' });
        text1.setTint(0xff00ff, 0xffff00, 0x0000ff, 0xff0000);
        var bgImage = this.add.image(470, 300, 'background').setDisplaySize(1050, 500);
        var container = this.add.container(100, 50, [bgImage]);
    //  You can enable the Attractors plugin either via the game config (see above), or explicitly in code:


    this.matter.world.setBounds(100,100,300,300);

    var alienImage = this.matter.add.imageStack('alien', null, 0, 250, 50, 2, 0, 0, {
        mass: 0.5,
        ignorePointer: true
    });

    var sun = this.matter.add.image(200, 200, 'sun', null, {
        shape: {
            type: 'circle',
            radius: 64
        },
        plugin: {
            attractors: [
                function (bodyA, bodyB) {
                    return {
                        x: (bodyA.position.x - bodyB.position.x) * 0.000001,
                        y: (bodyA.position.y - bodyB.position.y) * 0.000001
                    };
                }
            ]
        }
    });
    sun.setDisplaySize(150,150);

    var sunGravity = this.add.text(600, 200, 'Gravitational force attracts the ojects within its effective area.', { font: '20px comic sans' });
    var EarthGravity = this.add.text(780, 250, 'Gravity on Earth is : 9.798N', { font: '20px comic sans' });

    this.matter.add.mouseSpring();

    var infoButton = this.add.image(1050, 500, 'info').setDisplaySize(40, 40).setInteractive();
        infoButton.on("pointerup", function () {
            this.scene.start("Instructions");
        }, this)
        var settingButton = this.add.image(1050, 550, 'setting').setDisplaySize(40, 40).setInteractive();
        settingButton.on("pointerup", function () {
            this.scene.start("Settings", { gameName: "GravityGame1" });
        }, this)
        var backButton = this.add.image(1050, 590, 'back').setDisplaySize(40, 40).setInteractive();
        backButton.on("pointerup", function () {
            this.scene.start("Main");
        }, this)

    var nextButton = this.add.image(800, 550, 'settingsButton').setDisplaySize(90, 60).setInteractive();
    var next = this.add.text(780, 540, 'Next', { font: '20px comic sans' });
        nextButton.on("pointerup", function () {
            this.scene.start("GravityGame2");
        }, this)

}



}