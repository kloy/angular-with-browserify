'use strict';

var gulp = require('gulp'),
	browserify = require('browserify'),
	source = require('vinyl-source-stream'),
	aliasify = require('aliasify');

gulp.task('scripts', function () {

	aliasify = aliasify.configure({
    	aliases: {
        	"angular": "./app/angular.js"
    	},
    	configDir: __dirname
	});

	return browserify('./app/app.js').
		transform(aliasify).
		bundle().
		pipe(source('app.js')).
		pipe(gulp.dest('build'));
});