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
    var Audio = (function () {
        /**
         * Audio component
         *
         * @constructor
         * @param {Object} toPlay
         */
        function Audio(toPlay) {
            if (toPlay === void 0) { toPlay = []; }
            this.toPlay = toPlay;
        }
        Audio.prototype.play = function (sound) {
            return this.toPlay.push(sound);
        };
        return Audio;
    }());
    Audio.className = 'Audio';
    Components.Audio = Audio;
    /**
     *
     * @type {Object}
     */
    Audio.prototype.toPlay = null;
})(Components || (Components = {}));
//# sourceMappingURL=Audio.js.map