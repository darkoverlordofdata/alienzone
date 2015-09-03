/**
 *--------------------------------------------------------------------+
 * Reg.ts
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
 * Global Registry
 */
class Reg {

    public static VOLUME_ON             = 1.0;  // sound dampening factor
    public static VOLUME_OFF            = 0.0;  // sound dampening factor
    public static SFX_COUNT: number     = 20;   // sound effects
    public static GEMSIZE: number       = 48;   // Gem size constant in pixels
    public static GEMTYPES: string[]    = [     // All gem types:
        "blue",
        "cyan",
        "green",
        "magenta",
        "orange",
        "pink",
        "red",
        "yellow"
    ];

    public static id: string          = "alienzone";
    public static create: Signal0     = new Signal0();
    public static drop: Signal1       = new Signal1();
    public static reset: Signal0      = new Signal0();
    public static scored: Signal1     = new Signal1();
    public static timer: Signal0      = new Signal0();
    public static upgrade: Signal1    = new Signal1();
    public static level: number       = 0;
    public static music: boolean      = false;
    public static rnd: IRandum        = new MersenneTwister();
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
        Reg.level = value;
        Reg.upgrade.dispatch(value);
    }

    /**
     * Start the application
     */
    public static start() {
        var properties = {
            leaderboard: "off", // use server leaderboard
            player: "",         // player screen name
            userId: "",         // unique user id
            playMusic: "50",    // music volume
            playSfx: "50"       // soundfx volume
        };

        Properties.init(Reg.id, properties);
        
        cc.spriteFrameCache.addSpriteFrames("res/images.plist");

    }

    /**
     * Initialize a new game
     *
     * @param {number} type
     * @param {number} score
     */
    public static init(type: number, score: number) {
        Reg.type = type;
        Reg.score = score;
        if (score === 0) {
            Reg.difficulty = 0;
        } else {
            Reg.difficulty += 1;
        }
        Reg.puzzle =  new jMatch3.Grid({width: 6, height: 7, gravity: 'down'});
        Reg.discoveredGems = [];

    }

    /**
     * Add points to the score
     *
     * @param {number} points
     */
    public static updateScore(points: number) {
        Reg.score += points;
        Reg.scored.dispatch(points);
    }

    /**
     * Get the option preference setting
     *
     * @param {string} id
     * @return {boolean}
     */
    public static getPreference(id: string):boolean {
        switch(id) {
            case 'music':	return Reg.music;
            case 'sfx':		return Reg.sfx;
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
                Reg.music = value;
                Properties.set(id, value);
                break;
            case 'sfx':
                Reg.sfx = value;
                Properties.set(id, value);
                break;
        }

    }

    /**
     *
     * @param {string} path
     * @return {string}
     */
    public static res(path:string):string {
        switch (path) {

            case 'powerup0': return res.powerup0;
            case 'powerup1': return res.powerup1;
            case 'powerup2': return res.powerup2;
            case 'powerup3': return res.powerup3;
            case 'powerup4': return res.powerup4;
            case 'powerup5': return res.powerup5;
            case 'powerup6': return res.powerup6;
            case 'powerup7': return res.powerup7;
            case 'powerup8': return res.powerup8;
            case 'powerup9': return res.powerup9;
            case 'powerup10': return res.powerup10;
            case 'powerup11': return res.powerup11;
            case 'powerup12': return res.powerup12;
            case 'powerup13': return res.powerup13;
            case 'powerup14': return res.powerup14;
            case 'powerup15': return res.powerup15;
            case 'powerup16': return res.powerup16;
            case 'powerup17': return res.powerup17;
            case 'powerup18': return res.powerup18;
            case 'powerup19': return res.powerup19;
            case 'opendyslexic': return res.opendyslexic;
            case 'images_png': return res.images_png;
            case 'images_plist': return res.images_plist;
            default: return '';
        }
    }

}