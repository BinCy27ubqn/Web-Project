$("#formValidation").validate({
    rules: {
        email: {
            email: true
        },
        phone: {
            number: true,
            minlength: 10,
            maxlength: 10
        },
        password: {
            minlength: 8
        },
    },

    Messages: {
        email: "please enter your email",
        phone: "Please enter your phone",
        password: "Please enter your phone"
    },
    submitHandler: function(form) {
        // some other code
        // maybe disabling submit button
        // then:
        $(form).submit();
    }

});