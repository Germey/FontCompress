var Fontmin = require('fontmin')

var fontmin = new Fontmin()
  // 字体文件路径
  .src('source/*.ttf')
  .use(Fontmin.glyph({
    text: '赵钱孙李周吴郑王',
  }))
  // 转 woff
  .use(Fontmin.ttf2woff({
    deflate: true           // deflate woff. default = false
  }))
  .dest('build/')

fontmin.run(function (err, files) {
  if (err) throw err
})