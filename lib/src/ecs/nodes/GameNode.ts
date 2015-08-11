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
    export class GameNode extends ash.core.Node {
        public state: Components.GameState;
        public static className = 'GameNode';
        public static components = {
            state: Components.GameState
        };
    }
    /**
     *
     * @type {Components.GameState}
     */
    GameNode.prototype.state = null;
}
