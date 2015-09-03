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
    var RenderNode = (function (_super) {
        __extends(RenderNode, _super);
        function RenderNode() {
            _super.apply(this, arguments);
        }
        RenderNode.className = 'RenderNode';
        RenderNode.components = {
            position: Components.Transform,
            display: Components.Display
        };
        return RenderNode;
    })(ash.core.Node);
    Nodes.RenderNode = RenderNode;
    /**
     *
     * @type {Components.Transform}
     */
    RenderNode.prototype.position = null;
    /**
     *
     * @type {Components.Display}
     */
    RenderNode.prototype.display = null;
})(Nodes || (Nodes = {}));
//# sourceMappingURL=RenderNode.js.map