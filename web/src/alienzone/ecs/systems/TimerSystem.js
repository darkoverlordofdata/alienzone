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
 * TimerSystem.ts
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
var TimerSystem = (function (_super) {
    __extends(TimerSystem, _super);
    /**
     *
     * @constructor
     * @extends {ash.core.System}
     * @param {cc.Layer} parent
     * @param {Entities} factory
     */
    function TimerSystem(parent, factory) {
        var _this = _super.call(this, Nodes.TimerNode) || this;
        _this.parent = parent;
        _this.factory = factory;
        _this.reset = true;
        _this.countdown = 0;
        /**
         * Countdown Timer
         *
         * Update timer count
         * Drop gems when timer runs out
         *
         * @param {Nodes.TimerNode} node
         * @param {number} time
         */
        _this.nodeUpdate = function (node, time) {
            if (_this.reset) {
                _this.countdown = node.time.seconds;
                _this.reset = false;
            }
            _this.countdown -= time;
            if (_this.countdown >= 0) {
                var d1 = ~~(_this.countdown * 10);
                var d2 = d1 % 10;
                d1 = ~~(d1 / 10);
                node.display.graphic.string = d1 + ":" + d2;
            }
            else {
                Blackboard.timer.dispatch();
            }
        };
        _this.nodeUpdateFunction = _this.nodeUpdate;
        Blackboard.reset.add(function () { _this.reset = true; });
        return _this;
    }
    return TimerSystem;
}(ash.tools.ListIteratingSystem));
/**
 *
 * @type {boolean}
 */
TimerSystem.prototype.reset = true;
/**
 *
 * @type {number}
 */
TimerSystem.prototype.countdown = 0;
//# sourceMappingURL=TimerSystem.js.map