var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameData = (function () {
    function GameData() {
    }
    GameData.initData = function () {
        GameData.mapData = [];
        for (var i = 0; i < GameData.MaxRow; i++) {
            var arr = [];
            for (var j = 0; j < GameData.MaxColumn; j++) {
                GameData.mapData[j].push(-2);
            }
        }
        GameData.levelReq = new LevelRequire();
        GameData.elements = [];
        GameData.unuseElements = [];
        var len = GameData.MaxColumn * GameData.MaxRow;
        for (var i = 0; i < len; i++) {
            var ele = new GameElement();
            ele.id = i;
            GameData.elements.push(ele);
            GameData.unuseElements.push(i);
        }
    };
    GameData.unmapnum = 0;
    GameData.stepNum = 0;
    GameData.levelStepNum = 0;
    GameData.levelBackgroundImageName = "";
    GameData.MaxColumn = 8;
    GameData.MaxRow = 8;
    GameData.currentElementNum = 0;
    return GameData;
}());
__reflect(GameData.prototype, "GameData");
//# sourceMappingURL=GameData.js.map