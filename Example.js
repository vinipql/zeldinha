class Example extends Phaser.Scene {
    constructor() {
        super({key:"Example"});
    }


    preload(){
        this.load.image('link', 'assets/link.png');
    }
    create(){
          this.image = this.add.sprite(400,300, 'link');

          this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
          this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
          this.key_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
          this.key_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);


    }
    update(delta){
            if(this.key_A.isDown)
                this.image.x-=5;
            if(this.key_D.isDown)
                this.image.x+=5;
            if(this.key_W.isDown)
                this.image.y-=5;
            if(this.key_S.isDown)
                this.image.y+=5;
        }


    }
