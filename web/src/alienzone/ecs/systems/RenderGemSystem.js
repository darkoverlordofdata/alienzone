var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 *--------------------------------------------------------------------+
 * RenderGemSystem.ts
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
var RenderGemSystem = (function (_super) {
    __extends(RenderGemSystem, _super);
    /**
     *
     * @constructor
     * @extends {ash.core.System}
     * @param {cc.Layer} parent
     * @param {Entities} factory
     */
    function RenderGemSystem(parent, factory) {
        var _this = this;
        _super.call(this);
        this.parent = parent;
        this.factory = factory;
        /**
         * Add To Display
         *
         * adds a node to the layer
         *
         * @param {Nodes.GroupNode} node
         */
        this.addToDisplay = function (node) {
            _this.parent.addChild(node.display.graphic);
        };
        /**
         * Remove From Display
         *
         * The gems were dropped from the input panel.
         * increment the reference counter to avoid GC
         *
         * @param {Nodes.GroupNode} node
         */
        this.removeFromDisplay = function (node) {
            node.display.addRef();
            _this.parent.removeChild(node.display.graphic);
        };
    }
    /**
     * Add to Engine
     * Enable display for any pre-existing entities
     *
     * @param {ash.core.Engine} engine
     */
    RenderGemSystem.prototype.addToEngine = function (engine) {
        var node;
        this.nodes = engine.getNodeList(Nodes.GroupNode);
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
    RenderGemSystem.prototype.removeFromEngine = function (engine) {
        this.nodes = null;
    };
    /**
     * Update gem positions on input grid
     *
     * @param {number} time
     */
    RenderGemSystem.prototype.update = function (time) {
        var node = this.nodes.head;
        var graphic;
        var match;
        var height = this.parent.height;
        while (node) {
            if ((graphic = node.display.graphic) != null) {
                match = node.match;
                graphic.setPosition(cc.p(match.x + 24, height - match.y - 24));
            }
            node = node.next;
        }
    };
    return RenderGemSystem;
}(ash.core.System));
/**
 *
 * @type {Object}
 */
RenderGemSystem.prototype.nodes = null;
//# sourceMappingURL=RenderGemSystem.js.map