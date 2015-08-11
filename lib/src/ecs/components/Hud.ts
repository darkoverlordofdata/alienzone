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
    export class Hud {
        public static className = 'Hud';
        /**
         * Game HUD component
         *
         * @constructor
         * @param {Object} view
         * @param {boolean} leaderboard
         */
        constructor(public view, public leaderboard:boolean=false) {
        }
    }
    /**
     *
     * @type {Object}
     */
    Hud.prototype.view = null;
    /**
     *
     * @type {boolean}
     */
    Hud.prototype.leaderboard = false;

}

