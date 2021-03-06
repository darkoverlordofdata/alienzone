/**
 * Global resource values
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

const rnd: IRandum = new MersenneTwister();

const VOLUME_ON             = 1.0;  // sound dampening factor
const VOLUME_OFF            = 0.0;  // sound dampening factor
const SFX_COUNT: number     = 20;   // sound effects
const GEMSIZE: number       = 48;   // Gem size constant in pixels
const GEMTYPES: string[]    = [     // All gem types:
    "blue",
    "cyan",
    "green",
    "magenta",
    "orange",
    "pink",
    "red",
    "yellow"
];

/**
 * res - Resources
 *
 * @enum {string}
 */
var res = {     //  Resources to preload
    opendyslexic:       "res/fonts/OpenDyslexic-Regular.ttf",
    images_png:         "res/images.png",
    images_plist:       "res/images.plist",
    powerup0:           'res/sfx/Powerup.ogg',
    powerup1:           'res/sfx/Powerup2.ogg',
    powerup2:           'res/sfx/Powerup3.ogg',
    powerup3:           'res/sfx/Powerup4.ogg',
    powerup4:           'res/sfx/Powerup5.ogg',
    powerup5:           'res/sfx/Powerup6.ogg',
    powerup6:           'res/sfx/Powerup7.ogg',
    powerup7:           'res/sfx/Powerup8.ogg',
    powerup8:           'res/sfx/Powerup9.ogg',
    powerup9:           'res/sfx/Powerup10.ogg',
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