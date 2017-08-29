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
    var GameState = (function () {
        /**
         * Game State component
         *
         * @constructor
         * @param {number} level
         * @param {number} lives
         * @param {number} points
         */
        function GameState(level, lives, points) {
            if (level === void 0) { level = 0; }
            if (lives === void 0) { lives = 3; }
            if (points === void 0) { points = 0; }
            this.level = level;
            this.lives = lives;
            this.points = points;
        }
        return GameState;
    }());
    GameState.className = 'GameState';
    Components.GameState = GameState;
    /**
     *
     * @type {number}
     */
    GameState.prototype.level = 0;
    /**
     *
     * @type {number}
     */
    GameState.prototype.lives = 3;
    /**
     *
     * @type {number}
     */
    GameState.prototype.points = 0;
})(Components || (Components = {}));
//# sourceMappingURL=GameState.js.map