class Example extends Phaser.Scene {
    constructor() {
        super({key:"Example"});
    }


    preload(){
        this.load.image('sky', 'assets/sky.png');
        this.load.image('link', 'assets/link.png');
        this.load.image('ground', 'assets/platform.png');
        this.load.image('bomb', 'assets/bomb.png');
        this.load.image('star', 'assets/rupee.png');
        this.load.image('fundo', 'assets/fundo.jpg');
    }
    create(){
        this.image1 = this.add.image(400,300, 'fundo');
        this.player = this.physics.add.sprite(70, 450, 'link');

        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);
        this.player.body.setGravityY(300);
        platforms = this.physics.add.staticGroup();




        platforms.create(300, 568, 'ground').setScale(3).refreshBody();

        platforms.create(600, 450, 'ground');
        platforms.create(200, 400, 'ground');
        platforms.create(750, 220, 'ground');
        platforms.create(300, 280, 'ground');

        this.cursors = this.input.keyboard.createCursorKeys();

        this.stars = this.physics.add.group({
            key: 'star',
            repeat: 4,
            setXY: { x: 12, y: 0, stepX: 70 }
        });

        this.stars.children.iterate(function (child) {

            child.setBounceY(Phaser.Math.FloatBetween(0.001, 0.0001));
        });

        this.physics.add.collider(this.player, platforms);
        this.physics.add.collider(this.stars, platforms);
        this.physics.add.overlap(this.player, this.stars, collectStar, null, this);

        function collectStar (player, star)
        {
            star.disableBody(true, true);
        }
    }


    update(){
        if(this.cursors.left.isDown){
            this.player.setVelocityX(-160);
        }
        else if(this.cursors.right.isDown){
            this.player.setVelocityX(160);
            }
        else{
            this.player.setVelocityX(0);
        }
        if (this.cursors.up.isDown && this.player.body.touching.down){
            this.player.setVelocityY(-330);
        }
    }



    }
