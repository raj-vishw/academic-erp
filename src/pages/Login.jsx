import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="auth-container">
      <div className="auth-left">
        <form className="auth-form" onSubmit={handleLogin}>
          <h1>LOGIN</h1>
          <p>Please enter your details to sign in</p>

          <div className="form-group">
            <label>Username</label>
            <input type="text" className="form-input" placeholder="Enter your username" required />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-input" placeholder="Enter your password" required />
          </div>

          <div className="form-group">
            <label>Server</label>
            <input type="text" className="form-input" placeholder="main.university.edu" defaultValue="main.university.edu" />
          </div>

          <button type="submit" className="auth-btn">SUBMIT</button>
        </form>
      </div>
      <div className="auth-right">
        {/* Background image handled in CSS */}
      </div>
    </div>
  );
}
