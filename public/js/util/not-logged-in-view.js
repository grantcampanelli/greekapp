define(function (require) {
    var $ = require('jquery');
    var _ = require('underscore');
    var Backbone = require('util/backbone-helper');
    var Hbs = require('handlebars');
    var Mn = require('backbone.marionette');
    var Q = require('q');
    var template = require('text!templates/notLoggedInView.hbs');

    return Mn.LayoutView.extend({
        template: Hbs.compile(template),

        regions: function(options) {

        },

        onShow: function() {

        }

    });
});