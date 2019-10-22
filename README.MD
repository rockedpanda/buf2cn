# 将NodeJS的buffer转为汉字

## 功能
使用gbk或utf8解码NodeJS的buffer数据,目前仅支持这两种,其他解码方式暂不支持.

## 使用方法
```javascript
const buf2cn = requrie('buf2cn');
let buf = fs.readFileSync('gbkFile.txt','binary');
console.log(buf2cn.toGBK(buf));  //按GBK解码
console.log(buf2cn.toUTF8(buf)); //按UTF8解码
console.log(buf2cn.toChinese(buf)); //自动按GBK或者UTF8解码
```

