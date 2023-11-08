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
