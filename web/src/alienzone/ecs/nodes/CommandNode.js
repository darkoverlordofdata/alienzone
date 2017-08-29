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
var Nodes;
(function (Nodes) {
    var CommandNode = (function (_super) {
        __extends(CommandNode, _super);
        function CommandNode() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return CommandNode;
    }(ash.core.Node));
    CommandNode.className = 'CommandNode';
    CommandNode.components = {
        command: Components.Player
    };
    Nodes.CommandNode = CommandNode;
    /**
     *
     * @type {Components.Player}
     */
    CommandNode.prototype.command = null;
})(Nodes || (Nodes = {}));
//# sourceMappingURL=CommandNode.js.map