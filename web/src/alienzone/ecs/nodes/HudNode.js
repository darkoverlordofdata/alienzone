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
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Nodes;
(function (Nodes) {
    var HudNode = (function (_super) {
        __extends(HudNode, _super);
        function HudNode() {
            _super.apply(this, arguments);
        }
        HudNode.className = 'HudNode';
        HudNode.components = {
            state: Components.GameState,
            hud: Components.Hud
        };
        return HudNode;
    })(ash.core.Node);
    Nodes.HudNode = HudNode;
    /**
     *
     * @type {Components.GameState}
     */
    HudNode.prototype.state = null;
    /**
     *
     * @type {Components.Hud}
     */
    HudNode.prototype.hud = null;
})(Nodes || (Nodes = {}));
//# sourceMappingURL=HudNode.js.map