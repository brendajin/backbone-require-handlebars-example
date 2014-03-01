var path = require('path');

module.exports = function(grunt) {
  grunt.initConfig({
    // Do grunt-related things in here
    pkg: grunt.file.readJSON('package.json'),
    // Handlebars compilation task
    handlebars: {
      compile: {
        options: {
          // Remove folder path name from file
          processName: function (fileName) {
            return path.basename(fileName, '.handlebars');
          },
          namespace: "Handlebars.templates",
          amd: true
        },
        files: {
          'src/templates/compiled/thumb.handlebars.js':'src/templates/raw/thumb.handlebars'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-handlebars');

  grunt.registerTask('default', ['handlebars']);
  
};

