/**
 * grunt-freemarkerify
 *
 * Copyright (c) 2017 denkwerk GmbH
 */

var path = require('path');
var util = require('util');
var Freemarker = require('freemarker.js');

module.exports = function(grunt) {
    'use strict';

    grunt.registerMultiTask('freemarkerify', function() {
        var options = this.options();

        var viewRoot = !!options.viewRoot.match(/^\//) ? options.viewRoot : process.cwd() + path.sep + options.viewRoot;

        grunt.verbose.writeln(util.format('Creating Freemarker instance with viewRoot %s.', viewRoot));
        var fm = new Freemarker({
            viewRoot: viewRoot
        });

        this.files.forEach(function(sources) {
            sources.src.forEach(function(file) {
                var ext = sources.ext || options.ext || '.html';
                var data = options.data;
                var dest = sources.dest;
                var fileExt = path.extname(file);
                var filename = path.basename(file, fileExt);

                var relativeFile = path.relative(options.viewRoot || '', file);

                var relativePath = path.dirname(relativeFile);

                if (typeof data === 'function') {
                    grunt.verbose.writeln(util.format('Getting data for template %s.', relativeFile));
                    data = data(relativeFile);
                }

                var destFile = (path.extname(dest) !== '') ? dest : path.join(dest, relativePath, filename + ext);

                grunt.verbose.writeln(util.format('Rendering template %s.', relativeFile));
                var html = fm.renderSync(relativeFile, data);

                grunt.file.write(destFile, html);
            } );
        } );
    } );
};
