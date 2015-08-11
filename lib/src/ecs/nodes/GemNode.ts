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
    export class GemNode extends ash.core.Node {
        public display: Components.Display;
        public match: Components.Match;
        public puzzle: Components.Puzzle;
        public static className = 'GemNode';
        public static components = {
            display: Components.Display,
            match: Components.Match,
            puzzle: Components.Puzzle
        };
    }
    /**
     *
     * @type {Components.Display}
     */
    GemNode.prototype.display = null;
    /**
     *
     * @type {Components.Match}
     */
    GemNode.prototype.match = null;
    /**
     *
     * @type {Components.Puzzle}
     */
    GemNode.prototype.puzzle = null;

}
