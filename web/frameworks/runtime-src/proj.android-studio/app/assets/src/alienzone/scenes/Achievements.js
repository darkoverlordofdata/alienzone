var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 *--------------------------------------------------------------------+
 * Achievements.ts
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
var Achievements = (function (_super) {
    __extends(Achievements, _super);
    /**
     *
     * @constructor
     * @extends {cc.Layer}
     * @param {cc.Scene} scene
     * @param {number} leaderboard
     * @param {number} score
     */
    function Achievements(scene, leaderboard, score) {
        if (leaderboard === void 0) { leaderboard = GameType.NoGame; }
        if (score === void 0) { score = -1; }
        _super.call(this);
        this.scene = scene;
        this.leaderboard = leaderboard;
        this.score = score;
        return new (cc.Layer.extend(this));
    }
    /**
     * Cocos2d Constructor
     */
    Achievements.prototype.ctor = function () {
        this._super();
        var engine = this.engine = new ash.core.Engine();
        var factory = new Entities(this, engine);
        /**
         * create the background
         */
        factory.createButton(280, 470, res.achievements_back_png, this.onBack, this);
        factory.createImage(160, 240, res.achievements_scores_png, 150);
        factory.createImage(75, 420, res.achievements_logo_png);
        factory.createText(160, 350, 'Awards', 24, cc.color.WHITE);
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
    Achievements.prototype.update = function (time) {
        this.engine.update(time);
    };
    /**
     *
     * @param {Object} sender
     */
    Achievements.prototype.onBack = function (sender) {
        this.unscheduleUpdate();
        this.engine.removeAllEntities();
        this.engine.removeAllSystems();
        this.engine = null;
        Menu.show();
    };
    return Achievements;
})(CCLayer);
/**
 *
 * @type {ash.core.Engine}
 */
Achievements.prototype.engine = null;
/**
 *
 * @type {cc.Scene}
 */
Achievements.prototype.scene = null;
/**
 *
 * @type {number}
 */
Achievements.prototype.leaderboard = 0;
/**
 *
 * @type {number}
 */
Achievements.prototype.score = 0;
//# sourceMappingURL=Achievements.js.map