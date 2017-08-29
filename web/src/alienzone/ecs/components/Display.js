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
var Components;
(function (Components) {
    var Display = (function () {
        /**
         * Display component
         * Use reference counting with cocos2d to avoid
         * the jsb "Invalid Native Object" exception
         * @see http://www.cocos2d-x.org/wiki/Memory_Management_of_JSB
         *
         * @param graphic
         * @constructor
         */
        function Display(graphic) {
            this.graphic = graphic;
            this.refCount = 0;
        }
        Display.prototype.addRef = function () {
            this.graphic.retain();
            this.refCount++;
        };
        Display.prototype.release = function () {
            if (this.refCount > 0) {
                this.refCount--;
                this.graphic.release();
            }
        };
        return Display;
    }());
    Display.className = 'Display';
    Components.Display = Display;
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
})(Components || (Components = {}));
//# sourceMappingURL=Display.js.map