/*global module */

module.exports = function (grunt) {

    //Project configuration
    grunt.initConfig({
        less: {
            development: {
                files: {
                    "nav.css": "less/main.less"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('test', ['concat', 'qunit']);
    grunt.registerTask('less', 'less');
};