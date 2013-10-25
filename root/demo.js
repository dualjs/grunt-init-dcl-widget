/*jshint browser:true*/
var D = require('dual');
var Widget = require('./');

var demo = D.fromJSON([
    'widg', {
        'ui:asset': 'one',
        caption: 'Hello world!'
    }
], {
    'widg': Widget
});

var assets = D.utils.indexBy(demo, false, 'ui:asset');

setTimeout(function () {
    assets.one.setCaption('It works!');
}, 1000);

document.body.appendChild(demo.domify());