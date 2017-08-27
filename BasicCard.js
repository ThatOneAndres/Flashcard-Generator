var BasicCard = function(front, back){
	if (!(this instanceof BasicCard)) { 
    
    // the constructor was called without "new".
    return new BasicCard(front,back);
  } 
	this.front = front;
	this.back = back;
}



module.exports = BasicCard;