let game = document.getElementsByTagName("game")[0]

for (let i = 0; i < 100; i++) {
    addFish()
    addBubble()
}
    
//
// vis element
//
function addFish() {
    let fish = document.createElement("fish")
    fish.addEventListener("click", killFish)
    game.appendChild(fish)

    x = Math.random() * (window.innerWidth - fish.clientWidth)
    y = Math.random() * (window.innerHeight - fish.clientHeight)
    color = Math.random() * 360

    fish.style.transform = `translate(${x}px, ${y}px)`
    fish.style.filter = `hue-rotate(${color}deg)`
}

//
// bubble element
//
function addBubble() {
    let bubble = document.createElement("bubble")
    bubble.addEventListener("click", bubbleKill)
    game.appendChild(bubble)

    x = Math.random() * (window.innerWidth - bubble.clientWidth)
    y = Math.random() * (window.innerHeight - bubble.clientHeight)

    bubble.style.transform = `translate(${x}px, ${y}px)`
}

function killFish() {
    event.target.classList.add("dead")
}

function bubbleKill() {
    event.target.remove()
}