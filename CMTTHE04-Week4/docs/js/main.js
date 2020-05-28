"use strict";
var Bullet = (function () {
    function Bullet(x, y) {
        this.width = 22;
        this.height = 22;
        this.div = document.createElement("bullet");
        var game = document.getElementsByTagName("game")[0];
        game.appendChild(this.div);
        this.x = x;
        this.y = y;
        this.xspeed = -1;
        this.yspeed = 1;
        this.move();
    }
    Bullet.prototype.move = function () {
        this.x += this.xspeed;
        this.y += this.yspeed;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Bullet;
}());
var Chicken = (function () {
    function Chicken(x, y, tree) {
        var _this = this;
        this.gotGun = false;
        this.div = document.createElement("bird");
        tree.div.appendChild(this.div);
        this.x = x;
        this.y = y;
        this.width = 67;
        this.height = 110;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
        this.div.addEventListener("click", function () { return _this.onClick(); });
    }
    Chicken.prototype.onClick = function () {
        if (!this.gotGun) {
            this.gun = new Gun(this);
            this.gotGun = true;
        }
        else {
            this.gun.fire();
        }
    };
    return Chicken;
}());
var Game = (function () {
    function Game() {
        this.trees = [];
        this.bullet = [];
        this.trees.push(new Tree(200, 300), new Tree(200, 500));
        console.log(this.trees);
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        for (var i = 0; i < 2; i++) {
            this.trees[i].move();
        }
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.addBullet = function () {
        this.bullet.push(new Bullet(0, 0));
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var Gun = (function () {
    function Gun(chicken) {
        this.div = document.createElement("gun");
        chicken.div.appendChild(this.div);
        this.x = 20;
        this.y = 40;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
        this.fire();
    }
    Gun.prototype.fire = function () {
        var rect = this.div.getBoundingClientRect();
        console.log("plaats een kogel op " + rect.left + " , " + rect.top);
        this.game.addBullet();
    };
    return Gun;
}());
var Tree = (function () {
    function Tree(x, y) {
        this.chicken = [];
        this.div = document.createElement("tree");
        var game = document.getElementsByTagName("game")[0];
        game.appendChild(this.div);
        this.speed = Math.random() * 4 + 1;
        this.width = 414;
        this.height = 86;
        this.x = x;
        this.y = y;
        this.chicken.push(new Chicken(27, -70, this), new Chicken(117, -70, this), new Chicken(207, -70, this), new Chicken(297, -70, this));
        console.log(this.chicken);
    }
    Tree.prototype.move = function () {
        this.x += this.speed;
        if (this.x > window.innerWidth)
            this.x = -450;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Tree;
}());
//# sourceMappingURL=main.js.map