var iconv = require('iconv-lite');
function toGBK(buf){
    return iconv.decode(buf,'GBK');
}
function toUTF8(buf){
    return iconv.decode(buf,'UTF-8');
}
function toChinese(buf){
    let g = toGBK(buf);
    let u = toUTF8(buf);
    return g.length > u.length?u:g;
}

exports.toGBK = toGBK;
exports.toGBK = toGBK;
exports.toChines = toChinese;
