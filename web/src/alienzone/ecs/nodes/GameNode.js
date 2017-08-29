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
    var GameNode = (function (_super) {
        __extends(GameNode, _super);
        function GameNode() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return GameNode;
    }(ash.core.Node));
    GameNode.className = 'GameNode';
    GameNode.components = {
        state: Components.GameState
    };
    Nodes.GameNode = GameNode;
    /**
     *
     * @type {Components.GameState}
     */
    GameNode.prototype.state = null;
})(Nodes || (Nodes = {}));
//# sourceMappingURL=GameNode.js.map