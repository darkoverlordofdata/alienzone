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
    var Label = (function () {
        /**
         * Text Label component
         *
         * @constructor
         * @param {string} value
         */
        function Label(value) {
            this.value = value;
        }
        return Label;
    }());
    Label.className = 'Label';
    Components.Label = Label;
    /**
     *
     * @type {string}
     */
    Label.prototype.value = '';
})(Components || (Components = {}));
//# sourceMappingURL=Label.js.map