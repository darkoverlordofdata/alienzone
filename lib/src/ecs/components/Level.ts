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
    export class Level {
        public static className = 'Level';

        /**
         * Game Level component
         *
         * @constructor
         * @param {string} value
         */
        constructor(public value:number) {
        }
    }
    /**
     *
     * @type {number}
     */
    Level.prototype.value = 0;

}

