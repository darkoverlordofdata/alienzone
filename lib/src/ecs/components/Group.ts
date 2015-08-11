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
    export class Group {
        public static className = 'Group';
        /**
         * Gem Group component
         *
         * @constructor
         * @param {number} index
         */
        constructor(public index:number=0) {
        }
    }
    /**
     *
     * @type {number}
     */
    Group.prototype.index = 0;

}

