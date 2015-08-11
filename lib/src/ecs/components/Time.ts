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
    export class Time {
        public static className = 'Time';
        /**
         * Time component
         *
         * @constructor
         * @param {number} seconds
         */
        constructor(public seconds:number=0) {
        }
    }
    /**
     *
     * @type {number}
     */
    Time.prototype.seconds = 0;
}

