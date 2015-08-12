var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 *--------------------------------------------------------------------+
 * ScoreSystem.ts
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
var ScoreSystem = (function (_super) {
    __extends(ScoreSystem, _super);
    /**
     *
     * @constructor
     * @extends {ash.core.System}
     * @param {cc.Layer} parent
     * @param {Entities} factory
     */
    function ScoreSystem(parent, factory) {
        var _this = this;
        _super.call(this, Nodes.ScoreNode);
        this.parent = parent;
        this.factory = factory;
        this.colors = [
            new cc.Color(255, 255, 0, 255),
            new cc.Color(255, 0, 255, 255),
            new cc.Color(0, 255, 255, 255)
        ];
        this.cols = [30, 105, 150];
        this.rows = [230, 330, 230];
        /**
         * Scored
         *
         * Generate animations when score is made
         *
         * @param {number} points
         */
        this.scored = function (points) {
            cc.log('powerup = powerup' + (points % Reg.SFX_COUNT));
            cc.log('resource =' + Reg.res('powerup' + (points % Reg.SFX_COUNT)));
            if (Reg.sfx) {
                cc.audioEngine.playEffect(Reg.res('powerup' + (points % Reg.SFX_COUNT)));
            }
            var label = new cc.LabelTTF('' + points, opendyslexic, 48);
            label.setFontFillColor(_this.colors[Reg.rnd.nextInt(3)]);
            label.setPosition(_this.cols[Reg.rnd.nextInt(3)], _this.rows[Reg.rnd.nextInt(3)]);
            _this.parent.addChild(label);
            var ease;
            switch (Reg.rnd.nextInt(3)) {
                case 0:
                    ease = cc.moveTo((Reg.rnd.nextDouble() * 2) + 2, cc.p(160, 480)).easing(cc.easeBounceInOut());
                    break;
                case 1:
                    ease = cc.moveTo((Reg.rnd.nextDouble() * 2) + 2, cc.p(160, 480)).easing(cc.easeBounceIn());
                    break;
                case 2:
                    ease = cc.moveTo((Reg.rnd.nextDouble() * 2) + 2, cc.p(160, 480)).easing(cc.easeBounceOut());
                    break;
            }
            var done = cc.callFunc(function () {
                _this.parent.removeChild(label);
            }, _this);
            label.runAction(cc.sequence(ease, done));
        };
        this.nodeUpdateFunction = this.nodeUpdate;
        Reg.scored.add(this.scored);
    }
    /**
     * Remove Scoring system
     *
     * @param {ash.core.Engine} engine
     */
    ScoreSystem.prototype.removeFromEngine = function (engine) {
        _super.prototype.removeFromEngine.call(this, engine);
        Reg.scored.removeAll();
    };
    /**
     * Update Score Values
     *
     * @param {Nodes.ScoreNode} node
     * @param {number} time
     */
    ScoreSystem.prototype.nodeUpdate = function (node, time) {
        node.score.points = Reg.score;
        node.display.graphic.string = node.text.value + ": " + node.score.points;
    };
    return ScoreSystem;
})(ash.tools.ListIteratingSystem);
/**
 *
 * @type {Array<cc.Color>}
 */
ScoreSystem.prototype.colors = null;
/**
 *
 * @type {Array<number>}
 */
ScoreSystem.prototype.cols = null;
/**
 *
 * @type {Array<number>}
 */
ScoreSystem.prototype.rows = null;
//# sourceMappingURL=ScoreSystem.js.map