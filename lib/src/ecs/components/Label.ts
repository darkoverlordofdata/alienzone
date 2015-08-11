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
    export class Label {
        public static className = 'Label';
        /**
         * Text Label component
         *
         * @constructor
         * @param {string} value
         */
        constructor(public value:string) {
        }
    }
    /**
     *
     * @type {string}
     */
    Label.prototype.value = '';

}

