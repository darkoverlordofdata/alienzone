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
class Blackboard {

    public static create: Signal0     = new Signal0();
    public static drop: Signal1       = new Signal1();
    public static reset: Signal0      = new Signal0();
    public static scored: Signal1     = new Signal1();
    public static timer: Signal0      = new Signal0();
    public static upgrade: Signal1    = new Signal1();
    public static level: number       = 0;
    public static music: boolean      = false;
    public static score: number       = 0;
    public static sfx: boolean        = true;
    public static discoveredGems      = [];
    public static difficulty: number  = 0;
    public static type: number;
    public static puzzle: jMatch3.Grid;


    /**
     *
     * @param {number} value
     */
    public static setLevel(value: number) {
        Blackboard.level = value;
        Blackboard.upgrade.dispatch(value);
    }

    /**
     * Initialize a new game
     *
     * @param {number} type
     * @param {number} score
     */
    public static init(type: number, score: number) {
        Blackboard.type = type;
        Blackboard.score = score;
        if (score === 0) {
            Blackboard.difficulty = 0;
        } else {
            Blackboard.difficulty += 1;
        }
        Blackboard.puzzle = new jMatch3.Grid({width: 6, height: 7, gravity: 'down'});
        Blackboard.discoveredGems = [];

    }

    /**
     * Add points to the score
     *
     * @param {number} points
     */
    public static updateScore(points: number) {
        Blackboard.score += points;
        Blackboard.scored.dispatch(points);
    }

    /**
     * Get the option preference setting
     *
     * @param {string} id
     * @return {boolean}
     */
    public static getPreference(id: string):boolean {
        switch(id) {
            case 'music':	return Blackboard.music;
            case 'sfx':		return Blackboard.sfx;
        }
        return false;
    }

    /**
     * Save the option preference setting
     *
     * @param {string} id
     * @param {boolean} value
     */
    public static setPreference(id: string, value: boolean): void {
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

    }


}