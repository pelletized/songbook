module.exports = function(grunt) {
	
	require('time-grunt')(grunt);
	
    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {   
			js: {
				src: [
					'dev/js/libs/*.js', // All JS in the libs folder
					'dev/js/main-dev.js',  // This specific file
					'dev/js/insta-dev.js'  
				],
				dest: 'js/main.js',
			},
			css: {
				src: [
					'dev/css/*.css',					
				],
				dest: 'css/style.css',
			}			
		},
		
		uglify: {
			build: {
				src: 'js/main.js',
				dest: 'js/main.min.js'
			}
		},
		
		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'images/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'images/'
				}]
			}
		},
		
		jshint: {
			files: [
				'dev/js/main-dev.js',
				'dev/js/insta-dev.js',
			]		
		},
		
		sass: {
			dist: {
				options: {
					//style: 'compressed', //prod
					style: 'expanded', //dev
					spawn: false,
					
				},
				files: {					
					'dev/css/style.css': 'dev/css/style.scss'
				}
			} 
		},
		
		watch: {
			scripts: {
				files: ['dev/js/**/*.js'],
				tasks: ['concat:js', 'uglify'],
				options: {
					spawn: false,
				},
			},
			css: {
				files: ['dev/css/**/*.scss'],
				tasks: ['sass', 'concat:css'],
				options: {
					spawn: false,
				}
			}
		}

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'uglify']);    

	//5. run imagemin and jshint on it's own 
};
