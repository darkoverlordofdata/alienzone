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

    export class Match {
        public type: string;
        public x: number;
        public y: number;
        public col: number;
        public row: number;
        public id: number;
        public index: number;
        public static className = 'Match';

        /**
         * Gem Match component
         *
         * @constructor
         * @param {number} id
         * @param {string} type
         * @param {number} size
         * @param {number} index
         * @param {number} col
         * @param {number} row
         */
        constructor(id: number, type: string, size: number, index: number, col: number, row: number) {
            this.type = type;
            this.id = id;
            this.col = col;
            this.row = row;
            this.index = index;
            this.x = col * size;
            this.y = row * size;
        }
    }
    /**
     *
     * @type {number}
     */
    Match.prototype.x = 0;
    /**
     *
     * @type {number}
     */
    Match.prototype.y = 0;
    /**
     *
     * @type {number}
     */
    Match.prototype.id = 0;
    /**
     *
     * @type {string}
     */
    Match.prototype.type = '';
    /**
     *
     * @type {number}
     */
    Match.prototype.col = 0;
    /**
     *
     * @type {number}
     */
    Match.prototype.row = 0;
    /**
     *
     * @type {number}
     */
    Match.prototype.index = 0;

}

