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
class PuzzleSystem extends ash.core.System {

    public gemNodes:ash.core.NodeList;     //  gem nodes
    public gems:Object;                    //  Gems in active play
    public board:number;                   //  level up board number

    /**
     *
     * @constructor
     * @extends {ash.core.System}
     * @param {Game} parent
     * @param {Entities} factory
     */
    constructor(public parent: Game, public factory:Entities) {
        super();
        this.board = 0;
        this.gems = {};
    }

    /**
     * Added to Engine
     *
     * @param {ash.core.Engine} engine
     */
    public addToEngine(engine:ash.core.Engine) {
        this.gemNodes = engine.getNodeList(Nodes.GemNode);
        Reg.drop.add(this.dropped);

    }

    /**
     * Ended - remove from Engine
     * @param {ash.core.Engine} engine
     */
    public removeFromEngine(engine:ash.core.Engine) {
        Reg.drop.removeAll();
        this.gemNodes = null;
        this.gems = null;
    }

    /**
     * Receive the gems that were dropped
     *
     * @param {Array<ash.core.Entity>} gems
     */
    private dropped = (gems:Entity[]) => {
        var dropped:number = 0;
        var height = this.parent.height;
        for (var row=1; row>=0; row--) {
            gems.forEach((gem:Entity) => {
                var display:Display = gem.get(Display);
                var match:Match = gem.get(Match);
                if (match.row === row) {
                    var xform:Transform = new Transform(match.x + 24, height - match.y - 24);
                    // Get the gem column
                    var column:jMatch3.Piece[] = Reg.puzzle.getColumn(match.col, false);
                    // Get the last empty piece to place the gem
                    var lastEmpty:jMatch3.Piece = jMatch3.Grid.getLastEmptyPiece(column);
                    // If an empty piece has been found
                    if (lastEmpty != null) {
                        // Bind this gem to the piece
                        lastEmpty.object = match;

                        var x = lastEmpty.x * Reg.GEMSIZE;
                        var y = lastEmpty.y * Reg.GEMSIZE + (2 * Reg.GEMSIZE);

                        gem.add(xform);
                        new TWEEN.Tween(xform)
                            .to(cc.p(x+24, height-y-24), 1500)
                            .easing(TWEEN.Easing.Elastic.InOut)
                            .onComplete(() => {
                                if (++dropped === gems.length) {
                                    this.handleMatches();
                                }
                            }).start();

                        this.gems[match.id] = gem;
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
    private handleMatches = () => {
        var piecesToUpgrade:string[];
        /**
         * Add to score for all the matches, them
         * delete the matching tiles.
         */
        if (Reg.puzzle.getMatches().length != 0) {
            piecesToUpgrade = [];
            Reg.puzzle.forEachMatch((matchingPieces: jMatch3.Piece[], type:string) => {
                this.updateScore(matchingPieces, type);
                piecesToUpgrade.push(type);
                matchingPieces.forEach((matchingPiece) => {
                    var match: Match = matchingPiece.object;
                    var gem: Entity = this.gems[match.id];
                    this.factory.destroyEntity(gem);
                });
            });
            Reg.puzzle.clearMatches();
            this.upgrade(piecesToUpgrade);
        }

        var fallingPieces:jMatch3.Piece[] = Reg.puzzle.applyGravity();
        var hasFall:number = 0;
        var height = this.parent.height;

        /**
         * Fill in the tiles that were opened up
         * when we scored.
         */
        if (fallingPieces.length > 0) {
            fallingPieces.forEach((piece:jMatch3.Piece) => {
                var match:Match = piece.object;
                var gem:Entity = this.gems[match.id];
                var xform:Transform = gem.get(Transform);

                xform.x = (piece.x * Reg.GEMSIZE) + 24;
                xform.y = height - (piece.y * Reg.GEMSIZE + 2 * Reg.GEMSIZE) - 24;
                if (++hasFall === fallingPieces.length) {
                    this.handleMatches();
                }
            });
        } else {
            Reg.create.dispatch();
        }
    };

    /**
     *
     * @param {Array<string>} piecesToUpgrade
     */
    private upgrade = (piecesToUpgrade:string[]) => {
        var levelUp:boolean = false;
        piecesToUpgrade.forEach((type) => {
            var upgradeIndex:number = Reg.GEMTYPES.indexOf(type) + 1;

            if (upgradeIndex >= Reg.GEMTYPES.length) {
                /**
                 * Level Up...
                 */
                var scene = new cc.Scene();
                scene.addChild(new Game(this.parent.scene, Reg.type, Reg.score));
                cc.director.runScene(new cc.TransitionFade(1.2, scene));
            }


            if (Reg.level < upgradeIndex) {
                Reg.setLevel (upgradeIndex);
                levelUp = true;
            }
            var upgradedType:string = Reg.GEMTYPES[upgradeIndex];
            if (upgradedType != null) {
                if (Reg.discoveredGems.indexOf(upgradedType) == -1)
                    Reg.discoveredGems.push(upgradedType);
            }
        });
        if (levelUp)
            this.board += 1;
    };

    /**
     * Update the Score
     *
     * @param {Array<jMatch3.Piece>} matches
     * @param {string} type
     */
    private updateScore = (matches:jMatch3.Piece[], type:string) => {
        var points:number = (Reg.GEMTYPES.indexOf(type) + 1) * matches.length * (this.board+1);
        Reg.updateScore(points);
    };
}

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
