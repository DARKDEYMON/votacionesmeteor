var isloginThenRedirect = function(context, redirect){
    if(Meteor.user()===null)
        redirect('login');
}
/*
var isAdminRedirect = function(context, redirect){
    if(!Roles.userIsInRole(Meteor.userId(),'admin'))
        redirect('/');
}
*/
FlowRouter.route('/login/',{
    name : 'login',
    action(){
        BlazeLayout.render("login");
    }
});

FlowRouter.route('/',{
    name : 'index',
    action(){
        BlazeLayout.render("index",{body:"logo"});
    },
    triggersEnter:[
        isloginThenRedirect
    ]
});

FlowRouter.route('/changepass',{
    name : 'changepass',
    action(){
        BlazeLayout.render("baseform",{baseform:"changepass"});
    },
    triggersEnter:[
        isloginThenRedirect
    ]
});

FlowRouter.route('/logout/',{
    name : 'logout',
    action(){
        AccountsTemplates.logout();
    },
    triggersEnter:[
        isloginThenRedirect
    ]
});

const admroute = FlowRouter.group({
    prefix : '/admin',
    triggersEnter :[
        isloginThenRedirect,
        //isAdminRedirect
    ]
});

admroute.route('/createuser/',{
    name : 'createuser',
    action(){
        BlazeLayout.render("baseform",{baseform:"createuser"});
    }
});

admroute.route('/userlist/',{
    name : 'userlist',
    action(){
        BlazeLayout.render("baselist",{baselist:"userlist"});
    }
});

admroute.route('/createeleccion/',{
    name : 'createeleccion',
    action(){
        BlazeLayout.render("baselist",{baselist:"createeleccion"});
    }
});

admroute.route('/listaeleccion/',{
    name : 'listaeleccion',
    action(){
        BlazeLayout.render("baselist",{baselist:"listaeleccion"});
    }
});