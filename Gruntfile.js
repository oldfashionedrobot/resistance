module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      files: {
        'app/js/build/main.min.js': 'app/js/src/*.js'
      }
    },
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'app/css/build/main.min.css': 'app/css/src/**/*.scss'
        }
      }
    },
    wiredep: {
      app: {
        src: [ 
          'app/index.html',
          'app/css/src/main.scss'
        ]
      }
    },
    jshint: {
      all: ['Gruntfile.js', 'app/js/src/**/*.js']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-wiredep');

  grunt.registerTask('default', ['uglify', 'sass']);
};
