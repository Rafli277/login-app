const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);
  setError('');

  try {
    const response = await fetch('http://localhost:8080/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', data.username);
      localStorage.setItem('isAuthenticated', 'true');
      onLogin(true);
    } else {
      setError(data.message || 'Login failed');
    }
  } catch (err) {
    setError('Network error. Please try again.');
  } finally {
    setIsLoading(false);
  }
};
