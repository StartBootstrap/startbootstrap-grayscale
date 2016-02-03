/*!
 * Grayscale's Gruntfile
 * http://startbootstrap.com/template-overviews/grayscale
 * Copyright 2013-2016 Blackrock Digital LLC.
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-grayscale/blob/gh-pages/LICENSE)
 */

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            main: {
                src: 'js/<%= pkg.name %>.js',
                dest: 'js/<%= pkg.name %>.min.js'
            }
        },
        less: {
            expanded: {
                options: {
                    paths: ["css"]
                },
                files: {
                    "css/<%= pkg.name %>.css": "less/<%= pkg.name %>.less"
                }
            },
            minified: {
                options: {
                    paths: ["css"],
                    cleancss: true
                },
                files: {
                    "css/<%= pkg.name %>.min.css": "less/<%= pkg.name %>.less"
                }
            }
        },
        sass: {
            expanded: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'css/<%= pkg.name %>.css': 'scss/<%= pkg.name %>.scss'
                }
            },
            compressed: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'css/<%= pkg.name %>.min.css': 'scss/<%= pkg.name %>.scss'
                }
            }
        },
        banner: '/*!\n' +
            ' * <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
            ' * Copyright 2013-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' * Licensed under <%= pkg.license.type %> (<%= pkg.license.url %>)\n' +
            ' */\n',
        usebanner: {
            dist: {
                options: {
                    position: 'top',
                    banner: '<%= banner %>'
                },
                files: {
                    src: ['css/<%= pkg.name %>.css', 'css/<%= pkg.name %>.min.css', 'js/<%= pkg.name %>.min.js']
                }
            }
        },
        watch: {
            scripts: {
                files: ['js/<%= pkg.name %>.js'],
                tasks: ['uglify'],
                options: {
                    spawn: false,
                },
            },
            // Optional watch task for LESS. Activate if you are opting to use LESS
            // less: {
            //     files: ['less/*.less'],
            //     tasks: ['less'],
            //     options: {
            //         spawn: false,
            //     }
            // },
            sass: {
                files: ['scss/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                }
            },
        },
    });

    // Load the plugins.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-banner');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task.
    grunt.registerTask('default', ['sass', 'uglify', 'usebanner']);
    // Optional LESS build task.
    grunt.registerTask('less-build', ['less', 'uglify', 'usebanner']);

};
