'use strict';
module.exports = function(grunt) {

    const DEVELOPMENT_MODE = grunt.option('dev');

    let grunt_configuration = {
        sass: {
            options: {
                style: 'compressed',
                includePaths: []
            }
        },
        postcss: {
            options: {
                map: false,
                processors: [
                    require('autoprefixer')({browsers: 'last 2 versions'}),
                    require('cssnano')()
                ]
            }
        },
        browserify: {
            options: {
                transform: [['babelify', {presets: ['es2015', 'stage-2']}]]
            },
        },
        uglify: {},
        watch: {
            options: {
                interrupt: true,
                livereload: true
            },
            templates: {
                files: ['**/*.html'],
                tasks: []
            }
        }
    };

    let helper = {
        tasks: (task, plugins) =>{
            return plugins.map(plugin => `${plugin}:${task}`)
        },
        path: {
            sourceScript: file => `src/javascript/${file}.js`,
            javascript: file => `web/assets/javascript/${file}.js`,
            scss: file => `src/scss/${file}.scss`,
            css: file => `web/assets/css/${file}.css`
        }
    };

    let configuration = {
        uglify: file => ({
            files: {
                [helper.path.javascript(`${file}.min`)]: helper.path.javascript(file)
            }
        }),

        sass: file => ({
            files: {
                [helper.path.css(file)]: helper.path.scss(file)
            }
        }),

        postcss: file => ({
            files: {
                [helper.path.css(`${file}.min`)]: helper.path.css(file)
            }
        }),

        browserify: file => ({
            files: {
                [helper.path.javascript(file)]: helper.path.sourceScript(file)
            }
        }),

        watchStyleFolder: (folder) => ({
            files: [
                helper.path.scss(`${folder}/**/*`)
            ],
            tasks: helper.tasks(folder, ['sass', 'postcss'])
        }),

        watchScriptFolder: (folder) => {

            let tasks = ['browserify'];

            if (!DEVELOPMENT_MODE) {
                tasks.push('uglify')
            }

            return {
                files: [
                    helper.path.sourceScript(`${folder}/**/*`)
                ],
                tasks: helper.tasks(folder, tasks)
            };
        }
    };

    function runAllTasks({watch = false}) {
        let index, tasks = Object.keys(grunt_configuration);

        if (!watch && (index = tasks.indexOf('watch')) !== -1) {
            tasks.splice(index, 1);
        }

        if (DEVELOPMENT_MODE && (index = tasks.indexOf('uglify')) !== -1) {
            tasks.splice(index, 1);
        }

        grunt.task.run(tasks);
    }

    grunt.task.registerTask('compile', 'Assets compiler', function(command, option) {

        if (arguments.length === 0) {
            return runAllTasks({watch: false})
        }

        let commands = {
            dump: function() {
                let dump = JSON.stringify(grunt_configuration, function(key, value) {
                    return 'options' === key ? undefined : value;
                }, '\t');

                grunt.file.write('grunt.compile.dump.json', dump)
            },
            assets: () => runAllTasks({watch: false}),
            watch: () => runAllTasks({watch: true}),
            help: function () {

                function command(command, description) {
                    grunt.log.subhead(command['white'].bold);
                    grunt.log.writeln(description);
                }

                command('compile', 'Compile assets');
                command('compile:watch', 'Compile assets and launch a watch');
                command('compile:assets', 'Compile assets and launch a watch');
                command('compile:dump', 'Dump readable auto-generated configuration');
            }
        };

        (commands[command] || function() {
            grunt.fail.warn(command + ' is not a valid command')
        })()
    });

    const builder = {
        style: function(folder, watches) {

            const index = `${folder}/index`;
            const watch = `style::${folder}`;

            grunt_configuration.sass[folder] = configuration.sass(index);
            grunt_configuration.postcss[folder] = configuration.postcss(index);
            grunt_configuration.watch[watch] = configuration.watchStyleFolder(folder);

            if (Array.isArray(watches)) {
                for (let file of watches) {
                    grunt_configuration.watch[watch].files.push(helper.path.scss(file))
                }
            }

            return builder;
        },
        script: function(folder, watches) {

            const index = `${folder}/index`;
            const watch = `script::${folder}`;

            grunt_configuration.browserify[folder] = configuration.browserify(index);
            if (!DEVELOPMENT_MODE) {
                grunt_configuration.uglify[folder] = configuration.uglify(index);
            }
            grunt_configuration.watch[watch] = configuration.watchScriptFolder(folder);

            if (Array.isArray(watches)) {
                for (let file of watches) {
                    grunt_configuration.watch[watch].files.push(helper.path.sourceScript(file))
                }
            }

            return builder;
        }
    };

    return {
        register: function(callback) {

            if (DEVELOPMENT_MODE) {
                grunt.log.warn('Running in dev mode without uglify')
            }

            callback(builder);

            return grunt_configuration;
        }
    }
};
