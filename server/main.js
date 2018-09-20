import { Meteor } from 'meteor/meteor';

isRole = function(role){
  return Roles.userIsInRole(Meteor.user(),role);
};

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.publish({
  usersPublish : function(search){
    //res = new RegExp("reynaldo","i");
    //Meteor.users.find({$or:[{"username":/reynaldo/i},{"profile.nombres":/reynaldo/i}]}).fetch()
    if(search!==null && search!==''){
      res = new RegExp(search,"i");
      res = Meteor.users.find({$or:[
          {"username":res},
          {"profile.nombres":res},
          {"profile.apellidos":res}
        ]
      });
      return isRole('admin') ? res : undefined;
    }
    return isRole('admin') ? Meteor.users.find({}) : undefined;
  },
  eleccionPublish : function(search){
    console.log(search)
    if(isRole('admin')){
      if(search!==null && search!==''){
        res = new RegExp(search,"i");
        res = eleccion.find({$or:[
            {"nombre":res},
            {"descripcion":res}
          ]
        },{fields:{"nombre":1,"descripcion":1}});
        return res;
      }
      return eleccion.find({},{fields:{"nombre":1,"descripcion":1}});
    }
    else
      return undefined;
  }
});

Meteor.methods({
  addRemoveAdmin: function(user){
    if(isRole('admin'))
      Roles.userIsInRole(user,'admin') ? Roles.removeUsersFromRoles(user, 'admin') : Roles.addUsersToRoles(user, 'admin'); 
  }
})

Accounts.validateLoginAttempt((data) => {
  let diff = new Date() - new Date(data.user.createdAt);
  if (diff < 2000) {
      console.info('New user created -- denying autologin.');
      return false;
  } else {
      return true;
  }
});

eleccion.allow({ 
  insert: function(userId,doc) {
    return !!userId; 
  }, 
  update: function(userId) { 
    return !!userId; 
  }, 
  remove: function(userId) { 
    return !!userId; 
  } 
});
