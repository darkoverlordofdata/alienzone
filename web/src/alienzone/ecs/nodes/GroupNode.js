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
    var GroupNode = (function (_super) {
        __extends(GroupNode, _super);
        function GroupNode() {
            _super.apply(this, arguments);
        }
        GroupNode.className = 'GroupNode';
        GroupNode.components = {
            display: Components.Display,
            match: Components.Match,
            group: Components.Group
        };
        return GroupNode;
    }(ash.core.Node));
    Nodes.GroupNode = GroupNode;
    /**
     *
     * @type {Components.Display}
     */
    GroupNode.prototype.display = null;
    /**
     *
     * @type {Components.Match}
     */
    GroupNode.prototype.match = null;
    /**
     *
     * @type {Components.Group}
     */
    GroupNode.prototype.group = null;
})(Nodes || (Nodes = {}));
//# sourceMappingURL=GroupNode.js.map