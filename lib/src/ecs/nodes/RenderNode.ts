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
    export class RenderNode extends ash.core.Node {
        public position: Components.Transform;
        public display: Components.Display;
        public static className = 'RenderNode';
        public static components = {
            position: Components.Transform,
            display: Components.Display
        };
    }
    /**
     *
     * @type {Components.Transform}
     */
    RenderNode.prototype.position = null;
    /**
     *
     * @type {Components.Display}
     */
    RenderNode.prototype.display = null;
}
