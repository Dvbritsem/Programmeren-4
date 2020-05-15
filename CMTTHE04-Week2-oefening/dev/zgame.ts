class Game {
        
    constructor() {
        console.log("Game was created!")
    }
} 

window.addEventListener("load", () => new Game())
let bubble : Bubble = new Bubble()
let fish : Fish = new Fish()
let seaweed : Seaweed = new Seaweed()