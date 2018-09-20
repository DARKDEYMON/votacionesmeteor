Template.listaeleccion.onCreated(function(){
    this.search = new ReactiveVar();
    self = this;
    self.autorun(function(){
        Meteor.subscribe('eleccionPublish',self.search.get());
    });
});

Template.listaeleccion.helpers({ 
    lelecciones: function() { 
        return eleccion.find({});
    },
}); 

Template.listaeleccion.events({ 
    'keyup #search': function(event, template) { 
        Template.instance().search.set(event.target.value.trim());
    } 
}); 
