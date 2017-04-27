module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // uglify: {
    //   build: {
    //     src: 'client/scripts/client.js',
    //     dest: 'server/public/scripts/client.min.js'
    //   }//end uglify
    // },
    copy: {
      html: {
        expand: true,
        cwd: 'client/views/',
        src: ['index.html',
              'partials/*.html',
              'templates/*.html'],
        dest: 'server/public/views/'
      },
      css: {
        expand: true,
        cwd: 'client/styles/',
        src: ['style.css'],
        dest: 'server/public/styles/'
      },
      scripts: {
        expand: true,
        cwd: 'client/scripts/',
        src: ['clientapp.js',
              'controllers/*.js',
              'factories/*.js'],
        dest: 'server/public/scripts/'
      }
      // angular: {
      //   expand: true,
      //   cwd: 'node_modules/angular/',
      //   src: ['angular.js'],
      //   dest: 'server/public/vendors/angular/'
      // },
      // bootstrap: {
      //   expand: true,
      //   cwd: 'node_modules/bootstrap/dist/',
      //   src: ['css/*.css', 'fonts/*.*', 'js/*.*'],
      //   dest: 'server/public/vendors/bootstrap/'
      // }
    },//end copy
    watch: {
      files: ['client/**/*.*'],
      tasks: ['copy']
    }//end of watch
  });//end of config
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['copy', 'watch']);

};//end of module
