'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),

    nodeunit: {
      //Perform unit-tests
      files: ['test/**/*_test.js']
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib: {
        options: {
          jshintrc: 'lib/.jshintrc'
        },
        src: ['lib/**/*.js']
      },
      test: {
        src: ['test/**/*.js']
      },
    },

    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      lib: {
        files: '<%= jshint.lib.src %>',
        tasks: ['jshint:lib', 'nodeunit']
      },
      test: {
        files: '<%= jshint.test.src %>',
        tasks: ['jshint:test', 'nodeunit']
      },
    },


    dcl_resources: {
      //Demo: collect less styles from dependent CommonJS packages
      demo: {
        options: {
          entry: './demo.js',
          dir: 'tmp/prebuild'
        }
      }
    },

    browserify: {
      //Demo: build CommonJS modules
      demo: {
        files: {
          'demo/demo.js': 'demo.js'
        },
        options: {
          debug: true
        }
      }
    },

    less: {
      options: {
        strictMath: false,
        report: 'min',
        paths: ['.']
      },
      //Demo: build stylesheet from less
      demo: {
        files: {
          'demo/style.css': 'tmp/prebuild/imports.less'
        }
      }
    },

    copy: {
      demo: {
        files: [{
          expand: true,
          cwd: 'tmp/prebuild',
          src: ['**/*', '!imports.less'],
          dest: 'demo/',
          filter: 'isFile'
        }],
      }
    },

    clean: {
      demo: ['tmp', 'demo']
    }


  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-dcl-resources');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task.
  grunt.registerTask('default', ['jshint', 'nodeunit']);
  grunt.registerTask('demo', ['dcl_resources:demo', 'browserify:demo', 'less:demo', 'copy:demo']);

};