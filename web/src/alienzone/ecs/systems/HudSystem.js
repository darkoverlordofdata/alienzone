var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 *--------------------------------------------------------------------+
 * HudSystem.ts
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
var HudSystem = (function (_super) {
    __extends(HudSystem, _super);
    /**
     *
     * @constructor
     * @extends {ash.tools.ListIteratingSystem}
     * @param {cc.Layer} parent
     * @param {Entities} factory
     */
    function HudSystem(parent, factory) {
        _super.call(this, Nodes.HudNode);
        this.parent = parent;
        this.factory = factory;
    }
    /**
     *
     * @param {Nodes.HudNode} node
     * @param {number} time
     */
    HudSystem.prototype.nodeUpdate = function (node, time) {
        node.hud.view.setLives(node.state.lives);
        node.hud.view.setScore(node.state.hits); // Void
    };
    return HudSystem;
})(ash.tools.ListIteratingSystem);
//# sourceMappingURL=HudSystem.js.map