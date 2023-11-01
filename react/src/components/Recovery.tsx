import { useState } from 'react';

export function Recovery() {
  const [username, setUsername] = useState<string>();

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card w-full max-w-sm flex-shrink-0 bg-base-100 shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Type email address to send a reset code</span>
                </label>
                <input
                  type="email"
                  placeholder=""
                  className="input input-bordered"
                  required
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}
                />
              </div>
              <div className="form-control mt-6">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    console.log({ username });
                  }}
                >
                  Send reset code
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
