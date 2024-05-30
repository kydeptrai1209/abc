document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (username === 'admin' && password === 'admin') {
        window.location.href = 'admin-dashboard.html'; 
    } else {
        errorMessage.textContent = 'Tài khoản hoặc mật khẩu không chính xác';
    }
});

document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);

    
    this.textContent = type === 'password' ? 'Hiện' : 'Ẩn';
});

