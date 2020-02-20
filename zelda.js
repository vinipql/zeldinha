var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 200}
        }
    },
    scene: [ Example ]
}

const gameState = {}
var platforms;


const game = new Phaser.Game(config);



