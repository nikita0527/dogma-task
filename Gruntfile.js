module.exports = function(grunt) {
    var pkgInfo = grunt.file.readJSON('package.json');
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //CSS minified files
        cssmin: {
            minify: {
                files: [{
                    expand: true,
                    dest: 'css/',
                    ext: '.min.css'
                }, ],
                files: {
                    'style.min.css': 'style.css' // 'destination': 'source'
                }
            },
        },
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass']
            }
        },
        sass: {
            dist: {
                options: {
                    'sourcemap': 'none'
                },
                files: {
                    'style.css': 'sass/style.scss', // 'destination': 'source'
                }
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks("grunt-contrib-cssmin");

    grunt.registerTask('default', ['sass', 'watch', 'cssmin']);
};