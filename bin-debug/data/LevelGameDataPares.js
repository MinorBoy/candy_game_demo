var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var LevelGameDataPares = (function () {
    function LevelGameDataPares() {
    }
    LevelGameDataPares.paresLevelGameData = function (val) {
        GameData.stepNum = val.step;
        GameData.levelStepNum = val.step;
        GameData.elementTypes = val.element;
        GameData.levelBackgroundImageName = val.levelbgimg;
        LevelGameDataPares.paresLevelReq(val.levelreq);
    };
    LevelGameDataPares.paresLevelReq = function (val) {
        GameData.levelReq.openChange();
        var len = val.length;
        for (var i = 0; i < len; i++) {
            GameData.levelReq.addElement(val[i].type, val[i].num);
        }
    };
    return LevelGameDataPares;
}());
__reflect(LevelGameDataPares.prototype, "LevelGameDataPares");
//# sourceMappingURL=LevelGameDataPares.js.map