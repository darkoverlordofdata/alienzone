/**
 *--------------------------------------------------------------------+
 * Entities.ts
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
/**
 * @class
 * @name Entities
 */
class Entities {
    
    /**
     *
     * @constructor
     * @param {cc.Layer} parent
     * @param {ash.core.Engine} engine
     */
    constructor(public parent: cc.Layer, public engine: ash.core.Engine) { }

    /**
     * Destroy an Entity
     *
     * @param {ash.core.Entity} entity
     */
    public destroyEntity(entity) {
        this.engine.removeEntity(entity);
    }

    /**
     * Create Player
     *
     * @return {Components.Player}
     */
    public createPlayer(): Player {
        var player = new Player();
        var entity: Entity = new Entity('player')
            .add(player);
        this.engine.addEntity(entity);
        return player;

    }

    /**
     * Create Game State
     *
     * @return {ash.core.Entity}
     */
    public createGame(): Entity {
        var hud;
        var gameEntity = (new Entity("game")).add(new Components.GameState()).add(new Hud(hud));
        this.engine.addEntity(gameEntity);
        return gameEntity;
    }

    /**
     * Create Text
     *
     * @param {number} x
     * @param {number} y
     * @param {string} text
     * @param {number=} size
     * @param {cc.Color=} color
     * @return {ash.core.Entity}
     */
    public createText(x: number, y: number, text: string, size: number = 12, color: cc.Color = cc.color.BLACK): Entity {

        var label = new cc.LabelTTF(text, opendyslexic, size);
        label.setFontFillColor(color);
        label.setPosition(0, 0);

        var entity: Entity = new Entity('text')
            .add(new Display(label))
            .add(new Transform(x, y));
        this.engine.addEntity(entity);
        return entity;
    }

    /**
     * Create Score
     *
     * @param {number} x
     * @param {number} y
     * @param {string} text
     * @return {ash.core.Entity}
     */
    public createScore(x: number, y: number, text: string): Entity {

        var label = new cc.LabelTTF(text, opendyslexic, 24);
        label.setFontFillColor(cc.color(0xf5, 0xf5, 0xdc, 0xff));

        var score: Entity = new Entity('score')
            .add(new GameState(0, 3, 0))
            .add(new Display(label))
            .add(new Label(text))
            .add(new Transform(x, y));
        this.engine.addEntity(score);
        return score;
    }

    /**
     * Create Image
     *
     * @param {number} x
     * @param {number} y
     * @param {string} path
     * @param {number=} opacity
     * @return {ash.core.Entity}
     */
    public createImage(x: number, y: number, path: string, opacity: number = 255): Entity {

        //var sprite = new cc.Sprite(path);
        var sprite = new cc.Sprite(`#${path}`);
        
        sprite.setOpacityModifyRGB(true);
        sprite.setOpacity(opacity);

        var entity: Entity = new Entity('image')
            .add(new Display(sprite))
            .add(new Transform(x, y));
        this.engine.addEntity(entity);
        return entity;
    }

    /**
     * Create Button
     *
     * @param {number} x
     * @param {number} y
     * @param {string} path
     * @param {function} onClick
     * @param {Object} context
     * @return {ash.core.Entity}
     */
    public createButton(x: number, y: number, path: string, onClick: Function, context: any) {

        var backNormal = new cc.Sprite(`#${path}`);
        var backSelected = new cc.Sprite(`#${path}`);
        var backDisabled = new cc.Sprite(`#${path}`);
        
        var back = new cc.MenuItemSprite(backNormal, backSelected, backDisabled, onClick, context);
        var backMenu = new cc.Menu(back);

        var entity: Entity = new Entity('button')
            .add(new Display(backMenu))
            .add(new Transform(x, y, 0));
        this.engine.addEntity(entity);
        return entity;
    }

    /**
     * Create Legend
     *
     * @param {number} x
     * @param {number} y
     * @param {string} frame
     * @param {number} level
     * @param {number} alpha
     * @return {ash.core.Entity}
     */
    public createLegend(x: number, y: number, frame: string, level: number, alpha: number): Entity {

        var sprite = new cc.Sprite(`#${GEMTYPES[level]}2.png`);
        sprite.setOpacity(alpha);

        var legend: Entity = new Entity('legend')
            .add(new Display(sprite))
            .add(new Transform(x, y))
            .add(new Level(level))
            .add(new Opacity(alpha));
        this.engine.addEntity(legend);
        return legend;
    }

    /**
     * Create Input
     *
     * @param {number} x
     * @param {number} y
     * @param {string} action
     * @param {Component.Player} player
     * @return {ash.core.Entity}
     */
    public createInput(x: number, y: number, action: string, player: Player): Entity {

        var inputNormal = new cc.Sprite(`#${action}.png`);
        var inputSelected = new cc.Sprite(`#${action}.png`);
        var inputDisabled = new cc.Sprite(`#${action}.png`);
        
        var inputItem = new cc.MenuItemSprite(inputNormal, inputSelected, inputDisabled,
            () => { player.command = action; });

        var sprite = new cc.Menu(inputItem);

        var input = new Entity('input')
            .add(new Display(sprite))
            .add(new Transform(x, y));
        this.engine.addEntity(input);
        return input;
    }

    /**
     * Create Gem
     *
     * @param {number} id
     * @param {number} index
     * @param {number} col
     * @param {number} row
     * @param {string} key
     * @param {number} frame
     * @return {ash.core.Entity}
     */
    public createGem(id: number, index: number, col: number, row: number, key: string, frame: number): Entity {

        var sprite = new cc.Sprite(`#${GEMTYPES[frame]}.png`);
        var gem = new Entity('gem')
            .add(new Group(index))
            .add(new Display(sprite))
            .add(new Match(id, GEMTYPES[frame], GEMSIZE, index, col, row));
        this.engine.addEntity(gem);
        return gem;
    }

    /**
     * Create Timer
     *
     * @param {number} x
     * @param {number} y
     * @param {number} size
     * @param {cc.Color} color
     * @param {number} sec
     * @return {ash.core.Entity}
     */
    public createTimer(x: number, y: number, sec: number, size: number, color: cc.Color): Entity {

        var label = new cc.LabelTTF('0.0', opendyslexic, size);
        label.setFontFillColor(color);

        var entity: Entity = new Entity('timer')
            .add(new Time(sec))
            .add(new Display(label))
            .add(new Transform(x, y));
        this.engine.addEntity(entity);
        return entity;

    }
}
/**
 *
 * @type {cc.Layer}
 */
Entities.prototype.parent = null;
/**
 *
 * @type {ash.core.Engine}
 */
Entities.prototype.engine = null;

