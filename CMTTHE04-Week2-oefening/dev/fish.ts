class Fish {

    div: HTMLElement
    
    constructor() {
        console.log("Fish was created!")

        let game = document.getElementsByTagName("game")[0]
        let fish = document.createElement("fish")
        fish.addEventListener("click", this.killFish)
        game.appendChild(fish)
    
        let x = Math.random() * (window.innerWidth - fish.clientWidth)
        let y = Math.random() * (window.innerHeight - fish.clientHeight)
        let color = Math.random() * 360
    
        fish.style.transform = `translate(${x}px, ${y}px)`
        fish.style.filter = `hue-rotate(${color}deg)`
    }

    killFish(){
        console.log("Aargh!")
        this.classList.add("dead")
    }
}
