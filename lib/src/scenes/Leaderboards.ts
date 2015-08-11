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
class Leaderboards extends CCLayer {

    public engine: ash.core.Engine;
    /**
     *
     * @constructor
     * @extends {cc.Layer}
     * @param {cc.Scene} scene
     * @param {number} leaderboard
     * @param {number} score
     */
    constructor(public scene, public leaderboard:number=GameType.NoGame, public score:number=-1) {
        super();
        return new (cc.Layer.extend(this));
    }
    /**
     * Cocos2d Constructor
     */
    public ctor() {
        this._super();

        var engine = this.engine = new ash.core.Engine();
        var factory = new Entities(this, engine);

        /**
         * create the background
         */

        factory.createButton(280, 470, res.leaderboards_back_png, this.onBack, this);
        factory.createImage(160, 240, res.leaderboards_scores_png, 150);
        factory.createImage(75, 420, res.leaderboards_logo_png);
        factory.createText(160, 350, 'Scores', 24, cc.color.WHITE);
        factory.createText(160, 40, 'Alien Zone v'+VERSION, 24, cc.color.YELLOW);
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
    }

    /**
     *
     * @param {number} time
     */
    update(time:number) {
        this.engine.update(time);
    }

    /**
     *
     * @param {Object} sender
     */
    onBack(sender) {
        this.unscheduleUpdate();
        this.engine.removeAllEntities();
        this.engine.removeAllSystems();
        this.engine = null;
        Menu.show();
    }
}
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


