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
    export class LegendNode extends ash.core.Node {
        public display: Components.Display;
        public level: Components.Level;
        public transform: Components.Transform;
        public static className = 'LegendNode';
        public static components = {
            display: Components.Display,
            level: Components.Level,
            transform: Components.Transform
        };
    }
    /**
     *
     * @type {Components.Display}
     */
    LegendNode.prototype.display = null;
    /**
     *
     * @type {Components.Level}
     */
    LegendNode.prototype.level = null;
    /**
     *
     * @type {Components.Transform}
     */
    LegendNode.prototype.transform = null;
}
