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
    export class ScoreNode extends ash.core.Node {
        public display: Components.Display;
        public text: Components.Label;
        public score: Components.GameState;
        public static className = 'ScoreNode';
        public static components = {
            display: Components.Display,
            text: Components.Label,
            score: Components.GameState
        };
    }
    /**
     *
     * @type {Components.Display}
     */
    ScoreNode.prototype.display = null;
    /**
     *
     * @type {Components.Label}
     */
    ScoreNode.prototype.text = null;
    /**
     *
     * @type {Components.GameState}
     */
    ScoreNode.prototype.score = null;
}
