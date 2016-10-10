var gulp = require('gulp');
var gulpSequence = require('gulp-sequence')

var defaultTask = function(cb) {  
  return gulpSequence('clean', 'html', 'css', 'javascript', 'browser-sync', 'watch', cb);
}

gulp.task('default', defaultTask);