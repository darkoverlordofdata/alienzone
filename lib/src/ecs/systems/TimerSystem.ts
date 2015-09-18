/**
 *--------------------------------------------------------------------+
 * TimerSystem.ts
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
class TimerSystem extends ash.tools.ListIteratingSystem {

    public reset:boolean = true;
    public countdown:number = 0;

    /**
     *
     * @constructor
     * @extends {ash.core.System}
     * @param {cc.Layer} parent
     * @param {Entities} factory
     */
    constructor(public parent:cc.Layer, public factory:Entities) {
        super(Nodes.TimerNode);
        this.nodeUpdateFunction = this.nodeUpdate;
        Blackboard.reset.add(() => {this.reset = true;});
    }

    /**
     * Countdown Timer
     *
     * Update timer count
     * Drop gems when timer runs out
     *
     * @param {Nodes.TimerNode} node
     * @param {number} time
     */
    public nodeUpdate = (node:Nodes.TimerNode, time:number) => {
        if (this.reset) {
            this.countdown = node.time.seconds;
            this.reset = false;
        }

        this.countdown -= time;

        if (this.countdown >= 0) {
            var d1:number = ~~(this.countdown*10);
            var d2:number = d1%10;
            d1 = ~~(d1/10);
            node.display.graphic.string = `${d1}:${d2}`;
        } else {
            Blackboard.timer.dispatch();
        }
    }
}
/**
 *
 * @type {boolean}
 */
TimerSystem.prototype.reset = true;
/**
 *
 * @type {number}
 */
TimerSystem.prototype.countdown = 0;

