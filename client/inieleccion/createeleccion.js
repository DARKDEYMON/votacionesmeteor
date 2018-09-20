
AutoForm.hooks({
    "inserteleccion":{
        onSuccess: function(formType, result){
            FlowRouter.go('listaeleccion');
        }
    }
});