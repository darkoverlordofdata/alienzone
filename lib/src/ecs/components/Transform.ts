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
    export class Transform {
        public static className = 'Transform';
        /**
         * Transform Position component
         *
         * @constructor
         * @param {number} x
         * @param {number} y
         * @param {number} rotation
         */
        constructor(public x:number, public y:number, public rotation : number = 0) {
        }

    }
    /**
     *
     * @type {number}
     */
    Transform.prototype.x = 0;
    /**
     *
     * @type {number}
     */
    Transform.prototype.y = 0;
    /**
     *
     * @type {number}
     */
    Transform.prototype.rotation = 0;


}

