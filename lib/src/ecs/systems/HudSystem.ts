/**
 *--------------------------------------------------------------------+
 * HudSystem.ts
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
class HudSystem extends ash.tools.ListIteratingSystem {

    /**
     *
     * @constructor
     * @extends {ash.tools.ListIteratingSystem}
     * @param {cc.Layer} parent
     * @param {Entities} factory
     */
    constructor(public parent:cc.Layer, public factory:Entities) {
        super(Nodes.HudNode);
    }

    /**
     *
     * @param {Nodes.HudNode} node
     * @param {number} time
     */
    protected nodeUpdate(node, time) {
        node.hud.view.setLives(node.state.lives);
        node.hud.view.setScore(node.state.hits);  // Void
    }
}
