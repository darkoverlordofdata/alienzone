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
    export class Puzzle {
        public static className = 'Puzzle';
        /**
         * Puzzle Grid component
         *
         * @constructor
         * @param {number} col
         * @param {number} row
         * @param {boolean} init
         */
        constructor(public col:number, public row:number, public init:boolean=true) {
        }
    }
    /**
     *
     * @type {number}
     */
    Puzzle.prototype.col = 0;
    /**
     *
     * @type {number}
     */
    Puzzle.prototype.row = 0;
    /**
     *
     * @type {boolean}
     */
    Puzzle.prototype.init = false;

}

