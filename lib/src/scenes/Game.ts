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
class Game extends CCLayer {


    public engine: ash.core.Engine;

    /**
     *
     * @constructor
     * @extends {cc.Layer}
     * @param {cc.Scene} scene
     * @param {number} leaderboard
     * @param {number=} score
     */
    constructor(public scene, public leaderboard: number, public score: number=0) {
        super();
        return new (cc.Layer.extend(this));
    }
    
    /**
     * Cocos2d Constructor
     */
    ctor() {
        this._super();
        Blackboard.init(this.leaderboard, this.score);

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
        factory.createInput( 24,   25, 'left',   player);
        factory.createInput( 74,   25, 'down',   player);
        factory.createInput(124,   25, 'right',  player);
        factory.createInput(244,   25, 'lrot',   player);
        factory.createInput(294,   25, 'rrot',   player);
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
        engine.addSystem(new RenderSystem(this, factory),       SystemPriorities.render1);
        engine.addSystem(new RenderGemSystem(this, factory),    SystemPriorities.render0);
        engine.addSystem(new ScoreSystem(this, factory),        SystemPriorities.animate);
        engine.addSystem(new LegendSystem(this, factory),       SystemPriorities.animate);
        engine.addSystem(new InputPanelSystem(this, factory),   SystemPriorities.move);
        engine.addSystem(new PuzzleSystem(this, factory),       SystemPriorities.player);
        if (Blackboard.type === GameType.Timed) {
            engine.addSystem(new TimerSystem(this, factory),    SystemPriorities.player);
        }

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
        TWEEN.update();
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

