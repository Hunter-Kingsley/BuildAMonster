class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;

        this.smileX = this.bodyX;
        this.smileY = this.bodyY + 55;

        this.hornX = this.bodyX + 80;
        this.hornY = this.bodyY - 80;

        this.eyeX = this.bodyX;
        this.eyeY = this.bodyY - 40;

        this.noseX = this.bodyX;
        this.noseY = this.bodyY + 10;

        this.leftArmX = this.bodyX - 100;
        this.leftArmY = this.bodyY + 50;

        this.rightArmX = this.bodyX + 100;
        this.rightArmY = this.bodyY + 50;
        
        this.leftLegX = this.bodyX - 60;
        this.leftLegY = this.bodyY + 120;

        this.rightLegX = this.bodyX + 60;
        this.rightLegY = this.bodyY + 120;
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        console.log(my);
        for (const property in my.sprite) {
            console.log("bruh");
            console.log(`${property}: ${object[property]}`);
          }

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_redA.png");
        my.sprite.eye = this.add.sprite(this.eyeX, this.eyeY, "monsterParts", "eye_psycho_dark.png");
        my.sprite.leftArm = this.add.sprite(this.leftArmX, this.leftArmY, "monsterParts", "arm_redA.png");
        my.sprite.leftArm.flipX = true;
        my.sprite.rightArm = this.add.sprite(this.rightArmX, this.rightArmY, "monsterParts", "arm_redA.png");
        my.sprite.leftLeg = this.add.sprite(this.leftLegX, this.leftLegY, "monsterParts", "leg_redE.png");
        my.sprite.leftLeg.flipX = true;
        my.sprite.rightLeg = this.add.sprite(this.rightLegX, this.rightLegY, "monsterParts", "leg_redE.png");
        my.sprite.smile = this.add.sprite(this.smileX, this.smileY, "monsterParts", "mouthG.png");
        my.sprite.nose = this.add.sprite(this.noseX, this.noseY, "monsterParts", "nose_red.png");
        my.sprite.horn = this.add.sprite(this.hornX, this.hornY, "monsterParts", "detail_red_horn_small.png");
        my.sprite.fangs = this.add.sprite(this.smileX, this.smileY, "monsterParts", "mouth_closed_fangs.png");
        my.sprite.fangs.visible = false;

        this.input.keyboard.on('keydown-F', (event) => {
            my.sprite.smile.visible = false;
            my.sprite.fangs.visible = true;
        });

        this.input.keyboard.on('keydown-S', (event) => {
            my.sprite.smile.visible = true;
            my.sprite.fangs.visible = false;
        });

        this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        if (this.aKey.isDown) {
            for (const i in my.sprite) {
                my.sprite[i].x -= 1;
            }
        }

        if (this.dKey.isDown) {
            for (const i in my.sprite) {
                my.sprite[i].x += 1;
            }
        }

    }

}