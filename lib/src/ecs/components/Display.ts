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

    export class Display {
        public static className = 'Display';
        /**
         * Display component
         * Use reference counting with cocos2d to avoid
         * the jsb "Invalid Native Object" exception
         * @see http://www.cocos2d-x.org/wiki/Memory_Management_of_JSB
         *
         * @param graphic
         * @constructor
         */
        constructor(public graphic) {
        }

        public refCount:number=0;
        public addRef() {
            this.graphic.retain();
            this.refCount++;
        }

        public release() {
            if (this.refCount>0) {
                this.refCount--;
                this.graphic.release();
            }
        }
    }
    /**
     *
     * @type {cc.Node}
     */
    Display.prototype.graphic = null;
    /**
     *
     * @type {number}
     */
    Display.prototype.refCount = 0;

}

