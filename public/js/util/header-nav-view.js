define(function (require) {
    var $ = require('jquery');
    var _ = require('underscore');
    var Backbone = require('util/backbone-helper');
    var Hbs = require('handlebars');
    var Mn = require('backbone.marionette');
    var Q = require('q');
    var Radio = require('backbone.radio');
    var SessionView = require('util/header-menu-session-view');
    var templateSrc = require('text!templates/headerNav.hbs');
    var pageChannel = Radio.channel('page');
    var LoginView = require('util/user-login-view');
    
    return Mn.LayoutView.extend({
        template: Hbs.compile(templateSrc),
        
        regions: function(options) {
            return {
                left: ".grader-navbar-left",
                right: ".grader-navbar-right"
            }
        },
        
        onShow: function() {
            this.getRegion("right").show(new SessionView());
        },

        ui : {
            'loginLink' : '#loginLink'
        },

        events : {
            'click @ui.loginLink' : 'showLogin'
        },

        showLogin : function() {
            console.log('login please');
            pageChannel.request('modalRegion').show(new LoginView());

        }

    
    });
});

