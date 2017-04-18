'use strict';
module.exports = function(grunt) {

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
                transform: [['babelify', {presets: ['es2015']}]]
            },
        },
        uglify: {},
        watch: {
            options: {
                interrupt: true,
                livereload: true
            },
            twig: {
                files: ['**/*.twig'],
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

        watchStyle: (task, file) => ({
            files: [
                helper.path.scss(file)
            ],
            tasks: helper.tasks(task, ['sass', 'postcss'])
        }),

        watchScriptFolder: (folder) => ({
            files: [
                helper.path.sourceScript(`${folder}/**/*`)
            ],
            tasks: helper.tasks(folder, ['browserify', 'uglify'])
        })
    };

    function runAllTasks(watch) {
        let index, tasks = Object.keys(grunt_configuration);

        if (!watch && (index = tasks.indexOf('watch')) !== -1) {
            tasks.splice(index);
        }

        grunt.task.run(tasks);
    }

    grunt.task.registerTask('compile', 'Symfony bundle assets helper', function(command, option) {

        if (arguments.length === 0) {
            return runAllTasks(false)
        }

        let commands = {
            dump: function() {
                let dump = JSON.stringify(grunt_configuration, function(key, value) {
                    return 'options' === key ? undefined : value;
                }, '\t');

                grunt.file.write('grunt.compile.dump.json', dump)
            },
            assets: () => runAllTasks(false),
            watch: () => runAllTasks(true),
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
        style: function(task) {

            // // Register style tasks
            // grunt_configuration.sass[task] = configuration.sass(file);
            // grunt_configuration.postcss[task] = configuration.postcss(file);
            // grunt_configuration.watch[task + '_style'] = configuration.watchStyle(task, file);
            //
            // if (Array.isArray(watches)) {
            //     for (let file of watches) {
            //         grunt_configuration.watch[task + '_style'].files.push(
            //             helper.path.scss(file)
            //         )
            //     }
            // }

            return builder;
        },
        script: function(folder, watches) {

            const index = `${folder}/index`;

            grunt_configuration.browserify[folder] = configuration.browserify(index);
            grunt_configuration.uglify[folder] = configuration.uglify(index);
            grunt_configuration.watch[folder + '_script'] = configuration.watchScriptFolder(folder, index);

            if (Array.isArray(watches)) {
                for (let file of watches) {
                    grunt_configuration.watch[folder + '_script'].files.push(helper.path.sourceScript(file))
                }
            }

            return builder;
        }
    };

    return {
        register: function(callback) {
            callback(builder);

            return grunt_configuration;
        }
    }
};
