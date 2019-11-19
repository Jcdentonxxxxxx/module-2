module.exports = function () {
    $.gulp.task('sass', function () {
        return $.gulp.src('src/static/styles/styles.scss')
            .pipe($.gp.sourcemaps.init()) //Зачем?
            .pipe($.gp.sass({}))
            .pipe($.gp.autoprefixer({
                cascade: false
            }))
            .on("error", $.gp.notify.onError({
                message: "Error: <%= error.message %>",
                title: "Style"
            }))
            .pipe($.gp.beautify.css({
                indent_size: 2
            }))
            .pipe($.gp.sourcemaps.write()) //Зачем?
            .pipe($.gulp.dest('build/static/css/'))
            .pipe($.bs.reload({
                stream: true
            }));
    });
}