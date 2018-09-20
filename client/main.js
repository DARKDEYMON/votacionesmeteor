
Template.registerHelper('isAdmin', function() {
    return Roles.userIsInRole(Meteor.user(),'admin');
});

Template.registerHelper('realIndex', function(index) {
    return index + 1;
});

Template.registerHelper('isAdminUser', function(user) {
    return Roles.userIsInRole(user,'admin');
});