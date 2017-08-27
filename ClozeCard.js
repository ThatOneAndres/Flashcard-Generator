var ClozeCard = function(text, cloze){
	if (!(this instanceof ClozeCard)) { 
    
    // the constructor was called without "new".
    return new ClozeCard(text,name);
  } 
	this.fullText = text;
	this.cloze = cloze;
	function createPartial(){
		var reg = new RegExp(cloze,"i");
		if (text === text.replace(reg,"...")){
			console.log("Error: " + this.cloze + " does not appear in " + this.fullText);
		}else{
			return text.replace(reg, "...");
		}
	};
	this.partial = createPartial();
};


module.exports = ClozeCard;