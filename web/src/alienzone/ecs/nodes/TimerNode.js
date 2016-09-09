/**
*--------------------------------------------------------------------+
* Nodes.ts
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
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Nodes;
(function (Nodes) {
    var TimerNode = (function (_super) {
        __extends(TimerNode, _super);
        function TimerNode() {
            _super.apply(this, arguments);
        }
        TimerNode.className = 'TimerNode';
        TimerNode.components = {
            display: Components.Display,
            time: Components.Time,
            transform: Components.Transform
        };
        return TimerNode;
    }(ash.core.Node));
    Nodes.TimerNode = TimerNode;
    /**
     *
     * @type {Components.Display}
     */
    TimerNode.prototype.display = null;
    /**
     *
     * @type {Components.Time}
     */
    TimerNode.prototype.time = null;
    /**
     *
     * @type {Components.Transform}
     */
    TimerNode.prototype.transform = null;
})(Nodes || (Nodes = {}));
//# sourceMappingURL=TimerNode.js.map