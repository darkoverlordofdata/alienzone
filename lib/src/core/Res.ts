/**
 * Resources / Globals
 *
 */
import Entity       = ash.core.Entity;
import Signal0      = ash.signals.Signal0;
import Signal1      = ash.signals.Signal1;
import Signal2      = ash.signals.Signal2;
import Signal3      = ash.signals.Signal3;
import Animation    = Components.Animation;
import Display      = Components.Display;
import GameState    = Components.GameState;
import Group        = Components.Group;
import Hud          = Components.Hud;
import Label        = Components.Label;
import Level        = Components.Level;
import Match        = Components.Match;
import Opacity      = Components.Opacity;
import Player       = Components.Player;
import Puzzle       = Components.Puzzle;
import Transform    = Components.Transform;
import Time         = Components.Time;
/**
 *
 * @const {number}
 */
const Tau = Math.PI * 2;

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
var res = {     //  Resources to preload
    // Fonts
    // =====
    opendyslexic:           "res/fonts/OpenDyslexic-Regular.ttf",
    // Main Menu resources
    // ===================
    title_png:              "res/MainMenu/title.png",
    infinity_png:           "res/MainMenu/infinity.png",
    ftl_png:                "res/MainMenu/ftl.png",
    gamesAchievements_png:  "res/MainMenu/games_achievements.png",
    gamesController_png:    "res/MainMenu/games_controller.png",
    gamesLeaderboards_png:  "res/MainMenu/games_leaderboards.png",
    instructions_png:       "res/MainMenu/instructions.png",
    sfx_option_png:         "res/MainMenu/sfx_option.png",
    music_option_png:       "res/MainMenu/music_option.png",
    // Help resources
    // ==============
    instructions_back_png:  "res/Instructions/back.png",
    instructions_logo_png:  "res/Instructions/d16a.png",
    instructions_scores_png: "res/Instructions/scores.png",
    // Game resources
    // ==============
    game_back_png:          "res/Game/back.png",
    game_slots_png:         "res/Game/slots.png",
    game_gems_png:          "res/Game/gems.png",
    game_legend_png:        "res/Game/legend.png",
    game_down_png:          "res/Game/down.png",
    game_left_png:          "res/Game/left.png",
    game_right_png:          "res/Game/right.png",
    game_lrot_png:          "res/Game/lrot.png",
    game_rrot_png:          "res/Game/rrot.png",
    // Achievements resources
    // ==============
    achievements_back_png:  "res/Achievements/back.png",
    achievements_logo_png:  "res/Achievements/d16a.png",
    achievements_scores_png: "res/Achievements/scores.png",
    // Leaderboards resources
    // ==============
    leaderboards_back_png:      "res/Leaderboards/back.png",
    leaderboards_logo_png:      "res/Instructions/d16a.png",
    leaderboards_scores_png:    "res/Instructions/scores.png",
    // Controller resources
    // ==============
    controller_back_png:    "res/Controller/back.png",
    controller_logo_png:    "res/Controller/d16a.png",
    controller_scores_png:  "res/Controller/scores.png",
    controller_google_png:  "res/Controller/en_generic_rgb_wo_45.png",

    // Sound Effects
    powerup0:            'res/sfx/Powerup.ogg',
    powerup1:           'res/sfx/Powerup2.ogg',
    powerup2:           'res/sfx/Powerup3.ogg',
    powerup3:           'res/sfx/Powerup4.ogg',
    powerup4:           'res/sfx/Powerup5.ogg',
    powerup5:           'res/sfx/Powerup6.ogg',
    powerup6:           'res/sfx/Powerup7.ogg',
    powerup7:           'res/sfx/Powerup8.ogg',
    powerup8:           'res/sfx/Powerup9.ogg',
    powerup9:          'res/sfx/Powerup10.ogg',
    powerup10:          'res/sfx/Powerup11.ogg',
    powerup11:          'res/sfx/Powerup12.ogg',
    powerup12:          'res/sfx/Powerup13.ogg',
    powerup13:          'res/sfx/Powerup14.ogg',
    powerup14:          'res/sfx/Powerup15.ogg',
    powerup15:          'res/sfx/Powerup16.ogg',
    powerup16:          'res/sfx/Powerup17.ogg',
    powerup17:          'res/sfx/Powerup18.ogg',
    powerup18:          'res/sfx/Powerup19.ogg',
    powerup19:          'res/sfx/Powerup20.ogg'

};


var opendyslexic:string = cc.sys.isNative ? res.opendyslexic : "opendyslexic";


var helpText:string = `Match 3 or more gems to score.
Use arrow keys to rotate and\nmove your gems, down key to drop.
Gems do not have to be in a\na straight line to match.

Timed (FTL) game will auto drop
your gems when time runs out.

Login to save scores and awards
with Google Play Games.`;

var creditsText:string = `SFX by Damaged Panda
Gems by Broos
Game by Dark Overlord of Data
Art http://www.nasa.gov

To Login, for
leaderboard and achievements,
please install Alien Zone
from Google play`;

var googleUrl:string = 'https://play.google.com/store/apps/details?id=com.darkoverlordofdata.alienzone';