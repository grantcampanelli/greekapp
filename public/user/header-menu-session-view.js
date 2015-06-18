define(function (require) {
    var $ = require('jquery');
    var _ = require('underscore');
    var Backbone = require('util/backbone-helper');
    var Hbs = require('handlebars');
    var Mn = require('backbone.marionette');
    var Q = require('q');
    //var userChannel = require('user/module');
    var noSessionTemplate = require('text!templates/header-login-link.hbs');
    var sessionTemplate = require('text!templates/header-logout-link.hbs');

    return Mn.ItemView.extend({
        tagName: "li",
        noSessionTemplate: Hbs.compile(noSessionTemplate),
        sessionTemplate: Hbs.compile(sessionTemplate),

        modelEvents: {
            "login": "render",
            "logout": "render"
        },

        ui: {
            'loginButton' : "a.login",
            'test' : 'a.login',
            'logoutButton' : "a.logout",
            editProfileButton: "a.edit-profile"
        },

        events: {
            "click #loginLink": function() {
                console.log('signin');
            },
            "click @ui.logoutButton": "doLogout",
            "click @ui.editProfileButton": function () {
                console.log("edit profile clicked");
            },
            'click @ui.test' : 'showLoginModal'
        },

        initialize: function (options) {
            //this.model = userChannel.request('session');
        },

        doLogout: function (domEvent) {
            domEvent.preventDefault();
            //if (this.model.isAuthenticated()) {
            //   this.model.logout();
            //}
        },

        getNameText: function () {
            //var user = this.model.get('user');
            //if (user.first && user.last) {
            //   return [user.first, user.last].join(' ');
            //}
            //else if (user.username) {
            //   return user.username;
            //}
            //else {
            //   return "Unknown User";
            //}
            return "Unknown User";
        },

        render: function () {
            var template = this.noSessionTemplate;
            var ctx = {};
            //if (this.model.isAuthenticated()) {
            //   ctx.name = this.getNameText();
            //   template = this.sessionTemplate;
            //}
            this.$el.html(template(ctx));
        },

        showLoginModal: function () {
            console.log("login");
        }

    });
});

