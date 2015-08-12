var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 *--------------------------------------------------------------------+
 * RenderSystem.ts
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
var RenderSystem = (function (_super) {
    __extends(RenderSystem, _super);
    /**
     *
     * @constructor
     * @extends {ash.core.System}
     * @param {cc.Layer} parent
     * @param {Entities} factory
     */
    function RenderSystem(parent, factory) {
        var _this = this;
        _super.call(this);
        this.parent = parent;
        this.factory = factory;
        /**
         * Add To Display
         *
         * adds a node to the layer
         *
         * @param {Nodes.RenderNode} node
         */
        this.addToDisplay = function (node) {
            _this.parent.addChild(node.display.graphic);
        };
        /**
         * Remove From Display
         *
         * removes a node from the layer
         * decrement the reference counter to allow GC
         *
         * @param {RenderNode} node
         */
        this.removeFromDisplay = function (node) {
            node.display.release();
            _this.parent.removeChild(node.display.graphic);
        };
    }
    /**
     * Add to Engine
     * Enable display for any pre-existing entities
     *
     * @param {ash.core.Engine} engine
     */
    RenderSystem.prototype.addToEngine = function (engine) {
        var node;
        this.nodes = engine.getNodeList(Nodes.RenderNode);
        node = this.nodes.head;
        while (node) {
            this.addToDisplay(node);
            node = node.next;
        }
        this.nodes.nodeAdded.add(this.addToDisplay);
        this.nodes.nodeRemoved.add(this.removeFromDisplay);
    };
    /**
     * Remove Rendering system
     *
     * @param {ash.core.Engine} engine
     */
    RenderSystem.prototype.removeFromEngine = function (engine) {
        this.nodes = null;
    };
    /**
     * Update positions for display components
     *
     * @param {number} time
     */
    RenderSystem.prototype.update = function (time) {
        var graphic, pos;
        var node = this.nodes.head;
        while (node) {
            if ((graphic = node.display.graphic) != null) {
                pos = node.position;
                graphic.setPosition(cc.p(pos.x, pos.y));
                graphic.setRotation(cc.radiansToDegrees(Tau - node.position.rotation));
            }
            node = node.next;
        }
    };
    return RenderSystem;
})(ash.core.System);
/**
 *
 * @type {ash.core.NodeList} nodes
 */
RenderSystem.prototype.nodes = null;
//# sourceMappingURL=RenderSystem.js.map