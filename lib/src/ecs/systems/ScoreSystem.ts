/**
 *--------------------------------------------------------------------+
 * ScoreSystem.ts
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
class ScoreSystem extends ash.tools.ListIteratingSystem {

    public colors = [
        new cc.Color(255, 255, 0, 255),
        new cc.Color(255, 0, 255, 255),
        new cc.Color(0, 255, 255, 255)
    ];
    public cols = [30, 105, 150];
    public rows = [230, 330, 230];

    /**
     *
     * @constructor
     * @extends {ash.core.System}
     * @param {cc.Layer} parent
     * @param {Entities} factory
     */
    constructor(public parent:cc.Layer, public factory:Entities) {
        super(Nodes.ScoreNode);
        this.nodeUpdateFunction = this.nodeUpdate;
        Blackboard.scored.add(this.scored);
    }

    /**
     * Remove Scoring system
     *
     * @param {ash.core.Engine} engine
     */
    public removeFromEngine(engine:ash.core.Engine) {
        super.removeFromEngine(engine);
        Blackboard.scored.removeAll();
    }

    /**
     * Update Score Values
     *
     * @param {Nodes.ScoreNode} node
     * @param {number} time
     */
    public nodeUpdate(node: Nodes.ScoreNode, time: number) {
        node.score.points = Blackboard.score;
        node.display.graphic.string = `${node.text.value}: ${node.score.points}`;
    }

    /**
     * Scored
     *
     * Generate animations when score is made
     *
     * @param {number} points
     */
    private scored = (points: number) => {

        //cc.log('powerup = powerup'+(points % Blackboard.SFX_COUNT));
        //cc.log('resource ='+res['powerup'+(points % Blackboard.SFX_COUNT)]);
        //cc.log('resource ='+Blackboard.res('powerup'+(points % Blackboard.SFX_COUNT)));

        if (Blackboard.sfx) {
            //cc.audioEngine.playEffect(Blackboard.res('powerup'+(points % Blackboard.SFX_COUNT)));
          cc.audioEngine.playEffect(res['powerup'+(points % SFX_COUNT)]);
        }

        var label = new cc.LabelTTF(''+points, opendyslexic, 48);
        label.setFontFillColor(this.colors[rnd.nextInt(3)]);
        label.setPosition(this.cols[rnd.nextInt(3)], this.rows[rnd.nextInt(3)]);
        this.parent.addChild(label);

        var ease;
        switch(rnd.nextInt(3)) {
            case 0:
                ease  = cc.moveTo((rnd.nextDouble()*2)+2, cc.p(160, 480)).easing(cc.easeBounceInOut());
                break;
            case 1:
                ease  = cc.moveTo((rnd.nextDouble()*2)+2, cc.p(160, 480)).easing(cc.easeBounceIn());
                break;
            case 2:
                ease  = cc.moveTo((rnd.nextDouble()*2)+2, cc.p(160, 480)).easing(cc.easeBounceOut());
                break;
        }
        var done = cc.callFunc(() => {
            this.parent.removeChild(label);
        }, this);
        label.runAction(cc.sequence(ease, done));

    };
}
/**
 *
 * @type {Array<cc.Color>}
 */
ScoreSystem.prototype.colors = null;
/**
 *
 * @type {Array<number>}
 */
ScoreSystem.prototype.cols = null;
/**
 *
 * @type {Array<number>}
 */
ScoreSystem.prototype.rows = null;

