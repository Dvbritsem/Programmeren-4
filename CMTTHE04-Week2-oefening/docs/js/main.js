"use strict";
var Bubble = (function () {
    function Bubble() {
        console.log("Blub... blub...");
        var game = document.getElementsByTagName("game")[0];
        var bubble = document.createElement("bubble");
        bubble.addEventListener("click", this.popBubble);
        game.appendChild(bubble);
        var x = Math.random() * (window.innerWidth - bubble.clientWidth);
        var y = Math.random() * (window.innerHeight - bubble.clientHeight);
        bubble.style.transform = "translate(" + x + "px, " + y + "px)";
    }
    Bubble.prototype.popBubble = function () {
        console.log("Plop!");
        this.remove();
    };
    return Bubble;
}());
var Fish = (function () {
    function Fish() {
        console.log("Fish was created!");
        var game = document.getElementsByTagName("game")[0];
        var fish = document.createElement("fish");
        fish.addEventListener("click", this.killFish);
        game.appendChild(fish);
        var x = Math.random() * (window.innerWidth - fish.clientWidth);
        var y = Math.random() * (window.innerHeight - fish.clientHeight);
        var color = Math.random() * 360;
        fish.style.transform = "translate(" + x + "px, " + y + "px)";
        fish.style.filter = "hue-rotate(" + color + "deg)";
    }
    Fish.prototype.killFish = function () {
        console.log("Aargh!");
        this.classList.add("dead");
    };
    return Fish;
}());
var Seaweed = (function () {
    function Seaweed() {
        console.log("Seaweed was created!");
        var game = document.getElementsByTagName("game")[0];
        var seaweed = document.createElement("seaweed");
        seaweed.addEventListener("click", this.killSeaweed);
        game.appendChild(seaweed);
        var x = Math.random() * (window.innerWidth - seaweed.clientWidth);
        var y = Math.random() * (window.innerHeight - seaweed.clientHeight);
        var color = Math.random() * 360;
        seaweed.style.transform = "translate(" + x + "px, " + y + "px)";
        seaweed.style.filter = "hue-rotate(" + color + "deg)";
    }
    Seaweed.prototype.killSeaweed = function () {
        console.log("oof!");
    };
    return Seaweed;
}());
var Game = (function () {
    function Game() {
        console.log("Game was created!");
    }
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var bubble = new Bubble();
var fish = new Fish();
var seaweed = new Seaweed();
//# sourceMappingURL=main.js.map