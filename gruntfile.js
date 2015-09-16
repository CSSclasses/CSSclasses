'use strict';

module.exports = function (grunt) {

    require('time-grunt')(grunt); // Show elapsed time after tasks run to visualize performance
    require('load-grunt-tasks')(grunt); // Load all Grunt tasks that are listed in package.json automagically

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // shell commands for use in Grunt tasks
        shell: {
            jekyllServe: { command: 'jekyll serve' },
            jekyllBuild: { command: 'jekyll build' }

        },

        // watch for files to change and run tasks when they do
        watch: {
            sass: {
                files: ['_sass/**/*.{scss,sass}'],
                tasks: ['sass'],
                options: { livereload: true } //using the browserextension
            }
        },

        // sass (libsass) config
        sass: {
            options: {
                sourceMap: true,
                relativeAssets: false,
                outputStyle: 'expanded'
            },
            dev: {
              files: [{
                expand: true,
                cwd: '_sass/',
                src: ['**/*.{scss,sass}'],
                dest: 'css/',
                ext: '.css'
              }]
            },
            build: {
                files: [{
                    expand: true,
                    cwd: '_sass/',
                    src: ['**/*.{scss,sass}'],
                    dest: '_site/css',
                    ext: '.css'
                }]
            }
        },

        // run tasks in parallel
        concurrent: {
            serve: [
                'sass:dev',
                'watch',
                'shell:jekyllServe'
            ],
            options: { logConcurrentOutput: true }
        },

        postcss: {
          options: {
            map: false,
            processors: [
              require('autoprefixer')({browsers: 'last 2 versions'}),
              require('cssnano')()
            ]
          },
          dist: {
            src: '_site/css/*.css'
          }
        },

        copy: {
          vendor: {
            files: [{
              expand: true,
              cwd: "bower_components/classie/",
              src: "classie.js",
              dest: "vendor/js"
            },
            {
              expand: true,
              cwd: "bower_components/reqwest/",
              src: "reqwest.min.js",
              dest: "vendor/js"
            },
            {
              expand: true,
              cwd: "bower_components/snap.svg/dist/",
              src: "snap.svg-min.js",
              dest: "vendor/js"
            },
            {
              expand: true,
              cwd: "bower_components/strftime/",
              src: "strftime-min.js",
              dest: "vendor/js"
            }]
          }
        }
    });

    // Register the grunt serve task
    grunt.registerTask('serve', [ 'concurrent:serve' ]);

    // Register the grunt build task
    grunt.registerTask('build', [
        'copy:vendor',
        'shell:jekyllBuild',
        'sass:build',
        'postcss'
    ]);

    // Register build as the default task fallback
    grunt.registerTask('default', 'serve');
};
