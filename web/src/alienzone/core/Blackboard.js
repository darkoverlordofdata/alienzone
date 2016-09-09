/**
 *--------------------------------------------------------------------+
 * Blackboard.ts
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
 * Blackboard
 */
var Blackboard = (function () {
    function Blackboard() {
    }
    /**
     *
     * @param {number} value
     */
    Blackboard.setLevel = function (value) {
        Blackboard.level = value;
        Blackboard.upgrade.dispatch(value);
    };
    /**
     * Initialize a new game
     *
     * @param {number} type
     * @param {number} score
     */
    Blackboard.init = function (type, score) {
        Blackboard.type = type;
        Blackboard.score = score;
        if (score === 0) {
            Blackboard.difficulty = 0;
        }
        else {
            Blackboard.difficulty += 1;
        }
        Blackboard.puzzle = new jMatch3.Grid({ width: 6, height: 7, gravity: 'down' });
        Blackboard.discoveredGems = [];
    };
    /**
     * Add points to the score
     *
     * @param {number} points
     */
    Blackboard.updateScore = function (points) {
        Blackboard.score += points;
        Blackboard.scored.dispatch(points);
    };
    /**
     * Get the option preference setting
     *
     * @param {string} id
     * @return {boolean}
     */
    Blackboard.getPreference = function (id) {
        switch (id) {
            case 'music': return Blackboard.music;
            case 'sfx': return Blackboard.sfx;
        }
        return false;
    };
    /**
     * Save the option preference setting
     *
     * @param {string} id
     * @param {boolean} value
     */
    Blackboard.setPreference = function (id, value) {
        switch (id) {
            case 'music':
                Blackboard.music = value;
                Properties.set(id, value);
                break;
            case 'sfx':
                Blackboard.sfx = value;
                Properties.set(id, value);
                break;
        }
    };
    Blackboard.create = new Signal0();
    Blackboard.drop = new Signal1();
    Blackboard.reset = new Signal0();
    Blackboard.scored = new Signal1();
    Blackboard.timer = new Signal0();
    Blackboard.upgrade = new Signal1();
    Blackboard.level = 0;
    Blackboard.music = false;
    Blackboard.score = 0;
    Blackboard.sfx = true;
    Blackboard.discoveredGems = [];
    Blackboard.difficulty = 0;
    return Blackboard;
}());
//# sourceMappingURL=Blackboard.js.map