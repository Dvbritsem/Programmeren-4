/// <reference path="ball.ts"/>

class Game {
    
    private balls:Ball[] = []

    private paddle:Paddle

    private score = 0
    private scoreboard = document.getElementById("score")
    
    constructor() {
        this.paddle = new Paddle()

        this.balls.push(new Ball(), new Ball()) 

        this.gameLoop()
    }

    checkCollision(a: ClientRect, b: ClientRect) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
     }
    
    private gameLoop(){
        this.paddle.update()

        let paddleRect = this.paddle.getRectangle()
        let ball0Rect = this.balls[0].getFutureRectangle()
        let ball1Rect = this.balls[1].getFutureRectangle()

        if (this.checkCollision(paddleRect, ball0Rect)) {
            console.log("botsing")
            this.balls[0].xspeed = (this.balls[0].xspeed *= -1.5)

            this.score = this.score + 1
            this.scoreboard.innerHTML = "Score: " + this.score
        }
        if (this.checkCollision(paddleRect, ball1Rect)) {
            console.log("botsing")
            this.balls[1].xspeed = (this.balls[1].xspeed *= -1.5)

            this.score = this.score + 1
            this.scoreboard.innerHTML = "Score: " + this.score
        }

        this.balls[0].update()
        this.balls[1].update()

        requestAnimationFrame(()=>this.gameLoop())
    }
} 

window.addEventListener("load", () => new Game())