function login() {
    let username = $('#username').val();
    let password = $('#password').val();

    // Check if the username is an email
    if (!isValidEmail(username)) {
        showMessage('error', 'Incorrect Username/Password');
        return;
    }

    // Simulate server-side verification using Ajax
    $.ajax({
        type: 'POST',
        url: '/login', 
        data: { username: 'hr@auphansoftware.com', password: 'hello' },
        success: function(response) {
            if (response === 'success') {
                showMessage('success', 'Login Successful');
            } else {
                showMessage('error', 'Incorrect Username/Password');
            }
        },
        error: function() {
            showMessage('error', 'An error occurred');
        }
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showMessage(type, text) {
    const messageBox = $('#message');
    messageBox.text(text);
    messageBox.removeClass('success error').addClass(type);
    messageBox.fadeIn(300).delay(2000).fadeOut(300);
}