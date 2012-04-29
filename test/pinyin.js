var pinyin = require('pinyin');
console.log(pinyin('孙悟空'));
 //[ [ 'Sun', 'Wu', 'Kong' ], [ 'Xun', 'Wu', 'Kong' ] ]
console.log(pinyin('孙悟空',true,''));
//SunWuKong
console.log(pinyin('孙悟空', false, ','));
//Sun,Wu,Kong,Xun,Wu,Kong

console.log(pinyin('孙子'));