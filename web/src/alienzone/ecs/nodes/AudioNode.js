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
    var AudioNode = (function (_super) {
        __extends(AudioNode, _super);
        function AudioNode() {
            _super.apply(this, arguments);
        }
        AudioNode.className = 'AudioNode';
        AudioNode.components = {
            audio: Components.Audio
        };
        return AudioNode;
    })(ash.core.Node);
    Nodes.AudioNode = AudioNode;
    /**
     *
     * @type {Components.Audio}
     */
    AudioNode.prototype.audio = null;
})(Nodes || (Nodes = {}));
//# sourceMappingURL=AudioNode.js.map