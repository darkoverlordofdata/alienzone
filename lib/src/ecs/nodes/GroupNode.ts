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
    export class GroupNode extends ash.core.Node {
        public display: Components.Display;
        public match: Components.Match;
        public group: Components.Group;
        public static className = 'GroupNode';
        public static components = {
            display: Components.Display,
            match: Components.Match,
            group: Components.Group
        };
    }
    /**
     *
     * @type {Components.Display}
     */
    GroupNode.prototype.display = null;
    /**
     *
     * @type {Components.Match}
     */
    GroupNode.prototype.match = null;
    /**
     *
     * @type {Components.Group}
     */
    GroupNode.prototype.group = null;
}
