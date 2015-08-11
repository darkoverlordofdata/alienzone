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
    var Animation = (function () {
        /**
         * Animation component
         *
         * @constructor
         * @param {Object} animation
         */
        function Animation(animation) {
            this.animation = animation;
        }
        Animation.className = 'Animation';
        return Animation;
    })();
    Components.Animation = Animation;
    /**
     *
     * @type {Object}
     */
    Animation.prototype.animation = null;
})(Components || (Components = {}));
//# sourceMappingURL=Animation.js.map