class Game {
    
    private trees:Tree[] = []

    private bullet:Bullet[] = []
 
    constructor() {
        // de game heeft trees nodig
        this.trees.push(
            new Tree(200, 300), 
            new Tree(200, 500)
            )
        console.log(this.trees)


        // start de game loop
        this.gameLoop()
    }
    
    private gameLoop(){
        // gebruik een for..of loop om de move functie van alle trees in de array aan te roepen
        for (let i = 0; i < 2; i++) {
            this.trees[i].move()
        }
        
                
        // animation
        requestAnimationFrame(() => this.gameLoop())
    }

    addBullet() {
        this.bullet.push(new Bullet(0, 0))
    }
} 

window.addEventListener("load", () => new Game())