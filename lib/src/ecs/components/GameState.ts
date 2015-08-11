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
    export class GameState {
        public static className = 'GameState';
        /**
         * Game State component
         *
         * @constructor
         * @param {number} level
         * @param {number} lives
         * @param {number} points
         */
        constructor(public level:number=0, public lives:number=3, public points:number=0) {
        }
    }
    /**
     *
     * @type {number}
     */
    GameState.prototype.level = 0;
    /**
     *
     * @type {number}
     */
    GameState.prototype.lives = 3;
    /**
     *
     * @type {number}
     */
    GameState.prototype.points = 0;

}

