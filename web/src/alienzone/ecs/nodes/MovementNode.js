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
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Nodes;
(function (Nodes) {
    var MovementNode = (function (_super) {
        __extends(MovementNode, _super);
        function MovementNode() {
            _super.apply(this, arguments);
        }
        MovementNode.className = 'MovementNode';
        MovementNode.components = {
            position: Components.Transform
        };
        return MovementNode;
    })(ash.core.Node);
    Nodes.MovementNode = MovementNode;
    /**
     *
     * @type {Components.Transform}
     */
    MovementNode.prototype.position = null;
})(Nodes || (Nodes = {}));
//# sourceMappingURL=MovementNode.js.map