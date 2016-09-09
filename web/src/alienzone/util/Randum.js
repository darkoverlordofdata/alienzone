/**
 *--------------------------------------------------------------------+
 * Randum.ts
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
 * Wrap the native PRNG
 */
var Randum = (function () {
    function Randum() {
    }
    /*
     * Generates a random boolean value.
    */
    Randum.prototype.nextBool = function () {
        return ((~~(Math.random() * 32767)) & 1) === 1;
    };
    /*
     * Generates a random real value from 0.0, inclusive, to 1.0, exclusive.
    */
    Randum.prototype.nextDouble = function () {
        return Math.random();
    };
    /*
     * Generates a random int value from 0, inclusive, to max, exclusive.
    */
    Randum.prototype.nextInt = function (max) {
        return ~~(Math.random() * max);
    };
    return Randum;
}());
//# sourceMappingURL=Randum.js.map