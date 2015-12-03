var dest = './dist';
var src = './site';
var gutil = require('gulp-util');

module.exports = {
  server: {
    settings: {
      root: dest,
      host: 'localhost',
      port: 3000,
      livereload: {
        port: 35929
      }
    }
  },
  sass: {
    src: src + '/css/**/*.{sass,scss,css}',
    dest: dest + '/css',
    settings: {
      indentedSyntax: false, // Enable .sass syntax?
      imagePath: '/images' // Used by the image-url helper
    }
  },
  browserify: {
    settings: {
      transform: ['babelify']
    },
    src: src + '/js/main.js',
    dest: dest + '/js',
    outputName: 'main.js',
    debug: gutil.env.type === 'dev'
  },
  html: {
    src: src + '/index.html',
    dest: dest
  },
  assets: {
    src: 'src/assets',
    dest: dest
  },
  vendor: {
    src: src +'/vendor',
    dest: dest
  },
  watch: {
    src: src +' /**/*.*',
    tasks: ['build']
  }
};
