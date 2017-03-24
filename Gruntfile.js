module.exports = function(grunt) {
    var path = require('path');

    grunt.initConfig({
        freemarkerify: {
            options: {
                viewRoot: 'examples',
                data: {
                    title: 'Just an example',
                    list: [
                        'Foo',
                        'Bar',
                        'Baz'
                    ],
                    copyright: {
                        name: 'John Doe',
                        year: (new Date()).getFullYear()
                    }
                }
            },

            simple: {
                files: [
                    {
                        src: '**/*.ftl',
                        cwd: 'examples',
                        ext: '.html',
                        dest: 'output/simple',
                        expand: true
                    }
                ]
            },

            customData: {
                options: {
                    data: function (filename) {
                        return grunt.file.readJSON('examples/' + filename.replace(/\.ftl$/, '.json'));
                    }
                },
                files: [
                    {
                        src: '**/*.ftl',
                        cwd: 'examples',
                        ext: '.html',
                        dest: 'output/custom-data',
                        expand: true
                    }
                ]
            }
        }
    });

    grunt.loadTasks('tasks');
};
