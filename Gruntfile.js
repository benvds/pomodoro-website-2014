module.exports = function(grunt) {

    grunt.initConfig({
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'assets/styles',
                    src: ['*.scss'],
                    dest: 'assets/styles',
                    ext: '.css'
                }]
            }
        },
        uglify: {
            modernizr: {
                files: {
                    'assets/scripts/modernizr.min.js': 'bower_components/modernizr/modernizr.js'
                }
            },
            main: {
                files: {
                    'assets/scripts/main.min.js': 'assets/scripts/main.js'
                }
            }
        },
        copy: {
            jquery: {
                files: [
                    {
                        expand: true,
                        cwd: 'bower_components/jquery/dist/',
                        src: ['**'],
                        dest: 'assets/scripts/'
                    }
                ]
            }
        },
        exec: {
            build: {
                cmd: 'bundle exec jekyll build'
            },
            serve: {
                cmd: 'bundle exec jekyll serve --watch'
            },
            deploy: {
                cmd: 'rsync --progress -a --delete -e "ssh -q" _site/ myuser@host:mydir/'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-exec');

    grunt.registerTask('default', [ 'sass:dist', 'copy', 'uglify', 'exec:build' ]);
    grunt.registerTask('deploy', [ 'default', 'exec:deploy' ]);

};
