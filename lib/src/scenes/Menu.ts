/**
 *--------------------------------------------------------------------+
 * Menu.ts
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
class Menu extends CCLayer {

    /**
     * Start the menu
     * @return {cc.Scene} the menu scene
     */
    public static start(): cc.Scene {
        Reg.start();
        return Menu.show(false);
    }

    /** 
     * Show the menu with fade
     * 
     * @param  {boolean} fade
     * @return {cc.Scene} the menu scene
     */
    public static show(fade:boolean=true): cc.Scene {
        var scene = new cc.Scene();
        scene.addChild(new Menu(scene));
        return fade ? cc.director.runScene(new cc.TransitionFade(1.2, scene)) : scene;
    }


    /**
     *
     * @constructor
     * @extends {cc.Layer}
     * @param {cc.Scene} scene
     */
    constructor(public scene) {
        super();
        return new (cc.Layer.extend(this));
    }
    /**
     * Cocos2d Constructor
     */
    public ctor () {
        this._super();

        var {width, height} = this;
        var x = ~~width / 2;
        var title = new cc.Sprite('#title.png');
        title.setPosition(cc.p(x, height - 50));

        /**
         * Select Game
         *
         * Infinity - no time limit
         * FTL - timed
         */
        var infinityNormal = new cc.Sprite('#infinity.png');
        var infinitySelected = new cc.Sprite('#infinity.png');
        var infinityDisabled = new cc.Sprite('#infinity.png');

        var ftlNormal = new cc.Sprite('#ftl.png');
        var ftlSelected = new cc.Sprite('#ftl.png');
        var ftlDisabled = new cc.Sprite('#ftl.png');

        var infinity = new cc.MenuItemSprite(infinityNormal, infinitySelected, infinityDisabled, this.onInfinity, this);
        var ftl = new cc.MenuItemSprite(ftlNormal, ftlSelected, ftlDisabled, this.onFtl, this);
        var gameMenu = new cc.Menu(infinity, ftl);
        gameMenu.alignItemsVerticallyWithPadding(15);
        gameMenu.setPosition(cc.p(x, height - 150));

        /**
         * Options Menu
         *
         * Achievements
         * Login
         * Leaderboards
         * Instructions
         */
        var achievementsNormal = new cc.Sprite('#games_achievements.png');
        var achievementsSelected = new cc.Sprite('#games_achievements_green.png');
        var achievementsDisabled = new cc.Sprite('#games_achievements_white.png');

        var controllerNormal = new cc.Sprite('#games_controller.png');
        var controllerSelected = new cc.Sprite('#games_controller_grey.png');
        var controllerDisabled = new cc.Sprite('#games_controller_white.png');

        var leaderboardsNormal = new cc.Sprite('#games_leaderboards.png');
        var leaderboardsSelected = new cc.Sprite('#games_leaderboards_green.png');
        var leaderboardsDisabled = new cc.Sprite('#games_leaderboards_white.png');

        var instructionsNormal = new cc.Sprite('#instructions.png');
        var instructionsSelected = new cc.Sprite('#instructions.png');
        var instructionsDisabled = new cc.Sprite('#instructions.png');

        var achievements = new cc.MenuItemSprite(achievementsNormal, achievementsSelected, achievementsDisabled, this.onAchievements, this);
        var controller = new cc.MenuItemSprite(controllerNormal, controllerSelected, controllerDisabled, this.onController, this);
        var leaderboards = new cc.MenuItemSprite(leaderboardsNormal, leaderboardsSelected, leaderboardsDisabled, this.onLeaderboards, this);
        var instructions = new cc.MenuItemSprite(instructionsNormal, instructionsSelected, instructionsDisabled, this.onInstructions, this);
        var optionsMenu = new cc.Menu(achievements, controller, leaderboards, instructions);
        optionsMenu.alignItemsInColumns(3, 1);
        optionsMenu.setPosition(cc.p(x, height - 300));

        /**
         * Settings Menu
         *
         * Sound Effects Volume
         * Music Volume
         */
        var sprite:cc.Sprite;
        
        var sfxNormal = new cc.Sprite('#b_Sound1.png');
        var sfxSelected = new cc.Sprite('#b_Sound1_Inactive.png');
        var sfxDisabled = new cc.Sprite('#b_Sound1.png');

        var musicNormal = new cc.Sprite('#b_Music.png');
        var musicSelected = new cc.Sprite('#b_No.png');
        var musicDisabled = new cc.Sprite('#b_Music.png');

        var sfx = new cc.MenuItemSprite(sfxNormal, sfxSelected, sfxDisabled, this.onSfx, this);
        var music = new cc.MenuItemSprite(musicNormal, musicSelected, musicDisabled, this.onMusic, this);
        var settingsMenu = new cc.Menu(sfx, music);
        settingsMenu.alignItemsHorizontallyWithPadding(180);
        settingsMenu.setPosition(cc.p(x, height - 380));

        this.addChild(title);
        this.addChild(gameMenu);
        this.addChild(optionsMenu);
        this.addChild(settingsMenu);
        return true;
    }

    /**
     * Show the achievements screen
     *
     * @param {!Object} sender
     */
    onAchievements(sender) {
        var scene = new cc.Scene();
        scene.addChild(new Achievements(scene));
        cc.director.runScene(new cc.TransitionFade(1.2, scene));
    }

    /**
     * Login
     *
     * @param {!Object} sender
     */
    onController(sender) {
        var scene = new cc.Scene();
        scene.addChild(new Controller(scene));
        cc.director.runScene(new cc.TransitionFade(1.2, scene));
    }

    /**
     * Show the leaderboards
     *
     * @param {!Object} sender
     */
    onLeaderboards(sender) {
        var scene = new cc.Scene();
        scene.addChild(new Leaderboards(scene));
        cc.director.runScene(new cc.TransitionFade(1.2, scene));
    }

    /**
     * Game: Infinity
     *
     * @param {!Object} sender
     */
    onInfinity(sender) {
        var scene = new cc.Scene();
        scene.addChild(new Game(scene, GameType.Unlimited));
        cc.director.runScene(new cc.TransitionFade(1.2, scene));
    }

    /**
     * Game: FTL
     *
     * @param {!Object} sender
     */
    onFtl(sender) {
        var scene = new cc.Scene();
        scene.addChild(new Game(scene, GameType.Timed));
        cc.director.runScene(new cc.TransitionFade(1.2, scene));
    }

    /**
     * Show Instructions
     *
     * @param {!Object} sender
     */
    onInstructions(sender) {
        var scene = new cc.Scene();
        scene.addChild(new Instructions(scene));
        cc.director.runScene(new cc.TransitionFade(1.2, scene));
    }
        
    /**
     * Toggle SoundFX
     *
     * @param {!Object} sender
     */
    onSfx(sender) {
    }
    
    /**
     * Toggle Music
     *
     * @param {!Object} sender
     */
    onMusic(sender) {
    }
}
