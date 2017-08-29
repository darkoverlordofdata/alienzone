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
    var Player = (function () {
        /**
         * Player Input component
         *
         * @constructor
         * @param {string} command
         */
        function Player(command) {
            if (command === void 0) { command = ''; }
            this.command = command;
        }
        return Player;
    }());
    Player.className = 'Player';
    Components.Player = Player;
    /**
     *
     * @type {string}
     */
    Player.prototype.command = '';
})(Components || (Components = {}));
//# sourceMappingURL=Player.js.map