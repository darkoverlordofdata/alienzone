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
    var Opacity = (function () {
        /**
         * Sprite Opacity component
         *
         * @constructor
         * @param {number} alpha
         */
        function Opacity(alpha) {
            this.alpha = alpha;
        }
        Opacity.className = 'Opacity';
        return Opacity;
    }());
    Components.Opacity = Opacity;
    /**
     *
     * @type {number}
     */
    Opacity.prototype.alpha = 0;
})(Components || (Components = {}));
//# sourceMappingURL=Opacity.js.map