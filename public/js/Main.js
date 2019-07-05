class Main extends Phaser.Scene {
    constructor() {
        super({ key: 'Main' });
    }
    abc;
    physicsContainer;
    preload() {
        console.log("here in preload");
        this.load.image('background', './assets/backgroundMenu.jpg');
        this.load.image('physicsIcon', './assets/formula.png');
        this.load.image('mathsIcon', './assets/board.png');

    }

    create() {
        var text1 = this.add.text(375, 50, 'TechnoLAB', { font: '64px comic sans' })
        text1.setTint(0xff00ff, 0xffff00, 0x0000ff, 0xff0000);
        var text2 = this.add.text(350, 130, 'why Read and Yearn, let\'s Play and Learn!', { font: '22px comic sans' });


        var bgImage = this.add.image(300, 300, 'background').setDisplaySize(800, 350);
        var container = this.add.container(250, 50, [bgImage]);
        var text3 = this.add.text(500, 200, 'Menu', { font: '32px comic sans' });
        //this.options("maths");
        //this.options("physics");
        var mathsOption = this.add.text(290, 290, 'Mathematics', { font: '32px comic sans' }).setInteractive();
        var mathsButton = this.add.image(370, 390, 'mathsIcon').setDisplaySize(100, 100).setInteractive();
        var physicsOption = this.add.text(680, 290, 'Physics', { font: '32px comic sans' }).setInteractive();
        var physicsButton = this.add.image(730, 390, 'physicsIcon').setDisplaySize(100, 100).setInteractive();


        mathsButton.on('pointerup', function () {
            console.log();
            this.scene.start('SelectGame', { selectedSubject: 'Maths'});
            //this.scene.start('Instructions', { selectedSubject: 'Mathematics', gameName: 'IdentifyShape' });
            //this.scene.start('Instructions', { selectedSubject: 'Mathematics', gameName: 'AngleGame' });
        }, this);
        physicsButton.once('pointerup', function () {
            this.scene.start('SelectGame', { selectedSubject: 'Physics'});
            //this.scene.start('Instructions', { selectedSubject: 'Physics', gameName: 'GravityGame1' });
            //this.scene.start('Instructions', { selectedSubject: 'Physics', gameName: 'GravityGame1' });
        }, this);
    }



}



