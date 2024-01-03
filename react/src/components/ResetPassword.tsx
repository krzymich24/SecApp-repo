 import { useState } from 'react';
 import { useParams } from "react-router-dom";

export function ResetPassword() {
  const { token } = useParams();
  const [username, setUsername] = useState<string>();

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
                    setUsername(event.target.value);
                  }}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  type="email"
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
                <input type="password" placeholder="password" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    console.log({ username });
                  }}
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
