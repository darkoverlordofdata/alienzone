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
var Reg = (function () {
    function Reg() {
    }
    /**
     *
     * @param {number} value
     */
    Reg.setLevel = function (value) {
        Reg.level = value;
        Reg.upgrade.dispatch(value);
    };
    /**
     * Start the application
     */
    Reg.start = function () {
        var properties = {
            leaderboard: "off",
            player: "",
            userId: "",
            playMusic: "50",
            playSfx: "50" // soundfx volume
        };
        Properties.init(Reg.id, properties);
        /**
         * Load texture cache
         *
         */
        // var texture;
        // var frame;
        // var sprite:cc.Sprite;
        // var c;
        // var c1;
        cc.spriteFrameCache.addSpriteFrames("res/images.plist");
        // sprite = new cc.Sprite('#legend.png');
        // texture = sprite.getTexture();
        // for (c=0, c1=0; c<8; c++, c1+=24) {
        //     frame = new cc.SpriteFrame(texture, cc.rect(c1, 0, 24, 24));
        //     cc.spriteFrameCache.addSpriteFrame(frame, 'legend'+c);
        // }
        // sprite = new cc.Sprite('#gems.png');
        // texture = sprite.getTexture();
        // for (c=0, c1=0; c<8; c++, c1+=48) {
        //     frame = new cc.SpriteFrame(texture, cc.rect(c1, 0, 48, 48));
        //     cc.spriteFrameCache.addSpriteFrame(frame, 'gem'+c);
        // }
    };
    /**
     * Initialize a new game
     *
     * @param {number} type
     * @param {number} score
     */
    Reg.init = function (type, score) {
        Reg.type = type;
        Reg.score = score;
        if (score === 0) {
            Reg.difficulty = 0;
        }
        else {
            Reg.difficulty += 1;
        }
        Reg.puzzle = new jMatch3.Grid({ width: 6, height: 7, gravity: 'down' });
        Reg.discoveredGems = [];
    };
    /**
     * Add points to the score
     *
     * @param {number} points
     */
    Reg.updateScore = function (points) {
        Reg.score += points;
        Reg.scored.dispatch(points);
    };
    /**
     * Get the option preference setting
     *
     * @param {string} id
     * @return {boolean}
     */
    Reg.getPreference = function (id) {
        switch (id) {
            case 'music': return Reg.music;
            case 'sfx': return Reg.sfx;
        }
        return false;
    };
    /**
     * Save the option preference setting
     *
     * @param {string} id
     * @param {boolean} value
     */
    Reg.setPreference = function (id, value) {
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
    };
    /**
     *
     * @param {string} path
     * @return {string}
     */
    Reg.res = function (path) {
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
    };
    Reg.VOLUME_ON = 1.0; // sound dampening factor
    Reg.VOLUME_OFF = 0.0; // sound dampening factor
    Reg.SFX_COUNT = 20; // sound effects
    Reg.GEMSIZE = 48; // Gem size constant in pixels
    Reg.GEMTYPES = [
        "blue",
        "cyan",
        "green",
        "magenta",
        "orange",
        "pink",
        "red",
        "yellow"
    ];
    Reg.id = "alienzone";
    Reg.create = new Signal0();
    Reg.drop = new Signal1();
    Reg.reset = new Signal0();
    Reg.scored = new Signal1();
    Reg.timer = new Signal0();
    Reg.upgrade = new Signal1();
    Reg.level = 0;
    Reg.music = false;
    Reg.rnd = new MersenneTwister();
    Reg.score = 0;
    Reg.sfx = true;
    Reg.discoveredGems = [];
    Reg.difficulty = 0;
    return Reg;
})();
//# sourceMappingURL=Reg.js.map