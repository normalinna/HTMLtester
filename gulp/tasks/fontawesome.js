var gulp         = require('gulp');
//var font-aw         = require('font-awesome');


gulp.task('icon', function(){
return gulp.src('./node_modules/font-awesome/**.*')
.pipe(gulp.dest('./app/libs/font-awesome/'));
});