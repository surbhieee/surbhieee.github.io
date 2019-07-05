class IdentifyShape extends Phaser.Scene {
    constructor() {
        super({ key: 'IdentifyShape' });
        this.xPos = [400, 675];
        this.yPos = [225, 485];
        this.createdElements = [];
        this.selectItem = '';
        this.question_Text;
    }

    preload() {
        //  this.load.image("logo", "./src/assets/images/logo.png");
        this.load.image('cancel', './assets/cancel.png');
        this.load.image('info', './assets/info.png');
        this.load.image('setting', './assets/setting.png');
    }

    create() {
        var self = this;
        setTimeout(function () { self.generateShapes() }, 200);

        var infoButton = this.add.image(1050, 500, 'info').setDisplaySize(40, 40).setInteractive();
        infoButton.on("pointerup", function () {
            this.scene.start("Instructions");
        }, this)
        var settingButton = this.add.image(1050, 550, 'setting').setDisplaySize(40, 40).setInteractive();
        settingButton.on("pointerup", function () {
            this.scene.start("Settings", { gameName: "IdentifyShape" });
        }, this)
        var backButton = this.add.image(1050, 590, 'back').setDisplaySize(40, 40).setInteractive();
        backButton.on("pointerup", function () {
            this.scene.start("SelectGame");
        }, this)
    }

    update() { }

    generateShapes() {
	var title = this.add.text(568, 25, 'Identify the Shapes', { font: '32px comic sans' }).setOrigin(0.5);
        title.setTint(0xff00ff, 0xffff00, 0x0000ff, 0xff0000);

        this.question_Text = this.add.text(568, 65, '', { font: '30px Courier', fill: '#fff', align: 'center'}).setOrigin(0.5);
        this.selectItem = '';
        this.createdElements = [];
        var unique_Numbers = generateRange(5, 1, 9);
        this.renderShapes(unique_Numbers);

    }

    renderShapes(unique_Numbers) {
        for (var i = 1; i <= 4; i++) {
            var shape_Number = unique_Numbers[i];
            var xVal = i % 2 == 1 ? this.xPos[0] : this.xPos[1];
            var yVal = i <= 2 ? this.yPos[0] : this.yPos[1];
            switch (shape_Number) {
                case 1:
                    this.createdElements[i] = (this.createSquare(xVal, yVal));
                    break;
                case 2:
                    this.createdElements[i] = (this.createRectangle(xVal, yVal));
                    break;
                case 3:
                    this.createdElements[i] = (this.createCircle(xVal, yVal));
                    break;
                case 4:
                    this.createdElements[i] = (this.createArc(xVal, yVal));
                    break;
                case 5:
                    this.createdElements[i] = (this.createEllipse(xVal, yVal));
                    break;
                case 6:
                    this.createdElements[i] = (this.createTriangle(xVal, yVal));
                    break;
                case 7:
                    this.createdElements[i] = (this.createPentagon(xVal, yVal));
                    break;
                case 8:
                    this.createdElements[i] = (this.createHexagon(xVal, yVal));
                    break;
                case 9:
                    this.createdElements[i] = (this.createSeptagon(xVal, yVal));
                    break;
                default:
                    //Do Nothing
                    break;
            }
        }
        this.createdElements.shift();
        this.selectItem = this.createdElements[getRandomNumber(0, 3)].name;
        this.question_Text.setText('Please select the ' + this.selectItem.toUpperCase() + ' from the following shapes:');
    }

    createSquare(x, y) {
        var width = getRandomNumber(100, 225);
        var fillColor = getRandomColor();
        var square = this.add.rectangle(x, y, width, width, fillColor).setInteractive({ hitArea: square, useHandCursor: true }).on('pointerup', () => this.clickedShape('square'));
        square.name = 'square';
        return square;
    }

    createRectangle(x, y) {
        var width = getRandomNumber(100, 225);
        var height = getRandomNumber(100, 150);
        if (height >= width - 15 && height <= width + 15) {
            height = 80;
        }
        var fillColor = getRandomColor();
        var rectangle = this.add.rectangle(x, y, width, height, fillColor).setInteractive({ hitArea: rectangle, useHandCursor: true }).on('pointerup', () => this.clickedShape('rectangle'));
        rectangle.name = 'rectangle';
        return rectangle;
    }

    createCircle(x, y) {
        var radius = getRandomNumber(50, 113);
        var fillColor = getRandomColor();
        var circle = this.add.circle(x, y, radius, fillColor).setInteractive({ hitArea: circle, useHandCursor: true }).on('pointerup', () => this.clickedShape('circle'));
        circle.name = 'circle';
        return circle;
    }

    createArc(x, y) {
        var radius = getRandomNumber(50, 113);
        var startAngle = getRandomNumber(35, 160);
        var endAngle = getRandomNumber(161, 315);
        var anticlockwise = true;
        var fillColor = getRandomColor();
        var arc = this.add.arc(x, y, radius, startAngle, endAngle, anticlockwise, fillColor).setInteractive({ hitArea: arc, useHandCursor: true }).on('pointerup', () => this.clickedShape('arc'));
        arc.name = 'arc';
        return arc;
    }

    createEllipse(x, y) {
        var width = getRandomNumber(100, 225);
        var height = getRandomNumber(100, 150);
        var fillColor = getRandomColor();

        if (height >= width - 15 && height <= width + 15) {
            height = 90;
        }
        var ellipse = this.add.ellipse(x, y, width, height, fillColor).setInteractive({ hitArea: ellipse, useHandCursor: true }).on('pointerup', () => this.clickedShape('ellipse'));
        ellipse.name = 'ellipse';
        return ellipse;
    }

    createTriangle(x, y) {
        var fillColor = getRandomColor();
        var triangle;
        var render_Triangle = getRandomNumber(0, 5);
        switch (render_Triangle) {
            case 0:
                triangle = this.add.triangle(x, y, 0, -5, 135, 100, 0, 100, fillColor);
                break;
            case 1:
                triangle = this.add.triangle(x, y, 65, -5, 135, 100, 0, 100, fillColor);
                break;
            case 2:
                triangle = this.add.triangle(x, y, 135, -5, 135, 100, 0, 100, fillColor);
                break;
            case 3:
                triangle = this.add.triangle(x, y, 135, -5, 135, 100, 0, 100, fillColor);
                break;
            case 4:
                triangle = this.add.triangle(x, y, 0, -5, 135, -5, 65, 100, fillColor);
                break;
            case 5:
                triangle = this.add.triangle(x, y, 0, -5, 135, -5, 65, 130, fillColor);
                break;
        }
        triangle.setInteractive({ hitArea: triangle, useHandCursor: true }).on('pointerup', () => this.clickedShape('triangle'));
        triangle.name = 'triangle';
        return triangle;
    }

    createPentagon(x, y) {
        var fillColor = getRandomColor();
        var points = [25, 0, 75, 0, 100, 25, 50, 75, 0, 25];
        var pentagon = this.add.polygon(x, y, points, fillColor).setInteractive({ hitArea: pentagon, useHandCursor: true }).on('pointerup', () => this.clickedShape('pentagon'));
        pentagon.name = 'pentagon';
        return pentagon;
    }

    createHexagon(x, y) {
        var fillColor = getRandomColor();
        var points = [50, 0, 100, 25, 100, 75, 50, 100, 0, 75, 0, 25];
        var hexagon = this.add.polygon(x, y, points, fillColor).setInteractive({ hitArea: hexagon, useHandCursor: true }).on('pointerup', () => this.clickedShape('hexagon'));
        hexagon.name = 'hexagon';
        return hexagon;
    }

    createSeptagon(x, y) {
        var fillColor = getRandomColor();
        var points = [53, 0, 95, 20, 105, 60, 75, 95, 30, 95, 0, 60, 10, 20];
        var septagon = this.add.polygon(x, y, points, fillColor).setInteractive({ hitArea: septagon, useHandCursor: true }).on('pointerup', () => this.clickedShape('septagon'));
        septagon.name = 'septagon';
        return septagon;
    }

    clickedShape(name) {
        if (name == this.selectItem) {
            this.question_Text.setText('Perfect! You have clicked on the ' + this.selectItem.toUpperCase() + '.').setStyle({ fill: '#00ff00' });
        }
        else {
            this.question_Text.setText('Oops! You have clicked on the wrong shape ' + name.toUpperCase() + '.').setStyle({ fill: '#ff0000' });
        }

        for (var i = 0; i < this.createdElements.length; i++) {
            this.createdElements[i].input.enabled = false;
        }

        this.resetStage(this);
    }

    resetStage() {
        var self = this;
        setTimeout(function () {
            self.question_Text.setText('').setStyle({ fill: '#fff' });
            for (var i = 0; i < self.createdElements.length; i++) {
                self.createdElements[i].destroy();
            }
            self.createdElements = [];
            self.generateShapes()
        }, 2000);
    }

}
