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

    }));

    grunt.registerTask('default', ['symfony']);
};