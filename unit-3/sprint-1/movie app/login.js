const form = document.querySelector('#login-form');
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const username = formData.get('username');
  const password = formData.get('password');
  
  const response = await fetch('/api/login', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: { 'Content-Type': 'application/json' },
  });
  
  if (response.ok) {
    const data = await response.json();
    // Store session information and redirect to protected page
  } else {
    // Display error message
  }
});
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    
    // Verify credentials and generate session token
    const user = findUserByUsername(username);
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign({ username: user.username }, secretKey);
      res.status(200).json({ token });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  });

  

  // if (data.token) {
  //   // Store session information in cookie or local storage
  //   localStorage.setItem('token', data.token);
    
  //   // Redirect to protected page
  //   window.location.href = '/protected-page.html';
  // } else {
  //   // Display error message
  // }
  // const token = localStorage.getItem('token');
  // if (!token) {
  //   window.location.href = '/login.html';
  // } else {
  //   // Verify session token on the server
  //   const response = await fetch('/api/verify-session', {
  //     headers: { Authorization: `Bearer ${token}` },
  //   });
    
  //   if (!response.ok) {
  //     localStorage.removeItem('token');
  //     window.location.href = '/login.html';
  //   }
  // }
    