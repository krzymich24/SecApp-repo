import { Link } from "react-router-dom";

export function Hero() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          'url(https://assets.gqindia.com/photos/611e3b614a83577ac4e82354/16:9/w_2560%2Cc_limit/indoor%252520rock%252520climbing.jpg)',
      }}
    >
      <div className="hero-overlay bg-opacity-60" />
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Boulder-Line</h1>
          <p className="mb-5">
            An application that lets you find bouldering and rope-climbing routes in different locations in your
            vicinity and rate them. 🔎🧗
            <strong>
              The application was prepared as a demo for the <em>Application Security</em> course at the Poznań University of
              Technology, Cybersecurity M.Sc. Programme.
            </strong>
          </p>
          <Link to="/gym" className="link-hover label-text-alt link">
            <button className="btn-primary btn">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
