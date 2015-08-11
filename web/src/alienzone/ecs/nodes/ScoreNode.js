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
    var ScoreNode = (function (_super) {
        __extends(ScoreNode, _super);
        function ScoreNode() {
            _super.apply(this, arguments);
        }
        ScoreNode.className = 'ScoreNode';
        ScoreNode.components = {
            display: Components.Display,
            text: Components.Label,
            score: Components.GameState
        };
        return ScoreNode;
    })(ash.core.Node);
    Nodes.ScoreNode = ScoreNode;
    /**
     *
     * @type {Components.Display}
     */
    ScoreNode.prototype.display = null;
    /**
     *
     * @type {Components.Label}
     */
    ScoreNode.prototype.text = null;
    /**
     *
     * @type {Components.GameState}
     */
    ScoreNode.prototype.score = null;
})(Nodes || (Nodes = {}));
//# sourceMappingURL=ScoreNode.js.map