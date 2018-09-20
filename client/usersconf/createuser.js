
AutoForm.hooks({
    "at-pwd-form":{
        onSuccess: function(formType, result){
            FlowRouter.go('userlist');
        }
    }
});