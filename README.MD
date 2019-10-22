# 将NodeJS的buffer转为汉字

## 功能
使用gbk或utf8解码NodeJS的buffer数据,目前仅支持这两种,其他解码方式暂不支持.

## API
```javascript
const buf2cn = require('buf2cn');
buf2cn.toGBK(buf); //根据GBK进行解码,返回解码后的字符串
buf2cn.toUTF8(buf); //使用UTF8进行解码,返回解码后的字符串
buf2cn.toChinese(buf); //自动根据GBK或UTF8进行解码,返回解码后的字符串
buf2cn.checkUTF8GBK(buf); //判断buffer是UTF8还是GBK编码,返回字符串'utf8'或者'gbk',如果编码既不是GBK也不是UTF8,此方法无法支持,也会返回utf8或者gbk中的一个
```

## 使用方法
```javascript
const buf2cn = require('buf2cn');
let buf = fs.readFileSync('gbkFile.txt','binary');
console.log(buf2cn.toGBK(buf));  //按GBK解码
console.log(buf2cn.toUTF8(buf)); //按UTF8解码
console.log(buf2cn.toChinese(buf)); //自动按GBK或者UTF8解码
```

## 原理
内部利用iconv-lite实现文字转码.
通过utf8和gbk对同一buffer的转码结果进行对比,如果正常解码,则得到的数据长度应该是最短的,通过这一逻辑判断进行编码自动判断.

## 限制
如果明确知道数据的编码格式,请使用明确的编码进行解析,或直接使用iconv-lite.
不建议对大段文字进行自动编码,会有较多的浪费.