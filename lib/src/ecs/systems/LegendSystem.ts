/**
 *--------------------------------------------------------------------+
 * LegendSystem.ts
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
 * Display list of small images for all gems.
 * The gems not yet in play are semi-transparent.
 *
 */
class LegendSystem extends ash.tools.ListIteratingSystem {

    public level: number;

    /**
     *
     * @constructor
     * @extends {ash.tools.ListIteratingSystem}
     * @param {cc.Layer} parent
     * @param {Entities} factory
     */
    constructor(public parent:cc.Layer, public factory:Entities) {
        super(Nodes.LegendNode);
        this.nodeUpdateFunction = this.nodeUpdate;
        Blackboard.upgrade.add((level:number) => {this.level = level;});

    }

    /**
     *
     * @param {Nodes.LegendNode} node
     * @param {number} time
     */
    public nodeUpdate(node, time) {
        if (node.level.value <= this.level) {
            node.transform.alpha = 255;
        } else {
            node.transform.alpha = 51;
        }

        node.display.graphic.setOpacity(node.transform.alpha);

    }

}
/**
 *
 * @type {number}
 */
LegendSystem.prototype.level = 0;