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
class RenderGemSystem extends ash.core.System {
    
    public nodes: ash.core.NodeList;

    /**
     *
     * @constructor
     * @extends {ash.core.System}
     * @param {cc.Layer} parent
     * @param {Entities} factory
     */
    constructor(public parent:cc.Layer, public factory:Entities) {
        super()
    }

    /**
     * Add to Engine
     * Enable display for any pre-existing entities
     *
     * @param {ash.core.Engine} engine
     */
    public addToEngine(engine) {
        var node;
        this.nodes = engine.getNodeList(Nodes.GroupNode);
        node = this.nodes.head;

        while (node) {
            this.addToDisplay(node);
            node = node.next;
        }
        this.nodes.nodeAdded.add(this.addToDisplay);
        this.nodes.nodeRemoved.add(this.removeFromDisplay);
    }

    /**
     * Add To Display
     *
     * adds a node to the layer
     *
     * @param {Nodes.GroupNode} node
     */
    public addToDisplay = (node:Nodes.GroupNode) => {
        this.parent.addChild(node.display.graphic);
    };

    /**
     * Remove From Display
     *
     * The gems were dropped from the input panel.
     * increment the reference counter to avoid GC
     *
     * @param {Nodes.GroupNode} node
     */
    public removeFromDisplay = (node:Nodes.GroupNode) => {
        node.display.addRef();
        this.parent.removeChild(node.display.graphic)
    };

    /**
     * Remove Rendering system
     *
     * @param {ash.core.Engine} engine
     */
    public removeFromEngine(engine) {
        this.nodes = null;
    }

    /**
     * Update gem positions on input grid
     *
     * @param {number} time
     */
    public update(time) {
        var node = this.nodes.head;
        var graphic: cc.Node;
        var match;
        var height = this.parent.height;

        while (node) {
            if ((graphic = node.display.graphic) != null) {
                match = node.match;
                graphic.setPosition(cc.p(match.x+24, height-match.y-24));
            }

            node = node.next;
        }

    }
}
/**
 *
 * @type {Object}
 */
RenderGemSystem.prototype.nodes = null;

