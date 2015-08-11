/**
 * Resources / Globals
 *
 */
var Entity = ash.core.Entity;
var Signal0 = ash.signals.Signal0;
var Signal1 = ash.signals.Signal1;
var Signal2 = ash.signals.Signal2;
var Signal3 = ash.signals.Signal3;
var Animation = Components.Animation;
var Display = Components.Display;
var GameState = Components.GameState;
var Group = Components.Group;
var Hud = Components.Hud;
var Label = Components.Label;
var Level = Components.Level;
var Match = Components.Match;
var Opacity = Components.Opacity;
var Player = Components.Player;
var Puzzle = Components.Puzzle;
var Transform = Components.Transform;
var Time = Components.Time;
/**
 *
 * @const {number}
 */
var Tau = Math.PI * 2;
/**
 * Game Type
 *
 * @enum {number}
 */
var GameType = {
    NoGame: 0,
    Unlimited: 1,
    Timed: 2
};
/**
 * SystemPriorities
 *
 * @enum {number}
 */
var SystemPriorities = {
    immediate: 0,
    preUpdate: 1,
    update: 2,
    move: 3,
    player: 4,
    stateMachines: 5,
    animate: 6,
    render: 7,
    render0: 8,
    render1: 9
};
/**
 * res - Resources
 *
 * @enum {string}
 */
var res = {
    // Fonts
    // =====
    opendyslexic: "res/fonts/OpenDyslexic-Regular.ttf",
    // Main Menu resources
    // ===================
    title_png: "res/MainMenu/title.png",
    infinity_png: "res/MainMenu/infinity.png",
    ftl_png: "res/MainMenu/ftl.png",
    gamesAchievements_png: "res/MainMenu/games_achievements.png",
    gamesController_png: "res/MainMenu/games_controller.png",
    gamesLeaderboards_png: "res/MainMenu/games_leaderboards.png",
    instructions_png: "res/MainMenu/instructions.png",
    sfx_option_png: "res/MainMenu/sfx_option.png",
    music_option_png: "res/MainMenu/music_option.png",
    // Help resources
    // ==============
    instructions_back_png: "res/Instructions/back.png",
    instructions_logo_png: "res/Instructions/d16a.png",
    instructions_scores_png: "res/Instructions/scores.png",
    // Game resources
    // ==============
    game_back_png: "res/Game/back.png",
    game_slots_png: "res/Game/slots.png",
    game_gems_png: "res/Game/gems.png",
    game_legend_png: "res/Game/legend.png",
    game_down_png: "res/Game/down.png",
    game_left_png: "res/Game/left.png",
    game_right_png: "res/Game/right.png",
    game_lrot_png: "res/Game/lrot.png",
    game_rrot_png: "res/Game/rrot.png",
    // Achievements resources
    // ==============
    achievements_back_png: "res/Achievements/back.png",
    achievements_logo_png: "res/Achievements/d16a.png",
    achievements_scores_png: "res/Achievements/scores.png",
    // Leaderboards resources
    // ==============
    leaderboards_back_png: "res/Leaderboards/back.png",
    leaderboards_logo_png: "res/Instructions/d16a.png",
    leaderboards_scores_png: "res/Instructions/scores.png",
    // Controller resources
    // ==============
    controller_back_png: "res/Controller/back.png",
    controller_logo_png: "res/Controller/d16a.png",
    controller_scores_png: "res/Controller/scores.png",
    controller_google_png: "res/Controller/en_generic_rgb_wo_45.png",
    // Sound Effects
    powerup0: 'res/sfx/Powerup.ogg',
    powerup1: 'res/sfx/Powerup2.ogg',
    powerup2: 'res/sfx/Powerup3.ogg',
    powerup3: 'res/sfx/Powerup4.ogg',
    powerup4: 'res/sfx/Powerup5.ogg',
    powerup5: 'res/sfx/Powerup6.ogg',
    powerup6: 'res/sfx/Powerup7.ogg',
    powerup7: 'res/sfx/Powerup8.ogg',
    powerup8: 'res/sfx/Powerup9.ogg',
    powerup9: 'res/sfx/Powerup10.ogg',
    powerup10: 'res/sfx/Powerup11.ogg',
    powerup11: 'res/sfx/Powerup12.ogg',
    powerup12: 'res/sfx/Powerup13.ogg',
    powerup13: 'res/sfx/Powerup14.ogg',
    powerup14: 'res/sfx/Powerup15.ogg',
    powerup15: 'res/sfx/Powerup16.ogg',
    powerup16: 'res/sfx/Powerup17.ogg',
    powerup17: 'res/sfx/Powerup18.ogg',
    powerup18: 'res/sfx/Powerup19.ogg',
    powerup19: 'res/sfx/Powerup20.ogg'
};
var opendyslexic = cc.sys.isNative ? res.opendyslexic : "opendyslexic";
var helpText = "Match 3 or more gems to score.\nUse arrow keys to rotate and\nmove your gems, down key to drop.\nGems do not have to be in a\na straight line to match.\n\nTimed (FTL) game will auto drop\nyour gems when time runs out.\n\nLogin to save scores and awards\nwith Google Play Games.";
var creditsText = "SFX by Damaged Panda\nGems by Broos\nGame by Dark Overlord of Data\nArt http://www.nasa.gov\n\nTo Login, for\nleaderboard and achievements,\nplease install Alien Zone\nfrom Google play";
var googleUrl = 'https://play.google.com/store/apps/details?id=com.darkoverlordofdata.alienzone';
//# sourceMappingURL=Res.js.map