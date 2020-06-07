var Fontmin = require('fontmin')
var fs = require('fs');
const string = fs.readFileSync('text.txt', 'utf8').toString()

var fontmin = new Fontmin()
  // 字体文件路径
  .src('source/*.ttf')
  // 指定文字
  .use(Fontmin.glyph({
    text: string,
    hinting: false
  }))
  // 压缩
  .use(Fontmin.ttf2woff({
    deflate: false           // deflate woff. default = false
  }))
  // 输出
  .dest('build/')

fontmin.run(function (err, files) {
  if (err) throw err
})