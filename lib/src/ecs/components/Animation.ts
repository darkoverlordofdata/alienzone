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

    export class Animation {
        public static className = 'Animation';
        /**
         * Animation component
         *
         * @constructor
         * @param {Object} animation
         */
        constructor(public animation) {
        }
    }
    /**
     *
     * @type {Object}
     */
    Animation.prototype.animation = null;
    
}

