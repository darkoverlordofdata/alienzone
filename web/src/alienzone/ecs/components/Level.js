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
    var Level = (function () {
        /**
         * Game Level component
         *
         * @constructor
         * @param {string} value
         */
        function Level(value) {
            this.value = value;
        }
        Level.className = 'Level';
        return Level;
    }());
    Components.Level = Level;
    /**
     *
     * @type {number}
     */
    Level.prototype.value = 0;
})(Components || (Components = {}));
//# sourceMappingURL=Level.js.map