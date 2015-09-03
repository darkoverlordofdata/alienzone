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
 *<pre>
 *    0   1   2   3   4   5
 *  +---+---+---+---+---+---+
 *  |   |   |   |   |   |   | 0
 *  +---+---+---+---+---+---+
 *  |   |   |   |   |   |   | 1
 *  +---+---+---+---+---+---+
 *</pre>
 *
 */

/**
 * Direction
 *
 * @enum {number}
 */
var Direction = {
    Left: 0,
    Right: 1
};

class InputPanelSystem extends ash.core.System {

    public player: ash.core.NodeList;      //  command input
    public groupNodes: ash.core.NodeList;  //  gem nodes
    public uniqueId:number;                //  unique id for each gem
    public gems:Entity[] = [];             //  gem entities
    public rot:number;                     //  rotate frame (0-3)
    public pos:number;                     //  horizontal cursor (0-4)
    public dropping:boolean;               //  crystals being dropped?
    public weight:number;
    public flourish:boolean;
    public flip:boolean;
    public cursors = [                     //  crystal rotation maps:
        [[[1,0],[0,0]], [[0,1],[0,0]], [[0,0],[0,1]], [[0,0],[1,0]]],
        [[[1,0],[2,0]], [[2,1],[0,0]], [[0,2],[0,1]], [[0,0],[1,2]]],
        [[[1,0],[2,3]], [[2,1],[3,0]], [[3,2],[0,1]], [[0,3],[1,2]]],
        [[[1,4],[2,3]], [[2,1],[3,4]], [[3,2],[4,1]], [[4,3],[1,2]]]
    ];

     /**
     *
     * @constructor
     * @extends {ash.tools.ListIteratingSystem}
     * @param {cc.Layer} parent
     * @param {Entities} factory
     */
    constructor(public parent:cc.Layer, public factory:Entities) {
        super();
        this.parent = parent;
        this.factory = factory;
    }

    /**
     *
     * @param {ash.core.Engine} engine
     */
    public addToEngine(engine:ash.core.Engine) {
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
        for (var i=0; i<Reg.GEMTYPES.length; i++) {
            if (i < 3) {
                Reg.discoveredGems.push(Reg.GEMTYPES[i]);
            }
        }
        Reg.level = Reg.discoveredGems.length-1;
        Reg.create.dispatch();
        Reg.scored.add((points:number) => {
            this.flourish = true;
        });
        if (Reg.type === GameType.Timed) {
            Reg.timer.add(this.drop);
        }
    }

    /**
     *
     * @param {ash.core.Engine} engine
     */
    public removeFromEngine(engine:ash.core.Engine) {
        /**
         * dispose the resources
         */
        Reg.create.removeAll();
        this.player = null;
        this.groupNodes = null;

    }

    /**
     *
     * @param {number} time
     */
    public update(time:number) {
        /**
         * Respond to the player's input
         */
        var node: Nodes.CommandNode;
        var command: string;

        node = this.player.head;
        while (node) {
            command = node.command.command;
            node.command.command = '';
            switch (command) {
                case 'left':    this.move(Direction.Left);break;
                case 'down':    this.drop();break;
                case 'right':   this.move(Direction.Right);break;
                case 'lrot':    this.rotate(Direction.Left);break;
                case 'rrot':    this.rotate(Direction.Right);break;
            }
            node = node.next;
        }

    }

    /**
     * create a gem group
     * of 2, 3, or 4 gems
     *
     */
    private createGems = () => {

        var i:number = 1;

        switch (Reg.difficulty) {

            case 0:
                var pips:number[] = [1,2,1,2,1,2,1,2];
                i = pips[Reg.level];
                if (this.weight>1) {
                    i -= 1;
                }
                this.weight -=1;
                break;

            case 1:
                var pips:number[] = [1,1,1,1,1,2,2,3];
                i = pips[Reg.level];
                this.weight = (i>1) ? this.weight+1 : 0;
                if (this.weight>2) i -= (Reg.rnd.nextBool()) ? 0 : 1;
                break;

            case 2:
                var pips:number[] = [1,1,1,2,2,2,2,3];
                i = pips[Reg.level];
                if (this.weight>1) {
                    i -= 1;
                    this.weight -=1;
                }
                break;

            default:
                var pips:number[] = [1,1,1,1,2,2,3,0];
                i = pips[Reg.level];
                this.weight = (i>1) ? this.weight+1 : 0;
                if (this.weight>2) i -= (Reg.rnd.nextBool()) ? 0 : 1;
                break;

        }

        if (i<0) i=0;
        if (i>3) i=3;
        if (this.flip) {
            if (i === 1) {
                i = 2;
            } else if (i === 2) {
                i = 1;
            }
        }
        this.flip = !this.flip;

        var cursor:number[][] = this.cursors[i][0];
        this.rot = 0;
        this.pos = 0;
        this.gems = [];
        for (var row=0; row<2; row++) {
            for (var col=0; col<2; col++) {
                if (cursor[row][col] != 0) {
                    var frame:number = Reg.rnd.nextInt(Reg.discoveredGems.length);
                    this.gems.push(this.factory.createGem(++this.uniqueId, this.gems.length, col, row, 'gem', frame));
                }
            }
        }
        this.dropping = false;
        this.rot = 0;
        this.updateGems(true);
        var times = 0;
        if (this.flourish) {
            var dir:number = (Reg.rnd.nextBool()) ? Direction.Left : Direction.Right;

            cc.director.getScheduler().scheduleCallbackForTarget(this, () => {
                this.rotate(dir);
                times++;
                if (times === 3) {
                    Reg.reset.dispatch();
                }
            }, 0.1, 3, 0, false);
        } else {
            Reg.reset.dispatch();
        }
        this.flourish = false;
        
    };

    /**
     *  Move left or right
     *
     * @param {Direction} dir
     */
    private move = (dir:number) => {
        var left:number = 5;
        var right:number = 0;

        this.gems.forEach((gem:Entity) => {
            var match:Match = gem.get(Match);
            if (match.col < left) left = match.col;
            if (match.col > right) right = match.col;
        });

        if (dir === Direction.Left) {
            if (left <= 0) return;
        } else {
            if (right >= 5) return;
        }
        this.pos += (dir === Direction.Left) ? -1 : 1;
        this.updateGems(false);
    };

    /**
     *  Rotate left or right
     *
     * @param {Direction} dir
     */
    private rotate = (dir:number) => {
        if (this.pos>=5) return;
        this.rot += (dir === Direction.Left) ? -1 : 1;
        if (this.rot < 0) this.rot = 3;
        if (this.rot > 3) this.rot = 0;
        this.updateGems(false);
    };

    /**
     * update the gem group display
     * @param {boolean} init
     */
    private updateGems = (init:boolean) => {
        var cursor:number[][] = this.cursors[this.gems.length-1][this.rot];
        for (var row=0; row<2; row++) {
            for (var col=0; col<2; col++) {
                if (cursor[row][col] != 0) {
                    var x:number = ~~(Math.max(0, Math.min(5, this.pos+col)));
                    var gem:Entity = this.gems[cursor[row][col]-1];
                    var match:Match = gem.get(Match);

                    match.col = x;
                    match.row = row;

                    if (init) {
                        match.x = x * Reg.GEMSIZE;
                        match.y = row * Reg.GEMSIZE;
                    } else {
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
    private drop = () => {
        if (this.dropping) return;
        this.dropping = true; // disable dropping until this group completes

        var cols:number[] = [0,0,0,0,0,0];
        var count:number = 0;
        // check how much room is needed to drop the gems
        this.gems.forEach((gem:Entity) => {
            var match:Match = gem.get(Match);
            cols[match.col] += 1;
            count += 1;
        });
        // will they fit?
        for (var col=0; col<6; col++) {
            if (cols[col] > 0) {
                var k:number = 0;
                var column:jMatch3.Piece[] = Reg.puzzle.getColumn(col, false);
                column.forEach((piece:jMatch3.Piece) => {
                    k += (piece.object.type === 'empty') ? 1 : 0;
                });
                if (k < cols[col]) {
                    this.dropping = false;
                    if (this.hasMove(count)) return;
                    // No Room - Game Over
                    this.gameOver();
                    return;
                }
            }
        }

        // Move the gems from Group to Puzzle
        this.gems.forEach((gem:Entity) => {
            var match:Match = gem.get(Match);
            gem.remove(Group);
            gem.add(new Puzzle(match.col, match.row));
        });
        Reg.drop.dispatch(this.gems);

    };

    /**
     *
     * @param {number} count
     * @return {boolean}
     */
    private hasMove = (count:number): boolean => {
        // TODO: check if player lost - i.e., has no valid moves
        return false;
    };

    /**
     * Game Over
     */
    private gameOver = () => {
        var scene = new cc.Scene();
        scene.addChild(new Leaderboards(Reg.type, Reg.score));
        cc.director.pushScene(new cc.TransitionFade(1.2, scene));
    }
}
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
InputPanelSystem.prototype.cursors = null;                     //

