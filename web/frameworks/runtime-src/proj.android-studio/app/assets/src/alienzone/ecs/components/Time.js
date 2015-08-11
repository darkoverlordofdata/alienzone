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
    var Time = (function () {
        /**
         * Time component
         *
         * @constructor
         * @param {number} seconds
         */
        function Time(seconds) {
            if (seconds === void 0) { seconds = 0; }
            this.seconds = seconds;
        }
        Time.className = 'Time';
        return Time;
    })();
    Components.Time = Time;
    /**
     *
     * @type {number}
     */
    Time.prototype.seconds = 0;
})(Components || (Components = {}));
//# sourceMappingURL=Time.js.map