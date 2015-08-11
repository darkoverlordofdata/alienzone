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
    var Transform = (function () {
        /**
         * Transform Position component
         *
         * @constructor
         * @param {number} x
         * @param {number} y
         * @param {number} rotation
         */
        function Transform(x, y, rotation) {
            if (rotation === void 0) { rotation = 0; }
            this.x = x;
            this.y = y;
            this.rotation = rotation;
        }
        Transform.className = 'Transform';
        return Transform;
    })();
    Components.Transform = Transform;
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
})(Components || (Components = {}));
//# sourceMappingURL=Transform.js.map