'use strict';

module.exports = function(grunt) {
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    let loader = require('./loader')(grunt);

    grunt.initConfig(loader.register((builder) => {
        builder
            .script('App', [
                'Config',
            ])
            .style('App', [])
    }));

    grunt.registerTask('default', ['compile:watch']);
};
