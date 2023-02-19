const form = document.getElementById('login-form');
const message = document.getElementById('message');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    
    // Gửi yêu cầu đăng nhập đến backend bằng Java
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            message.innerText = "Đăng nhập thành công!";
        } else {
            message.innerText = "Tên đăng nhập hoặc mật khẩu không đúng.";
        }
    })
    .catch(error => {
        message.innerText = "Đã xảy ra lỗi khi đăng nhập.";
    })
});