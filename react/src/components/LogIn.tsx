import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API } from '../api';

export function LogIn() {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const navigate = useNavigate();

  // eslint-disable-next-line consistent-return
  const login = async () => {
    try {
      console.log({ username, password });
      if (!username || !password) return alert('You need to provide both username and password.');
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const { data } = await API.put(`/person/login?username=${username}&password=${password}`);
      console.log(data);
      return navigate('/home');
    } catch (e) {
      console.error((e as Error).message);
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">Log in and get access to full content of this application.</p>
        </div>
        <div className="card w-full max-w-sm shrink-0 bg-base-100 shadow-2xl">
          <form className="card-body" onSubmit={(e) => e.preventDefault()}>
            <div className="form-control">
              <div className="alert alert-warning">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                <span className="label-text-login">Warning: Bad login input!</span>
              </div>
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="username"
                className="input-bordered input"
                required
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input-bordered input"
                required
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <label className="label">
                <Link to="/recovery" className="link-hover label-text-alt link">
                  I forgor my password?
                </Link>
                ·
                <Link to="/signin" className="link-hover label-text-alt link">
                  I ain't got no account?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn-primary btn" onClick={login}>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
