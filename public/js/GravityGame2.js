class GravityGame2 extends Phaser.Scene {
    constructor() {
        super({ key: 'GravityGame2' });
    }
 preload ()
{   this.load.image('sunImage', './assets/sun.png');
    this.load.image('earth', './assets/earth.png');
    this.load.image('cancel', './assets/cancel.png');
    this.load.image('info', './assets/info.png');
    this.load.image('setting', './assets/setting.png');
    this.load.image('settingsButton', './assets/blueButton.png');
    this.load.image('woman', './assets/woman.png');
    this.load.image('chat', './assets/chat.png');
    this.load.image('saturn', './assets/saturn.png');    
    this.load.image('moon', './assets/moon.png');  
    this.load.image('mars', './assets/mars.png');   
}

 create ()
{

    var text1 = this.add.text(150, 50, 'Measurements on different Planets due to change in Gravitational force!', { font: '32px comic sans' });
        text1.setTint(0xff00ff, 0xffff00, 0x0000ff, 0xff0000);
        var bgImage = this.add.image(470, 300, 'background').setDisplaySize(1050, 500);
        var container = this.add.container(100, 50, [bgImage]);
    
    
    var Earth = this.add.image(200, 500, 'earth').setDisplaySize(90, 90).setInteractive();        
    var Women = this.add.image(195, 370, 'woman').setDisplaySize(200, 180).setInteractive();
    var Chat = this.add.image(130, 270, 'chat').setDisplaySize(110, 100).setInteractive();
    var ChatText = this.add.text(80, 240, 'My weight is', { font: '18px comic sans' });
    var ChatText1 = this.add.text(80, 270, '50Kg on Earth', { font: '18px comic sans' });

    var Sun = this.add.image(350, 500, 'sunImage').setDisplaySize(90, 90).setInteractive();  
    Sun.on("pointerup", function(){
    this.add.image(345, 370, 'woman').setDisplaySize(200, 180).setInteractive();
    this.add.image(300, 240, 'chat').setDisplaySize(110, 100).setInteractive();
    this.add.text(250, 210, 'My weight is', { font: '18px comic sans' });
    this.add.text(250, 240, '1397kg on Sun', { font: '18px comic sans' });
    }, this);

    var Saturn = this.add.image(500, 500, 'saturn').setDisplaySize(90, 90).setInteractive();
    Saturn.on("pointerup", function(){
    this.add.image(495, 370, 'woman').setDisplaySize(200, 180).setInteractive();
    this.add.image(450, 240, 'chat').setDisplaySize(110, 100).setInteractive();
    this.add.text(400, 210, 'My weight is', { font: '18px comic sans' });
    this.add.text(400, 240, '46.5Kg on Saturn', { font: '18px comic sans' });
    }, this);
    
    

    var Moon = this.add.image(650, 500, 'moon').setDisplaySize(90, 90).setInteractive();
    Moon.on("pointerup", function(){
    this.add.image(645, 370, 'woman').setDisplaySize(200, 180).setInteractive();
    this.add.image(600, 240, 'chat').setDisplaySize(110, 100).setInteractive();
    this.add.text(550, 210, 'My weight is', { font: '18px comic sans' });
    this.add.text(550, 240, '8.26Kg on Moon', { font: '18px comic sans' });
    }, this);

    var Mars = this.add.image(800, 500, 'mars').setDisplaySize(90, 90).setInteractive();
    Mars.on("pointerup", function(){
    this.add.image(795, 370, 'woman').setDisplaySize(200, 180).setInteractive();
    this.add.image(750, 240, 'chat').setDisplaySize(110, 100).setInteractive();
    this.add.text(700, 210, 'My weight is', { font: '18px comic sans' });
    this.add.text(700, 240, '19Kg on Mars', { font: '18px comic sans' });
    }, this);

    var WeightOnPlanets = this.add.text(850, 200, 'Weight on other Planets', { font: '20px comic sans' });
    var WeightOnPlanets1 = this.add.text(850, 250, 'is calculated by-', { font: '20px comic sans' });
    var WeightOnPlanets2 = this.add.text(850, 300, '(g of other Planet* Wt on Earth)', { font: '20px comic sans' });
    var WeightOnPlanets2 = this.add.text(850, 315, '-------------------------------------', { font: '20px comic sans' });
    var WeightOnPlanets2 = this.add.text(920, 330, '(g on earth)', { font: '20px comic sans' });

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
            this.scene.start("SelectGame");
        }, this)
}
}