module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        files: {
          'app/js/build/main.min.js': 'app/js/src/**/*.js'
        }
      }
    },
    sass: {
      build: {
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
    },
    watch: {
      styles: {
        files: 'app/css/src/**/*.scss',
        tasks: 'sass'
      },
      scripts: {
        files: 'app/js/src/**/*.js',
        tasks: 'uglify' 
      },
      configFiles: {
        files: 'Gruntfile.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-wiredep');

  grunt.registerTask('default', ['uglify', 'sass']);
  grunt.registerTask('all', ['wiredep', 'uglify', 'sass']);
  grunt.registerTask('lint', ['jshint']);
  grunt.registerTask('start_watch', ['all', 'watch']);
};
