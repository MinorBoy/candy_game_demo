class LevelRequire {
	public reqElements:LevelRequireElement[];

	public constructor(){
		this.reqElements = [];
	}

	public getLevelReqNum():number{
		return this.reqElements.length;
	}

	public addElement(type:string, num:number)
	{
		var element = new LevelRequireElement();
		element.type = type;
		element.num = num;
		this.reqElements.push(element);
	}

	public openChange(){
		this.reqElements = [];
	}

	public changeReqNum(type:string,num:number){
		var length = this.getLevelReqNum();
		for(var i = 0; i<length; i++){
			if(this.reqElements[i].type = type){
				this.reqElements[i].num -= num;
				return;
			}
		}
	}

	public isClear():boolean{
		var length = this.getLevelReqNum()
		for(var i=0; i<length; i++){
			if(this.reqElements[i].num>0){
				return false;
			}
		}
		return true;
	}


}