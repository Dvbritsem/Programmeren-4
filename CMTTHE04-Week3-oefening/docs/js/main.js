"use strict";
var Ball = (function () {
    function Ball() {
        this.xspeed = 5;
        this.yspeed = 5;
        this.div = document.createElement("ball");
        var game = document.getElementsByTagName("game")[0];
        game.appendChild(this.div);
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
    }
    Ball.prototype.getFutureRectangle = function () {
        var rect = this.div.getBoundingClientRect();
        rect.x += this.xspeed;
        return rect;
    };
    Ball.prototype.update = function () {
        if (this.x > window.innerWidth - 40) {
            this.xspeed *= -1;
        }
        if (this.y > window.innerHeight - 40 || this.y < 0) {
            this.yspeed *= -1;
        }
        this.x = this.x + this.xspeed;
        this.y = this.y + this.yspeed;
        console.log(this.x);
        console.log(this.y);
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Ball;
}());
var Game = (function () {
    function Game() {
        this.balls = [];
        this.score = 0;
        this.scoreboard = document.getElementById("score");
        this.paddle = new Paddle();
        this.balls.push(new Ball(), new Ball());
        this.gameLoop();
    }
    Game.prototype.checkCollision = function (a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    };
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.paddle.update();
        var paddleRect = this.paddle.getRectangle();
        var ball0Rect = this.balls[0].getFutureRectangle();
        var ball1Rect = this.balls[1].getFutureRectangle();
        if (this.checkCollision(paddleRect, ball0Rect)) {
            console.log("botsing");
            this.balls[0].xspeed = (this.balls[0].xspeed *= -1.5);
            this.score = this.score + 1;
            this.scoreboard.innerHTML = "Score: " + this.score;
        }
        if (this.checkCollision(paddleRect, ball1Rect)) {
            console.log("botsing");
            this.balls[1].xspeed = (this.balls[1].xspeed *= -1.5);
            this.score = this.score + 1;
            this.scoreboard.innerHTML = "Score: " + this.score;
        }
        this.balls[0].update();
        this.balls[1].update();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var Paddle = (function () {
    function Paddle() {
        var _this = this;
        this.downSpeed = 0;
        this.upSpeed = 0;
        this.div = document.createElement("paddle");
        var game = document.getElementsByTagName("game")[0];
        game.appendChild(this.div);
        this.upkey = 87;
        this.downkey = 83;
        this.x = 0;
        this.y = 200;
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
    }
    Paddle.prototype.getRectangle = function () {
        return this.div.getBoundingClientRect();
    };
    Paddle.prototype.onKeyDown = function (e) {
        console.log(e.keyCode);
        switch (e.keyCode) {
            case this.upkey:
                this.upSpeed = 5;
                break;
            case this.downkey:
                this.downSpeed = 5;
                break;
        }
    };
    Paddle.prototype.onKeyUp = function (e) {
        switch (e.keyCode) {
            case this.upkey:
                this.upSpeed = 0;
                break;
            case this.downkey:
                this.downSpeed = 0;
                break;
        }
    };
    Paddle.prototype.update = function () {
        var newY = this.y - this.upSpeed + this.downSpeed;
        if (newY > 0 && newY + 100 < window.innerHeight)
            this.y = newY;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Paddle;
}());
//# sourceMappingURL=main.js.map