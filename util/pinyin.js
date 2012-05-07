var pinyin = require('pinyin');
exports = module.exports = function(hans) {
	var s = pinyin(hans);
	var result = s[0];
	if(result == undefined){
		return [];
	}else{
		for(var i = 0; i < result.length; i++){
			result[i] = result[i].charAt(0);
		}
		return result;
	}
};