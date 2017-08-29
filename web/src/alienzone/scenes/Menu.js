var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
        var _this = _super.call(this) || this;
        _this.scene = scene;
        return new (cc.Layer.extend(_this));
    }
    /**
     * Start the menu
     * @return {cc.Scene} the menu scene
     */
    Menu.start = function () {
        var properties = {
            leaderboard: "off",
            player: "",
            userId: "",
            playMusic: "50",
            playSfx: "50" // soundfx volume
        };
        Properties.init('alienzone', properties);
        cc.spriteFrameCache.addSpriteFrames("res/images.plist");
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
        var sprite;
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
}(CCLayer));
//# sourceMappingURL=Menu.js.map