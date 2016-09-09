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
    var Hud = (function () {
        /**
         * Game HUD component
         *
         * @constructor
         * @param {Object} view
         * @param {boolean} leaderboard
         */
        function Hud(view, leaderboard) {
            if (leaderboard === void 0) { leaderboard = false; }
            this.view = view;
            this.leaderboard = leaderboard;
        }
        Hud.className = 'Hud';
        return Hud;
    }());
    Components.Hud = Hud;
    /**
     *
     * @type {Object}
     */
    Hud.prototype.view = null;
    /**
     *
     * @type {boolean}
     */
    Hud.prototype.leaderboard = false;
})(Components || (Components = {}));
//# sourceMappingURL=Hud.js.map