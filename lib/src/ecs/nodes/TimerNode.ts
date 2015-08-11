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

module Nodes {
    export class TimerNode extends ash.core.Node {
        public display: Components.Display;
        public time: Components.Time;
        public transform: Components.Transform;
        public static className = 'TimerNode';
        public static components = {
            display: Components.Display,
            time: Components.Time,
            transform: Components.Transform
        };
    }
    /**
     *
     * @type {Components.Display}
     */
    TimerNode.prototype.display = null;
    /**
     *
     * @type {Components.Time}
     */
    TimerNode.prototype.time = null;
    /**
     *
     * @type {Components.Transform}
     */
    TimerNode.prototype.transform = null;
}
