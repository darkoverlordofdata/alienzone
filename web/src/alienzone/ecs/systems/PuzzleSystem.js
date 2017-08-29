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
 * PuzzleSystem.ts
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
 * Puzzle system:
 *
 * Puzzle area is a 7 x 6 grid. Gems are dropped here
 * from the Input Panel. They fall into the grid, filling
 * it until a match of 3 or more is found, at which time
 * the grid is reduced by the match. Gravity is applied
 * recursively until no more matches are found.
 *
 *  +===+===+===+===+===+===+
 *  |   |   |   |   |   |   | 0
 *  +---+---+---+---+---+---+
 *  |   |   |   |   |   |   | 1
 *  +---+---+---+---+---+---+
 *  |   |   |   |   |   |   | 2
 *  +---+---+---+---+---+---+
 *  |   |   |   |   |   |   | 3
 *  +---+---+---+---+---+---+
 *  |   |   |   |   |   |   | 4
 *  +---+---+---+---+---+---+
 *  |   |   |   |   |   |   | 5
 *  +---+---+---+---+---+---+
 *  |   |   |   |   |   |   | 6
 *  +---+---+---+---+---+---+
 *
 *
 */
var PuzzleSystem = (function (_super) {
    __extends(PuzzleSystem, _super);
    /**
     *
     * @constructor
     * @extends {ash.core.System}
     * @param {Game} parent
     * @param {Entities} factory
     */
    function PuzzleSystem(parent, factory) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        _this.factory = factory;
        /**
         * Receive the gems that were dropped
         *
         * @param {Array<ash.core.Entity>} gems
         */
        _this.dropped = function (gems) {
            var dropped = 0;
            var height = _this.parent.height;
            for (var row = 1; row >= 0; row--) {
                gems.forEach(function (gem) {
                    var display = gem.get(Display);
                    var match = gem.get(Match);
                    if (match.row === row) {
                        var xform = new Transform(match.x + 24, height - match.y - 24);
                        // Get the gem column
                        var column = Blackboard.puzzle.getColumn(match.col, false);
                        // Get the last empty piece to place the gem
                        var lastEmpty = jMatch3.Grid.getLastEmptyPiece(column);
                        // If an empty piece has been found
                        if (lastEmpty != null) {
                            // Bind this gem to the piece
                            lastEmpty.object = match;
                            var x = lastEmpty.x * GEMSIZE;
                            var y = lastEmpty.y * GEMSIZE + (2 * GEMSIZE);
                            gem.add(xform);
                            new TWEEN.Tween(xform)
                                .to(cc.p(x + 24, height - y - 24), 1500)
                                .easing(TWEEN.Easing.Elastic.InOut)
                                .onComplete(function () {
                                if (++dropped === gems.length) {
                                    _this.handleMatches();
                                }
                            }).start();
                            _this.gems[match.id] = gem;
                        }
                    }
                });
            }
        };
        /**
         * Handle Matches
         * recursively process matching pieces
         *
         */
        _this.handleMatches = function () {
            var piecesToUpgrade;
            /**
             * Add to score for all the matches, them
             * delete the matching tiles.
             */
            if (Blackboard.puzzle.getMatches().length != 0) {
                piecesToUpgrade = [];
                Blackboard.puzzle.forEachMatch(function (matchingPieces, type) {
                    _this.updateScore(matchingPieces, type);
                    piecesToUpgrade.push(type);
                    matchingPieces.forEach(function (matchingPiece) {
                        var match = matchingPiece.object;
                        var gem = _this.gems[match.id];
                        _this.factory.destroyEntity(gem);
                    });
                });
                Blackboard.puzzle.clearMatches();
                _this.upgrade(piecesToUpgrade);
            }
            var fallingPieces = Blackboard.puzzle.applyGravity();
            var hasFall = 0;
            var height = _this.parent.height;
            /**
             * Fill in the tiles that were opened up
             * when we scored.
             */
            if (fallingPieces.length > 0) {
                fallingPieces.forEach(function (piece) {
                    var match = piece.object;
                    var gem = _this.gems[match.id];
                    var xform = gem.get(Transform);
                    xform.x = (piece.x * GEMSIZE) + 24;
                    xform.y = height - (piece.y * GEMSIZE + 2 * GEMSIZE) - 24;
                    if (++hasFall === fallingPieces.length) {
                        _this.handleMatches();
                    }
                });
            }
            else {
                Blackboard.create.dispatch();
            }
        };
        /**
         *
         * @param {Array<string>} piecesToUpgrade
         */
        _this.upgrade = function (piecesToUpgrade) {
            var levelUp = false;
            piecesToUpgrade.forEach(function (type) {
                var upgradeIndex = GEMTYPES.indexOf(type) + 1;
                if (upgradeIndex >= GEMTYPES.length) {
                    /**
                     * Level Up...
                     */
                    var scene = new cc.Scene();
                    scene.addChild(new Game(_this.parent.scene, Blackboard.type, Blackboard.score));
                    cc.director.runScene(new cc.TransitionFade(1.2, scene));
                }
                if (Blackboard.level < upgradeIndex) {
                    Blackboard.setLevel(upgradeIndex);
                    levelUp = true;
                }
                var upgradedType = GEMTYPES[upgradeIndex];
                if (upgradedType != null) {
                    if (Blackboard.discoveredGems.indexOf(upgradedType) == -1)
                        Blackboard.discoveredGems.push(upgradedType);
                }
            });
            if (levelUp)
                _this.board += 1;
        };
        /**
         * Update the Score
         *
         * @param {Array<jMatch3.Piece>} matches
         * @param {string} type
         */
        _this.updateScore = function (matches, type) {
            var points = (GEMTYPES.indexOf(type) + 1) * matches.length * (_this.board + 1);
            Blackboard.updateScore(points);
        };
        _this.board = 0;
        _this.gems = {};
        return _this;
    }
    /**
     * Added to Engine
     *
     * @param {ash.core.Engine} engine
     */
    PuzzleSystem.prototype.addToEngine = function (engine) {
        this.gemNodes = engine.getNodeList(Nodes.GemNode);
        Blackboard.drop.add(this.dropped);
    };
    /**
     * Ended - remove from Engine
     * @param {ash.core.Engine} engine
     */
    PuzzleSystem.prototype.removeFromEngine = function (engine) {
        Blackboard.drop.removeAll();
        this.gemNodes = null;
        this.gems = null;
    };
    return PuzzleSystem;
}(ash.core.System));
/**
 *
 * @type {Object}
 */
PuzzleSystem.prototype.gemNodes = null;
/**
 *
 * @type {Object}
 */
PuzzleSystem.prototype.gems = null;
/**
 *
 * @type {number}
 */
PuzzleSystem.prototype.board = 0;
//# sourceMappingURL=PuzzleSystem.js.map