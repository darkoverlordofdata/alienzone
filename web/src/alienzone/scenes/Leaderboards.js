var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 *--------------------------------------------------------------------+
 * Leaderboards.ts
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
var Leaderboards = (function (_super) {
    __extends(Leaderboards, _super);
    /**
     *
     * @constructor
     * @extends {cc.Layer}
     * @param {cc.Scene} scene
     * @param {number} leaderboard
     * @param {number} score
     */
    function Leaderboards(scene, leaderboard, score) {
        if (leaderboard === void 0) { leaderboard = GameType.NoGame; }
        if (score === void 0) { score = -1; }
        var _this = _super.call(this) || this;
        _this.scene = scene;
        _this.leaderboard = leaderboard;
        _this.score = score;
        return new (cc.Layer.extend(_this));
    }
    /**
     * Cocos2d Constructor
     */
    Leaderboards.prototype.ctor = function () {
        this._super();
        var engine = this.engine = new ash.core.Engine();
        var factory = new Entities(this, engine);
        /**
         * create the background
         */
        factory.createButton(280, 470, 'back.png', this.onBack, this);
        factory.createImage(160, 240, 'scores.png', 150);
        factory.createImage(75, 420, 'd16a.png');
        factory.createText(160, 350, 'Scores', 24, cc.color.WHITE);
        factory.createText(160, 40, 'Alien Zone v' + VERSION, 24, cc.color.YELLOW);
        factory.createText(160, 20, "© Copyright 2014 Dark Overlord of Data", 12, cc.color.WHITE);
        /**
         * create the systemss
         */
        engine.addSystem(new RenderSystem(this, factory), SystemPriorities.render);
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
    Leaderboards.prototype.update = function (time) {
        this.engine.update(time);
    };
    /**
     *
     * @param {Object} sender
     */
    Leaderboards.prototype.onBack = function (sender) {
        this.unscheduleUpdate();
        this.engine.removeAllEntities();
        this.engine.removeAllSystems();
        this.engine = null;
        Menu.show();
    };
    return Leaderboards;
}(CCLayer));
/**
 *
 * @type {ash.core.Engine}
 */
Leaderboards.prototype.engine = null;
/**
 *
 * @type {cc.Scene}
 */
Leaderboards.prototype.scene = null;
/**
 *
 * @type {number}
 */
Leaderboards.prototype.leaderboard = 0;
/**
 *
 * @type {number}
 */
Leaderboards.prototype.score = 0;
//# sourceMappingURL=Leaderboards.js.map