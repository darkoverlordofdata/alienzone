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
    var Group = (function () {
        /**
         * Gem Group component
         *
         * @constructor
         * @param {number} index
         */
        function Group(index) {
            if (index === void 0) { index = 0; }
            this.index = index;
        }
        Group.className = 'Group';
        return Group;
    }());
    Components.Group = Group;
    /**
     *
     * @type {number}
     */
    Group.prototype.index = 0;
})(Components || (Components = {}));
//# sourceMappingURL=Group.js.map