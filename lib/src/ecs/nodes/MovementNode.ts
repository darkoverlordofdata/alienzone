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
    export class MovementNode extends ash.core.Node {
        public position: Components.Transform;
        public static className = 'MovementNode';
        public static components = {
            position: Components.Transform
        };
    }
    /**
     *
     * @type {Components.Transform}
     */
    MovementNode.prototype.position = null;
}
