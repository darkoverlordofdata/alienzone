/**
 *--------------------------------------------------------------------+
 * Components.ts
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
var Components;
(function (Components) {
    var Puzzle = (function () {
        /**
         * Puzzle Grid component
         *
         * @constructor
         * @param {number} col
         * @param {number} row
         * @param {boolean} init
         */
        function Puzzle(col, row, init) {
            if (init === void 0) { init = true; }
            this.col = col;
            this.row = row;
            this.init = init;
        }
        Puzzle.className = 'Puzzle';
        return Puzzle;
    }());
    Components.Puzzle = Puzzle;
    /**
     *
     * @type {number}
     */
    Puzzle.prototype.col = 0;
    /**
     *
     * @type {number}
     */
    Puzzle.prototype.row = 0;
    /**
     *
     * @type {boolean}
     */
    Puzzle.prototype.init = false;
})(Components || (Components = {}));
//# sourceMappingURL=Puzzle.js.map