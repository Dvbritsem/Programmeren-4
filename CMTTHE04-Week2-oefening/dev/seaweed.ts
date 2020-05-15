class Seaweed {

    div: HTMLElement
    
    constructor() {
        console.log("Seaweed was created!")

        let game = document.getElementsByTagName("game")[0]
        let seaweed = document.createElement("seaweed")
        seaweed.addEventListener("click", this.killSeaweed)
        game.appendChild(seaweed)
    
        let x = Math.random() * (window.innerWidth - seaweed.clientWidth)
        let y = Math.random() * (window.innerHeight - seaweed.clientHeight)
        let color = Math.random() * 360
    
        seaweed.style.transform = `translate(${x}px, ${y}px)`
        seaweed.style.filter = `hue-rotate(${color}deg)`
    }

    killSeaweed(){
        console.log("oof!")
    }
}
