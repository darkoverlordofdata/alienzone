/**
 *--------------------------------------------------------------------+
 * InputPanelSystem.ts
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
 * Input panel system:
 *
 * Handle user input to move a group of 1-4 gems on a 2 x 6
 * grid panel. A gem group occupies 2 - 4 adjacent cells.
 * Position and drop the group onto the puzzle grid panel.
 *
 *
 *    0   1   2   3   4   5
 *  +---+---+---+---+---+---+
 *  |   |   |   |   |   |   | 0
 *  +---+---+---+---+---+---+
 *  |   |   |   |   |   |   | 1
 *  +---+---+---+---+---+---+
 *
 *
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * Direction
 *
 * @enum {number}
 */
var Direction = {
    Left: 0,
    Right: 1
};
var InputPanelSystem = (function (_super) {
    __extends(InputPanelSystem, _super);
    /**
    *
    * @constructor
    * @extends {ash.tools.ListIteratingSystem}
    * @param {cc.Layer} parent
    * @param {Entities} factory
    */
    function InputPanelSystem(parent, factory) {
        var _this = this;
        _super.call(this);
        this.parent = parent;
        this.factory = factory;
        this.gems = []; //  gem entities
        this.cursors = [
            [[[1, 0], [0, 0]], [[0, 1], [0, 0]], [[0, 0], [0, 1]], [[0, 0], [1, 0]]],
            [[[1, 0], [2, 0]], [[2, 1], [0, 0]], [[0, 2], [0, 1]], [[0, 0], [1, 2]]],
            [[[1, 0], [2, 3]], [[2, 1], [3, 0]], [[3, 2], [0, 1]], [[0, 3], [1, 2]]],
            [[[1, 4], [2, 3]], [[2, 1], [3, 4]], [[3, 2], [4, 1]], [[4, 3], [1, 2]]]
        ];
        /**
         * create a gem group
         * of 2, 3, or 4 gems
         *
         */
        this.createGems = function () {
            var i = 1;
            switch (Reg.difficulty) {
                case 0:
                    var pips = [1, 2, 1, 2, 1, 2, 1, 2];
                    i = pips[Reg.level];
                    if (_this.weight > 1) {
                        i -= 1;
                    }
                    _this.weight -= 1;
                    break;
                case 1:
                    var pips = [1, 1, 1, 1, 1, 2, 2, 3];
                    i = pips[Reg.level];
                    _this.weight = (i > 1) ? _this.weight + 1 : 0;
                    if (_this.weight > 2)
                        i -= (Reg.rnd.nextBool()) ? 0 : 1;
                    break;
                case 2:
                    var pips = [1, 1, 1, 2, 2, 2, 2, 3];
                    i = pips[Reg.level];
                    if (_this.weight > 1) {
                        i -= 1;
                        _this.weight -= 1;
                    }
                    break;
                default:
                    var pips = [1, 1, 1, 1, 2, 2, 3, 0];
                    i = pips[Reg.level];
                    _this.weight = (i > 1) ? _this.weight + 1 : 0;
                    if (_this.weight > 2)
                        i -= (Reg.rnd.nextBool()) ? 0 : 1;
                    break;
            }
            if (i < 0)
                i = 0;
            if (i > 3)
                i = 3;
            if (_this.flip) {
                if (i === 1) {
                    i = 2;
                }
                else if (i === 2) {
                    i = 1;
                }
            }
            _this.flip = !_this.flip;
            var cursor = _this.cursors[i][0];
            _this.rot = 0;
            _this.pos = 0;
            _this.gems = [];
            for (var row = 0; row < 2; row++) {
                for (var col = 0; col < 2; col++) {
                    if (cursor[row][col] != 0) {
                        var frame = Reg.rnd.nextInt(Reg.discoveredGems.length);
                        _this.gems.push(_this.factory.createGem(++_this.uniqueId, _this.gems.length, col, row, 'gem', frame));
                    }
                }
            }
            _this.dropping = false;
            _this.rot = 0;
            _this.updateGems(true);
            var times = 0;
            if (_this.flourish) {
                var dir = (Reg.rnd.nextBool()) ? Direction.Left : Direction.Right;
                cc.director.getScheduler().scheduleCallbackForTarget(_this, function () {
                    _this.rotate(dir);
                    times++;
                    if (times === 3) {
                        Reg.reset.dispatch();
                    }
                }, 0.1, 3, 0, false);
            }
            else {
                Reg.reset.dispatch();
            }
            _this.flourish = false;
        };
        /**
         *  Move left or right
         *
         * @param {Direction} dir
         */
        this.move = function (dir) {
            var left = 5;
            var right = 0;
            _this.gems.forEach(function (gem) {
                var match = gem.get(Match);
                if (match.col < left)
                    left = match.col;
                if (match.col > right)
                    right = match.col;
            });
            if (dir === Direction.Left) {
                if (left <= 0)
                    return;
            }
            else {
                if (right >= 5)
                    return;
            }
            _this.pos += (dir === Direction.Left) ? -1 : 1;
            _this.updateGems(false);
        };
        /**
         *  Rotate left or right
         *
         * @param {Direction} dir
         */
        this.rotate = function (dir) {
            if (_this.pos >= 5)
                return;
            _this.rot += (dir === Direction.Left) ? -1 : 1;
            if (_this.rot < 0)
                _this.rot = 3;
            if (_this.rot > 3)
                _this.rot = 0;
            _this.updateGems(false);
        };
        /**
         * update the gem group display
         * @param {boolean} init
         */
        this.updateGems = function (init) {
            var cursor = _this.cursors[_this.gems.length - 1][_this.rot];
            for (var row = 0; row < 2; row++) {
                for (var col = 0; col < 2; col++) {
                    if (cursor[row][col] != 0) {
                        var x = ~~(Math.max(0, Math.min(5, _this.pos + col)));
                        var gem = _this.gems[cursor[row][col] - 1];
                        var match = gem.get(Match);
                        match.col = x;
                        match.row = row;
                        if (init) {
                            match.x = x * Reg.GEMSIZE;
                            match.y = row * Reg.GEMSIZE;
                        }
                        else {
                            new TWEEN.Tween(match)
                                .to(cc.p(x * Reg.GEMSIZE, row * Reg.GEMSIZE), 300)
                                .start();
                        }
                    }
                }
            }
        };
        /**
         * Drop
         *
         * drop the gem group onto the puzzle
         * remove the group and add puzzle component
         * this moves the gems to the PuzzleSystem
         *
         */
        this.drop = function () {
            if (_this.dropping)
                return;
            _this.dropping = true; // disable dropping until this group completes
            var cols = [0, 0, 0, 0, 0, 0];
            var count = 0;
            // check how much room is needed to drop the gems
            _this.gems.forEach(function (gem) {
                var match = gem.get(Match);
                cols[match.col] += 1;
                count += 1;
            });
            // will they fit?
            for (var col = 0; col < 6; col++) {
                if (cols[col] > 0) {
                    var k = 0;
                    var column = Reg.puzzle.getColumn(col, false);
                    column.forEach(function (piece) {
                        k += (piece.object.type === 'empty') ? 1 : 0;
                    });
                    if (k < cols[col]) {
                        _this.dropping = false;
                        if (_this.hasMove(count))
                            return;
                        // No Room - Game Over
                        _this.gameOver();
                        return;
                    }
                }
            }
            // Move the gems from Group to Puzzle
            _this.gems.forEach(function (gem) {
                var match = gem.get(Match);
                gem.remove(Group);
                gem.add(new Puzzle(match.col, match.row));
            });
            Reg.drop.dispatch(_this.gems);
        };
        /**
         *
         * @param {number} count
         * @return {boolean}
         */
        this.hasMove = function (count) {
            // TODO: check if player lost - i.e., has no valid moves
            return false;
        };
        /**
         * Game Over
         */
        this.gameOver = function () {
            var scene = new cc.Scene();
            scene.addChild(new Leaderboards(Reg.type, Reg.score));
            cc.director.pushScene(new cc.TransitionFade(1.2, scene));
        };
        this.parent = parent;
        this.factory = factory;
    }
    /**
     *
     * @param {ash.core.Engine} engine
     */
    InputPanelSystem.prototype.addToEngine = function (engine) {
        var _this = this;
        /**
         * allocate resources
         */
        this.player = engine.getNodeList(Nodes.CommandNode);
        this.groupNodes = engine.getNodeList(Nodes.GroupNode);
        /**
         * initialize blackboard values
         */
        Reg.create.add(this.createGems);
        Reg.discoveredGems = [];
        for (var i = 0; i < Reg.GEMTYPES.length; i++) {
            if (i < 3) {
                Reg.discoveredGems.push(Reg.GEMTYPES[i]);
            }
        }
        Reg.level = Reg.discoveredGems.length - 1;
        Reg.create.dispatch();
        Reg.scored.add(function (points) {
            _this.flourish = true;
        });
        if (Reg.type === GameType.Timed) {
            Reg.timer.add(this.drop);
        }
    };
    /**
     *
     * @param {ash.core.Engine} engine
     */
    InputPanelSystem.prototype.removeFromEngine = function (engine) {
        /**
         * dispose the resources
         */
        Reg.create.removeAll();
        this.player = null;
        this.groupNodes = null;
    };
    /**
     *
     * @param {number} time
     */
    InputPanelSystem.prototype.update = function (time) {
        /**
         * Respond to the player's input
         */
        var node;
        var command;
        node = this.player.head;
        while (node) {
            command = node.command.command;
            node.command.command = '';
            switch (command) {
                case 'left':
                    this.move(Direction.Left);
                    break;
                case 'down':
                    this.drop();
                    break;
                case 'right':
                    this.move(Direction.Right);
                    break;
                case 'lrot':
                    this.rotate(Direction.Left);
                    break;
                case 'rrot':
                    this.rotate(Direction.Right);
                    break;
            }
            node = node.next;
        }
    };
    return InputPanelSystem;
})(ash.core.System);
/**
 *
 * @type {ash.core.NodeList}
 */
InputPanelSystem.prototype.player = null;
/**
 *
 * @type {ash.core.NodeList}
 */
InputPanelSystem.prototype.groupNodes = null;
/**
 * unique id for each gem
 * @type {number}
 */
InputPanelSystem.prototype.uniqueId = 0;
/**
 * gem entities
 * @type {Array<ash.core.Entity>}
 */
InputPanelSystem.prototype.gems = null;
/**
 * rotate frame (0-3)
 * @type {number}
 */
InputPanelSystem.prototype.rot = 0;
/**
 * horizontal cursor (0-4)
 * @type {number}
 */
InputPanelSystem.prototype.pos = 0;
/**
 * crystals being dropped?
 * @type {boolean}
 */
InputPanelSystem.prototype.dropping = false;
/**
 *
 * @type {number}
 */
InputPanelSystem.prototype.weight = 0;
/**
 *
 * @type {boolean}
 */
InputPanelSystem.prototype.flourish = false;
/**
 *
 * @type {boolean}
 */
InputPanelSystem.prototype.flip = false;
/**
 * crystal rotation maps:
 * @type {Array<Array<number>>}
 */
InputPanelSystem.prototype.cursors = null; //
//# sourceMappingURL=InputPanelSystem.js.map