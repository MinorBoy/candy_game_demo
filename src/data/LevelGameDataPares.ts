class LevelGameDataPares {
	public static paresLevelGameData(val:any)
	{
		GameData.stepNum = val.step;
		GameData.levelStepNum = val.step;
		GameData.elementTypes = val.element;
		GameData.levelBackgroundImageName = val.levelbgimg;
		LevelGameDataPares.paresLevelReq(val.levelreq);
	}

	public static paresLevelReq(val:any)
	{
		GameData.levelReq.openChange();
		var len:number = val.length;
		for(var i=0;i<len;i++)
		{
			GameData.levelReq.addElement(val[i].type,val[i].num);
		}
	}
}
