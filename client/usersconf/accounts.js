
T9n.setLanguage("es");

AccountsTemplates.configure({
    confirmPassword: true,
	hideSignInLink : true,
	hideSignUpLink : true,
	onLogoutHook: function(){
		FlowRouter.go('login');
	},
    onSubmitHook: function(){
		FlowRouter.go('index');
	},
});
var pwd = AccountsTemplates.removeField('password');
AccountsTemplates.removeField('email');

AccountsTemplates.addFields([
    {
        _id: "username",
        type: "text",
        displayName: "Username",
        placeholder:"Username",
        required: true,
        minLength: 5,
    },
    {
        _id: 'email',
        type: 'email',
        displayName: "Email",
        placeholder:"Email",
        required: true,
        re: /.+@(.+){2,}\.(.+){2,}/,
        errStr: 'Email invalido',
    },
    {
        _id: 'username_and_email',
        type: 'text',
        displayName: "Username o email",
        placeholder:"Username o email",
        required: true,
    },
    pwd,
    {
        _id : 'nombres',
        type : 'text',
        displayName : 'Nombres',
        required : true,
        re: /^[a-zA-Z ]+$/,
	    errStr: 'Solo letras'
    },
    {
        _id : 'apellidos',
        type : 'text',
        displayName : 'Apellidos',
        required : true,
        re: /^[a-zA-Z ]+$/,
	    errStr: 'Solo letras'
    },
    {
        _id : 'ci',
        type : 'text',
        displayName : 'C.I.',
        required : true,
        re: /^[a-zA-Z0-9-]+$/,
	    errStr: 'Solo numeros, letras y -'
    }
]);