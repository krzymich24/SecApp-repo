 import { useState } from 'react';
 import { API } from "../api";

export function SignIn() {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [mail, setMail] = useState<string>();

  const sign = async () => {
    try {
      console.log('Mail:', mail);
      console.log('Username:', username);
      console.log('Password:', password);
      //const { data } = await API.put(`/person/reset?password=${password}`, { password });
      //console.log(data);
    } catch (e) {
      console.error((e as Error).message);
    }
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card w-full max-w-sm flex-shrink-0 bg-base-100 shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  onChange={(event) => {
                    setMail(event.target.value);
                  }}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  type="text"
                  placeholder="username"
                  className="input input-bordered"
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
                <input type="password" placeholder="password" className="input input-bordered" required onChange={(event) => {
                  setPassword(event.target.value);
                }}

                />
              </div>
              <div className="form-control mt-6">
                <button
                  className="btn btn-primary" onClick={sign}
                >
                  Register Now!
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
