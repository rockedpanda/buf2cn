var iconv = require('iconv-lite');

/**
 * 根据GBK进行解码,返回解码后的字符串
 * @param {Buffer} buf 待解码的buffer
 * @return {String}
 */
function toGBK(buf){
    return iconv.decode(buf,'GBK');
}

/**
 * 使用UTF8进行解码,返回解码后的字符串
 * @param {Buffer} buf 待解码的buffer
 * @return {String}
 */
function toUTF8(buf){
    return iconv.decode(buf,'UTF-8');
}

/**
 * 自动根据GBK或UTF8进行解码,返回解码后的字符串
 * @param {Buffer} buf 待解码的buffer
 * @return {String}
 */
function toChinese(buf){
    let g = toGBK(buf);
    let u = toUTF8(buf);
    return g.length > u.length?u:g;
}

/**
 * 判断buffer是UTF8还是GBK编码,返回字符串'utf8'或者'gbk',如果编码既不是GBK也不是UTF8,此方法无法支持,也会返回utf8或者gbk中的一个
 * @param {Buffer} buf 待解码的buffer
 * @return {String}  'utf8' || 'gbk'
 */
function checkUTF8GBK(buf){
    let g = toGBK(buf);
    let u = toUTF8(buf);
    return g.length > u.length?'utf8':'gbk';
}

exports.toGBK = toGBK;
exports.toUTF8 = toUTF8;
exports.toChinese = toChinese;
exports.checkUTF8GBK = checkUTF8GBK;
