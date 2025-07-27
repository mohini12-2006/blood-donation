function loginUser(event) {
  event.preventDefault();
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  const msg = document.getElementById('loginMsg');

  if (user === 'admin' && pass === '1234') {
    msg.textContent = "Login successful!";
    msg.style.color = "green";
  } else {
    msg.textContent = "Invalid credentials.";
    msg.style.color = "red";
  }
}
