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
class RenderSystem extends ash.core.System {

  public nodes:ash.core.NodeList;

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
    this.nodes = engine.getNodeList(Nodes.RenderNode);
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
   * @param {Nodes.RenderNode} node
   */
  public addToDisplay = (node:Nodes.RenderNode) => {
    this.parent.addChild(node.display.graphic);
  };

  /**
   * Remove From Display
   *
   * removes a node from the layer
   * decrement the reference counter to allow GC
   *
   * @param {RenderNode} node
   */
  public removeFromDisplay = (node:Nodes.RenderNode) => {
    node.display.release();
    this.parent.removeChild(node.display.graphic);
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
   * Update positions for display components
   *
   * @param {number} time
   */
  public update(time) {
    var graphic, pos;
    var node:Nodes.RenderNode = this.nodes.head;

    while (node) {
      if ((graphic = node.display.graphic) != null) {
        pos = node.position;
        graphic.setPosition(cc.p(pos.x, pos.y));
        graphic.setRotation(cc.radiansToDegrees(Tau - node.position.rotation));
      }

      node = node.next;
    }

  }
}
/**
 *
 * @type {ash.core.NodeList} nodes
 */
RenderSystem.prototype.nodes=null;
