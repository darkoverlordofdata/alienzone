var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
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
var Controller = (function (_super) {
    __extends(Controller, _super);
    /**
     *
     * @constructor
     * @extends {cc.Layer}
     * @param {cc.Scene} scene
     */
    function Controller(scene) {
        _super.call(this);
        this.scene = scene;
        return new (cc.Layer.extend(this));
    }
    /**
     * Cocos2d Constructor
     */
    Controller.prototype.ctor = function () {
        this._super();
        var engine = this.engine = new ash.core.Engine();
        var factory = new Entities(this, engine);
        /**
         * create the background
         */
        factory.createButton(280, 470, 'back.png', this.onBack, this);
        factory.createImage(160, 240, 'scores.png', 150);
        factory.createImage(75, 420, 'd16a.png');
        factory.createText(160, 240, creditsText, 12, cc.color.WHITE);
        factory.createImage(160, 110, 'en_generic_rgb_wo_45.png');
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
    Controller.prototype.update = function (time) {
        this.engine.update(time);
    };
    /**
     *
     * @param {Object} sender
     */
    Controller.prototype.onBack = function (sender) {
        this.unscheduleUpdate();
        this.engine.removeAllEntities();
        this.engine.removeAllSystems();
        this.engine = null;
        Menu.show();
    };
    return Controller;
})(CCLayer);
/**
 *
 * @type {ash.core.Engine}
 */
Controller.prototype.engine = null;
//# sourceMappingURL=Controller.js.map