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
        var _this = _super.call(this, Nodes.HudNode) || this;
        _this.parent = parent;
        _this.factory = factory;
        return _this;
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
}(ash.tools.ListIteratingSystem));
//# sourceMappingURL=HudSystem.js.map