
Template.userlist.onCreated(function(){
    this.search = new ReactiveVar();
    var self =this;
    self.autorun(function(){
        Meteor.subscribe('usersPublish',self.search.get());
    });
});

Template.userlist.helpers({ 
    lusers: function() { 
        return Meteor.users.find({});
    }
}); 

Template.userlist.events({ 
    'keyup #search': function(event, template) {
        Template.instance().search.set(event.target.value.trim());
    },
    'click #admin': function(event, template){
        console.log(this);
        Meteor.call('addRemoveAdmin',this);
    }
}); 
