/**
 *--------------------------------------------------------------------+
 * Controller.ts
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
class Controller extends CCLayer {

    public engine: ash.core.Engine;
    /**
     *
     * @constructor
     * @extends {cc.Layer}
     * @param {cc.Scene} scene
     */
    constructor(public scene) {
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

        factory.createButton(280, 470, res.controller_back_png, this.onBack, this);
        factory.createImage(160, 240, res.controller_scores_png, 150);
        factory.createImage(75, 420, res.controller_logo_png);
        factory.createText(160, 240, creditsText, 12, cc.color.WHITE);
        factory.createImage(160, 110, res.controller_google_png);
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
Controller.prototype.engine = null;