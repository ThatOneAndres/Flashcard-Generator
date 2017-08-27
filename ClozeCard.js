var ClozeCard = function(text, cloze){
	this.text = text;
	this.cloze = cloze;
	var reg = new RegExp(cloze,"i");
	this.partial = text.replace(reg, "...");
};


module.exports = ClozeCard;