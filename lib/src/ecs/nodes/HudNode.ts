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
    export class HudNode extends ash.core.Node {
        public state: Components.GameState;
        public hud: Components.Hud;
        public static className = 'HudNode';
        public static components = {
            state: Components.GameState,
            hud: Components.Hud
        };
    }
    /**
     *
     * @type {Components.GameState}
     */
    HudNode.prototype.state = null;
    /**
     *
     * @type {Components.Hud}
     */
    HudNode.prototype.hud = null;

}
