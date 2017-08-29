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
 * Cocos2d-js dev wrappers
 * Use for intellisene and typechecking
 */
var CCNode = (function (_super) {
    __extends(CCNode, _super);
    function CCNode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CCNode.prototype._super = function () { };
    return CCNode;
}(cc.Node));
var CCLayer = (function (_super) {
    __extends(CCLayer, _super);
    function CCLayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CCLayer.prototype._super = function () { };
    return CCLayer;
}(cc.Layer));
var CCLayerColor = (function (_super) {
    __extends(CCLayerColor, _super);
    function CCLayerColor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CCLayerColor.prototype._super = function (color, width, height) { };
    return CCLayerColor;
}(cc.LayerColor));
var CCScene = (function (_super) {
    __extends(CCScene, _super);
    function CCScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CCScene.prototype._super = function () { };
    return CCScene;
}(cc.Scene));
var CCSprite = (function (_super) {
    __extends(CCSprite, _super);
    function CCSprite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CCSprite.prototype._super = function (fileName, rect, rotated) { };
    return CCSprite;
}(cc.Sprite));
//# sourceMappingURL=cclib-dev.js.map