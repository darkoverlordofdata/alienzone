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
module Components {

    export class Audio {
        public static className = 'Audio';
        /**
         * Audio component
         *
         * @constructor
         * @param {Object} toPlay
         */
        constructor(public toPlay=[]) {
        }
        public play(sound) {
            return this.toPlay.push(sound);
        }
    }
    /**
     *
     * @type {Object}
     */
    Audio.prototype.toPlay = null;

}

