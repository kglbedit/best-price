const gulp = require('gulp'),
  pug = require('gulp-pug'),
  fs = require('fs');

// server
// gulp.task('server', function () {
//   browserSync.init({
//     open: false,
//     notify: false,
//     server: {
//       baseDir: "./dist",
//     }
//   });
// });

gulp.task('pug', () => {
  let locals = require('./content.json');

  gulp.src('src/**/*.pug')
    // .pipe(plumber())
    .pipe(pug({
      locals : JSON.parse(fs.readFileSync('./content.json', 'utf8')),
      // locals : locals,
      pretty: true,
    }))
    .pipe(gulp.dest('dist'));
    // .pipe(reload({ stream: true }));
});

gulp.task('watch', () => {
  gulp.watch('src/*.pug', ['pug']);
});

// gulp.task('default', ['pug', 'server', 'watch']);
gulp.task('default',  ['pug', 'watch']);
