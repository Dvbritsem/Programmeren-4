class Ball {
    
    private div : HTMLElement
    private x : number
    private y : number

    public xspeed : number = 5
    public yspeed : number = 5
    
    constructor() {
        this.div = document.createElement("ball")

        let game = document.getElementsByTagName("game")[0]
        game.appendChild(this.div)

        this.x = Math.random() * window.innerWidth
        this.y = Math.random() * window.innerHeight
    }

    getFutureRectangle(){
        let rect = this.div.getBoundingClientRect()
        rect.x += this.xspeed
        return rect
     }
    
    public update() : void {
        if (this.x > window.innerWidth - 40) {
            this.xspeed *= -1
        }

        if (this.y > window.innerHeight - 40 || this.y < 0) {
            this.yspeed *= -1
        }

        this.x = this.x + this.xspeed
        this.y = this.y + this.yspeed

        console.log(this.x)
        console.log(this.y)

        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
    }
}