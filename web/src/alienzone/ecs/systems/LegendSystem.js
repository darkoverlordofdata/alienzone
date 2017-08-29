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
 * LegendSystem.ts
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
 * Display list of small images for all gems.
 * The gems not yet in play are semi-transparent.
 *
 */
var LegendSystem = (function (_super) {
    __extends(LegendSystem, _super);
    /**
     *
     * @constructor
     * @extends {ash.tools.ListIteratingSystem}
     * @param {cc.Layer} parent
     * @param {Entities} factory
     */
    function LegendSystem(parent, factory) {
        var _this = _super.call(this, Nodes.LegendNode) || this;
        _this.parent = parent;
        _this.factory = factory;
        _this.nodeUpdateFunction = _this.nodeUpdate;
        Blackboard.upgrade.add(function (level) { _this.level = level; });
        return _this;
    }
    /**
     *
     * @param {Nodes.LegendNode} node
     * @param {number} time
     */
    LegendSystem.prototype.nodeUpdate = function (node, time) {
        if (node.level.value <= this.level) {
            node.transform.alpha = 255;
        }
        else {
            node.transform.alpha = 51;
        }
        node.display.graphic.setOpacity(node.transform.alpha);
    };
    return LegendSystem;
}(ash.tools.ListIteratingSystem));
/**
 *
 * @type {number}
 */
LegendSystem.prototype.level = 0;
//# sourceMappingURL=LegendSystem.js.map