class Tree {
    
    public div: HTMLElement
    private x:number
    private y:number
    private width:number
    private height:number
    private speed:number

    private chicken:Chicken[] = []

    constructor(x:number, y:number) {
        this.div = document.createElement("tree")
        let game = document.getElementsByTagName("game")[0]
        game.appendChild(this.div)
        
        this.speed = Math.random() * 4 + 1
        this.width = 414
        this.height = 86
        this.x = x
        this.y = y

        // dit vlot heeft kippen nodig !
        // ...
        this.chicken.push(
            new Chicken(27, -70, this),
            new Chicken(117, -70, this),
            new Chicken(207, -70, this),
            new Chicken(297, -70, this)
        )
        console.log(this.chicken)
    }
    
    public move():void {
        this.x += this.speed
        if(this.x > window.innerWidth) this.x = -450
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
    }

}