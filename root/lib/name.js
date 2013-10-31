/*
 * {%= name %}
 * {%= homepage %}
 *
 * Copyright (c) {%= grunt.template.today('yyyy') %} {%= author_name %}
 * Licensed under the {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.
 */

var D = require('dual');
//{% if (bootstrap) { %}
require('dcl-bootstrap');
//{% } %}


module.exports = D.Widget.extend({
    ATTRS: {
        caption: {
            textAsset: 'root'
        }
    },

    initStructure: function() {
        this.$ = D.fromJSON([
            'div', {
                'ui:asset': 'root'
            }
        ]);
    }
});