var pinyin = require('pinyin');
exports = module.exports = function(hans) {
	var s = pinyin(hans);
	return s[0]==undefined?[]:s[0];
};