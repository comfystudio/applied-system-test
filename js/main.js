$( document ).ready(function() {
    $('#form').validate({ // initialize the plugin
        rules: {
            firstname: {
                required: true,
                lettersonly: true
            },
            lastname: {
                required: true,
                lettersonly: true
            },
            job: {
                required: true,
                alphanumeric: true
            },
            company: {
                required: true,
                alphanumeric: true
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                digits: true
            }
        }
    });
});