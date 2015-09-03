var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 *--------------------------------------------------------------------+
 * Game.ts
 *--------------------------------------------------------------------+
 * Copyright DarkOverlordOfData (c) 2014-2015
 *--------------------------------------------------------------------+
 *
 * This file is a part of Alien Zone
 *
 * Alien Zone is free software; you can copy, modify, and distribute
 * it under the terms of the GPLv3 License
 *
 *--------------------------------------------------------------------+
 *
 */
var Game = (function (_super) {
    __extends(Game, _super);
    /**
     *
     * @constructor
     * @extends {cc.Layer}
     * @param {cc.Scene} scene
     * @param {number} leaderboard
     * @param {number=} score
     */
    function Game(scene, leaderboard, score) {
        if (score === void 0) { score = 0; }
        _super.call(this);
        this.scene = scene;
        this.leaderboard = leaderboard;
        this.score = score;
        return new (cc.Layer.extend(this));
    }
    /**
     * Cocos2d Constructor
     */
    Game.prototype.ctor = function () {
        this._super();
        Reg.init(this.leaderboard, this.score);
        var engine = this.engine = new ash.core.Engine();
        var factory = new Entities(this, engine);
        var player = factory.createPlayer();
        /**
         * create the background entities
         */
        factory.createScore(160, 430, 'Score');
        factory.createImage(142, 264, 'slots.png', 100);
        factory.createLegend(296, 360, 'legend', 0, 255);
        factory.createLegend(296, 328, 'legend', 1, 255);
        factory.createLegend(296, 296, 'legend', 2, 255);
        factory.createLegend(296, 264, 'legend', 3, 51);
        factory.createLegend(296, 232, 'legend', 4, 51);
        factory.createLegend(296, 200, 'legend', 5, 51);
        factory.createLegend(296, 168, 'legend', 6, 51);
        factory.createLegend(296, 136, 'legend', 7, 51);
        factory.createInput(24, 25, 'left', player);
        factory.createInput(74, 25, 'down', player);
        factory.createInput(124, 25, 'right', player);
        factory.createInput(244, 25, 'lrot', player);
        factory.createInput(294, 25, 'rrot', player);
        factory.createButton(280, 470, 'back.png', this.onBack, this);
        switch (this.leaderboard) {
            case GameType.Unlimited:
                factory.createText(160, 460, 'InfinitY', 24, cc.color.YELLOW);
                break;
            case GameType.Timed:
                factory.createText(160, 460, 'FTL', 24, cc.color.ORANGE);
                factory.createTimer(100, 460, 10, 14, cc.color.ORANGE);
                break;
        }
        /**
         * create the systemss
         */
        engine.addSystem(new RenderSystem(this, factory), SystemPriorities.render1);
        engine.addSystem(new RenderGemSystem(this, factory), SystemPriorities.render0);
        engine.addSystem(new ScoreSystem(this, factory), SystemPriorities.animate);
        engine.addSystem(new LegendSystem(this, factory), SystemPriorities.animate);
        engine.addSystem(new InputPanelSystem(this, factory), SystemPriorities.move);
        engine.addSystem(new PuzzleSystem(this, factory), SystemPriorities.player);
        if (Reg.type === GameType.Timed) {
            engine.addSystem(new TimerSystem(this, factory), SystemPriorities.player);
        }
        /**
         * start
         */
        this.scheduleUpdate();
        return true;
    };
    /**
     *
     * @param {number} time
     */
    Game.prototype.update = function (time) {
        this.engine.update(time);
        TWEEN.update();
    };
    /**
     *
     * @param {Object} sender
     */
    Game.prototype.onBack = function (sender) {
        this.unscheduleUpdate();
        this.engine.removeAllEntities();
        this.engine.removeAllSystems();
        this.engine = null;
        Menu.show();
    };
    return Game;
})(CCLayer);
/**
 *
 * @type {ash.core.Engine}
 */
Game.prototype.engine = null;
/**
 *
 * @type {cc.Scene}
 */
Game.prototype.scene = null;
/**
 *
 * @type {number}
 */
Game.prototype.leaderboard = 0;
/**
 *
 * @type {number}
 */
Game.prototype.score = 0;
//# sourceMappingURL=Game.js.map