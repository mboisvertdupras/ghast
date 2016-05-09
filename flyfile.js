var x = module.exports
var imports = {
  sass: ['src/base/**/*.sass', 'src/components/**/*.sass', 'src/utilities/**/*.sass']
}

x.default = function * () {
  yield this.clear('dist/')
  yield this
    .source('src/ghast.sass')
    .sass({
      includePaths: ['utilities'],
      indentedSyntax: true,
      outputStyle: "compressed",
      sourceMap: true
    })
    .target('ghast/src/dist')
}
