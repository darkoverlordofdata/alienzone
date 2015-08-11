var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
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
var Menu = (function (_super) {
    __extends(Menu, _super);
    /**
     *
     * @constructor
     * @extends {cc.Layer}
     * @param {cc.Scene} scene
     */
    function Menu(scene) {
        _super.call(this);
        this.scene = scene;
        return new (cc.Layer.extend(this));
    }
    /**
     * Start the menu
     * @return {cc.Scene} the menu scene
     */
    Menu.start = function () {
        Reg.start();
        return Menu.show(false);
    };
    /**
     * Show the menu with fade
     *
     * @param  {boolean} fade
     * @return {cc.Scene} the menu scene
     */
    Menu.show = function (fade) {
        if (fade === void 0) { fade = true; }
        var scene = new cc.Scene();
        scene.addChild(new Menu(scene));
        return fade ? cc.director.runScene(new cc.TransitionFade(1.2, scene)) : scene;
    };
    /**
     * Cocos2d Constructor
     */
    Menu.prototype.ctor = function () {
        this._super();
        var _a = this, width = _a.width, height = _a.height;
        var x = ~~width / 2;
        var title = new cc.Sprite(res.title_png);
        title.setPosition(cc.p(x, height - 50));
        /**
         * Select Game
         *
         * Infinity - no time limit
         * FTL - timed
         */
        var infinityNormal = new cc.Sprite(res.infinity_png);
        var infinitySelected = new cc.Sprite(res.infinity_png);
        var infinityDisabled = new cc.Sprite(res.infinity_png);
        var ftlNormal = new cc.Sprite(res.ftl_png);
        var ftlSelected = new cc.Sprite(res.ftl_png);
        var ftlDisabled = new cc.Sprite(res.ftl_png);
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
        var achievementsNormal = new cc.Sprite(res.gamesAchievements_png, cc.rect(0, 0, 64, 64));
        var achievementsSelected = new cc.Sprite(res.gamesAchievements_png, cc.rect(64, 0, 64, 64));
        var achievementsDisabled = new cc.Sprite(res.gamesAchievements_png, cc.rect(128, 0, 64, 64));
        var controllerNormal = new cc.Sprite(res.gamesController_png, cc.rect(0, 0, 64, 64));
        var controllerSelected = new cc.Sprite(res.gamesController_png, cc.rect(64, 0, 64, 64));
        var controllerDisabled = new cc.Sprite(res.gamesController_png, cc.rect(128, 0, 64, 64));
        var leaderboardsNormal = new cc.Sprite(res.gamesLeaderboards_png, cc.rect(0, 0, 64, 64));
        var leaderboardsSelected = new cc.Sprite(res.gamesLeaderboards_png, cc.rect(64, 0, 64, 64));
        var leaderboardsDisabled = new cc.Sprite(res.gamesLeaderboards_png, cc.rect(128, 0, 64, 64));
        var instructionsNormal = new cc.Sprite(res.instructions_png);
        var instructionsSelected = new cc.Sprite(res.instructions_png);
        var instructionsDisabled = new cc.Sprite(res.instructions_png);
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
        var sfxNormal = new cc.Sprite(res.sfx_option_png, cc.rect(0, 0, 70, 61));
        var sfxSelected = new cc.Sprite(res.sfx_option_png, cc.rect(70, 0, 70, 61));
        var sfxDisabled = new cc.Sprite(res.sfx_option_png, cc.rect(0, 0, 70, 61));
        var musicNormal = new cc.Sprite(res.music_option_png, cc.rect(0, 0, 47, 57));
        var musicSelected = new cc.Sprite(res.music_option_png, cc.rect(47, 0, 47, 57));
        var musicDisabled = new cc.Sprite(res.music_option_png, cc.rect(0, 0, 47, 57));
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
    };
    /**
     * Show the achievements screen
     *
     * @param {!Object} sender
     */
    Menu.prototype.onAchievements = function (sender) {
        var scene = new cc.Scene();
        scene.addChild(new Achievements(scene));
        cc.director.runScene(new cc.TransitionFade(1.2, scene));
    };
    /**
     * Login
     *
     * @param {!Object} sender
     */
    Menu.prototype.onController = function (sender) {
        var scene = new cc.Scene();
        scene.addChild(new Controller(scene));
        cc.director.runScene(new cc.TransitionFade(1.2, scene));
    };
    /**
     * Show the leaderboards
     *
     * @param {!Object} sender
     */
    Menu.prototype.onLeaderboards = function (sender) {
        var scene = new cc.Scene();
        scene.addChild(new Leaderboards(scene));
        cc.director.runScene(new cc.TransitionFade(1.2, scene));
    };
    /**
     * Game: Infinity
     *
     * @param {!Object} sender
     */
    Menu.prototype.onInfinity = function (sender) {
        var scene = new cc.Scene();
        scene.addChild(new Game(scene, GameType.Unlimited));
        cc.director.runScene(new cc.TransitionFade(1.2, scene));
    };
    /**
     * Game: FTL
     *
     * @param {!Object} sender
     */
    Menu.prototype.onFtl = function (sender) {
        var scene = new cc.Scene();
        scene.addChild(new Game(scene, GameType.Timed));
        cc.director.runScene(new cc.TransitionFade(1.2, scene));
    };
    /**
     * Show Instructions
     *
     * @param {!Object} sender
     */
    Menu.prototype.onInstructions = function (sender) {
        var scene = new cc.Scene();
        scene.addChild(new Instructions(scene));
        cc.director.runScene(new cc.TransitionFade(1.2, scene));
    };
    /**
     * Toggle SoundFX
     *
     * @param {!Object} sender
     */
    Menu.prototype.onSfx = function (sender) {
    };
    /**
     * Toggle Music
     *
     * @param {!Object} sender
     */
    Menu.prototype.onMusic = function (sender) {
    };
    return Menu;
})(CCLayer);
//# sourceMappingURL=Menu.js.map