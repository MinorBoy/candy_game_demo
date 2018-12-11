class GameData {
	public static unmapnum:number = 0;
	public static mapData:number[][];
	public static stepNum:number = 0;
	public static levelStepNum:number = 0;
	public static elementTypes:number[];
	public static levelReq:LevelRequire;
	public static elements:GameElement[];
	public static unuseElements:number[];
	public static levelBackgroundImageName:string = "";

	public static MaxColumn:number = 8;
	public static MaxRow:number = 8;
	public static currentElementNum:number = 0;
	
	public static initData(){
		GameData.mapData = [];
		for(var i= 0;i<GameData.MaxRow;i++){
			var arr:number[] = [];
			for(var j=0;j<GameData.MaxColumn;j++){
				GameData.mapData[j].push(-2);
			}
		}

		GameData.levelReq = new LevelRequire();
		GameData.elements = [];
		GameData.unuseElements = [];
		
		var len:number = GameData.MaxColumn * GameData.MaxRow;
		for(var i=0;i<len;i++){
			var ele:GameElement = new GameElement();
			ele.id = i;
			GameData.elements.push(ele);
			GameData.unuseElements.push(i);
		}

	}



}