module.exports = function (grunt) {
  //project configuration
  grunt.initConfig({ 
    pkg: grunt.file.readJSON("package.json"),
    jshint: {
      options: {
	globals: { 
	  "jQuery": false,
	  "$": false
	}
      },
      all: ["app/**/*.js"]
    },
    uglify: {
      options: {
	mangle: false
      },
      build: {
	src: "build/<%= pkg.name %>.concat.js",
        dest: "build/<%= pkg.name %>.min.js"
      }
    },
    concat: {
      options: {
        separator: ";"
      },
      dist: {
	src: ["app/**/*.js"],
	dest: "build/<%= pkg.name %>.concat.js"
      }
    },
    watch: {
      scripts: {
	files: ["app/**/*.js"],
	tasks: ["jshint","concat","uglify"]
      }
    }
  });

  // Load plugin task
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-watch");
  // Default tasks
//  grunt.registerTask("watch", ["watch"]);
  grunt.registerTask("syntax-validation", ["jshint"]); 
  grunt.registerTask("default", ["concat","uglify"]);
}
