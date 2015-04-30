module.exports = function (grunt) {

	require('time-grunt')(grunt);

	// Load Grunt modules
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),


		svgmin: {
			dist: {
				files: [{
						expand: true,
						cwd: 'source/images/icons/source',
						src: ['*.svg'],
						dest: 'source/images/icons/source-min'
				}]
			}
		},

		// http://blog.iconfinder.com/get-started-with-grunticon/
		grunticon: {
			icons: {
				files: [{
					expand: true,
					cwd: 'source/images/icons/svgs',
					src: ['*.svg', '*.png'],
					dest: 'source/images/icons/output'
				}],
				options: {
					compressPNG: true,
					loadersnippet: 'grunticon.loader.js',
					defaultWidth: '128px',
					defaultHeight: '128px',
					// Sets up variables to use on source svg filenames.
					// If you want to output svgs in these colors, append
					// colors below to filename.
					// Example: windows-logo.colors-blue-gray-lightgray.svg
					// colors: {
					// 	blue: '#0078D7',
					// 	gray: '#767676',
					// 	lightgray: '#F2F2F2',
					// 	white: '#FFFFFF'
					// },
					dynamicColorOnly: true
				}
			}
		}

	});


	// Set Grunt tasks

	grunt.registerTask('preview', ['grunticon']);

	grunt.registerTask('build', ['svgmin', 'grunticon']);

	grunt.registerTask('hint', ['jshint']);

}
