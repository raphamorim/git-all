module.exports = function(grunt) {
    grunt.initConfig({
        jshint: {
            src: [
                "lib/**/*.js",
                "bin/**/*.js"
            ],
            gruntfile: "Gruntfile.js"
        }
    });

    ["grunt-contrib-jshint"].forEach(grunt.loadNpmTasks);

    grunt.registerTask("default", ["jshint"]);
};
