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
    export class Player {
        public static className = 'Player';
        /**
         * Player Input component
         *
         * @constructor
         * @param {string} command
         */
        constructor(public command:string='') {
        }
    }
    /**
     *
     * @type {string}
     */
    Player.prototype.command = '';

}

