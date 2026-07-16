import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './FormStyles.css';

export default function LoginForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [status, setStatus] = useState({ loading: false, error: '', success: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: '', success: '' });

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      // Read as text first — if the server crashed or the route doesn't
      // exist, it may return an HTML error page instead of JSON, and
      // res.json() would throw a confusing "Unexpected token" error.
      const rawText = await res.text();
      let data;
      try {
        data = JSON.parse(rawText);
      } catch {
        throw new Error('Unexpected response from server. Please try again in a moment.');
      }

      if (!res.ok) {
        throw new Error(data.error || 'Login failed');
      }

      // Save the token so future requests can prove who the user is
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      setStatus({ loading: false, error: '', success: 'Logged in successfully!' });
      navigate('/');
    } catch (err) {
      setStatus({ loading: false, error: err.message, success: '' });
    }
  };

  return (
    <div className="form-wrapper">
      <div className="form-card">
        <h2>Welcome Back</h2>
        <p className="form-subtitle">Please enter your details to sign in</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
            />
          </div>

          {status.error && <p className="form-error">{status.error}</p>}
          {status.success && <p className="form-success">{status.success}</p>}

          <button type="submit" className="submit-btn" disabled={status.loading}>
            {status.loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p className="form-footer">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
}