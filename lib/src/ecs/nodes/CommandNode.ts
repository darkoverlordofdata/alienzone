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
    export class CommandNode extends ash.core.Node {
        public command: Components.Player;
        public static className = 'CommandNode';
        public static components = {
            command: Components.Player
        };
    }
    /**
     *
     * @type {Components.Player}
     */
    CommandNode.prototype.command = null;
}
