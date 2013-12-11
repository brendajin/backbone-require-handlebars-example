var path = require('path');

module.exports = function(grunt) {
  grunt.initConfig({
    // Do grunt-related things in here
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      files: ['src/templates/raw/*.handlebars'],
      tasks: ['handlebars'],
      options: {
        spawn: false,
        livereload:true
      }
    },
    template_src:'',
    template_target: 'src/templates/compiled',
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
          '<%= template_target %>':'<%= template_src %>'
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.event.on('watch', function(action, filepath, target){
      grunt.log.write('target: ' + target, 'filepath: ' + filepath);

      // compile handlebars templates
      if(filepath.search(".handlebars") > 0) {
        var arr = filepath.split("/");
        for(var i=0; i < arr.length; i++){
            if(arr[i].indexOf(".handlebars") > -1){
                grunt.log.write('src/templates/compiled/'+arr[i]+'.js');
                grunt.config('template_target','src/templates/compiled/'+arr[i]+'.js');
            }
        }
        grunt.config('template_src',filepath);

        grunt.task.run('handlebars:compile');
      }
  });

  grunt.registerTask('default', ['handlebars']);
  
};

