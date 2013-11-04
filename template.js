'use strict';

// Basic template description.
exports.description = 'Create DCL widget';

// Template-specific notes to be displayed before question prompts.
exports.notes = '';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = 'Gruntfile.js';

// The actual init template.
exports.template = function(grunt, init, done) {

    init.process({

    }, [
        init.prompt('name'),
        init.prompt('description'),
        init.prompt('version'),
        init.prompt('repository'),
        init.prompt('homepage'),
        init.prompt('bugs'),
        init.prompt('licenses'),
        init.prompt('author_name'),
        init.prompt('author_email'),
        init.prompt('author_url'),

        {
            name: 'bootstrap',
            message: 'Use Twitter Bootstrap? (y/n)',
            default: 'n',
            validator: /^(y|n)$/,
            warning: '"y" or "n"'
        }
    ], function(err, props) {

        props.main = "lib/" + props.name + ".js";

        props.bootstrap = (props.bootstrap === 'y');

        props.dependencies = {
            "dual": "*"
        };

        props.devDependencies = {
            "grunt": "~0.4.1",
            "grunt-contrib-jshint": "~0.6.0",
            "grunt-contrib-nodeunit": "~0.2.0",
            "grunt-contrib-watch": "~0.4.0",
            "grunt-dcl-resources": "0.0.1",
            "browserify": "~2.x",
            "grunt-browserify": "~1.2.11",
            "grunt-contrib-less": "~0.7.0",
            "grunt-contrib-copy": "~0.4.1",
            "grunt-contrib-clean": "~0.5.0"
        };

        if(props.bootstrap) {
            props.bootstrap = true;
            props.dependencies['dcl-bootstrap'] = '*';
        }


        var files = init.filesToCopy(props);

        init.copyAndProcess(files, props);

        init.writePackageJSON('package.json', props);

        done();
    });

};
