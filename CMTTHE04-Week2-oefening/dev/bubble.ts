class Bubble {

    div:HTMLElement

    constructor() {
        console.log("Blub... blub...")

        let game = document.getElementsByTagName("game")[0]
        let bubble = document.createElement("bubble")
        bubble.addEventListener("click", this.popBubble)
        game.appendChild(bubble)
    
        let x = Math.random() * (window.innerWidth - bubble.clientWidth)
        let y = Math.random() * (window.innerHeight - bubble.clientHeight)
    
        bubble.style.transform = `translate(${x}px, ${y}px)`
    }

    popBubble() {
        console.log("Plop!")
        this.remove()
    }
}
