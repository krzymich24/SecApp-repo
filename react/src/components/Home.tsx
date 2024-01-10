import { Link } from "react-router-dom";

export function Home() {
  const primaryColor = "#f99124ff";
  return (
    <div className="flex justify-center">
      <div className={"container"}>
        <header className={"bg-base-200 sticky top-0 z-10"}>
          <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>News Feed</h1>
          <p style={{ fontSize: "12px" }}>03.01.2024</p>
          <div className="divider"></div>
        </header>
        <main>
          <div className="card card-side bg-base-100 shadow-xl mb-5">
            <figure className={"w-1/4"}><img src="src/assets/img/United.jpg" width={"100px"} alt="United" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">United Climbing</h2>
              <p>
                <span className="indicator-item badge badge-secondary mr-1">modified</span>
                <span className="indicator-item badge badge-primary mr-1">new</span>
              </p>
              <p>Zmieniono 2 trasy oraz dodano nową trasę!</p>
              <div className="card-actions justify-end">
                <Link to="/climbingwalls/united" className="link-hover label-text-alt link">
                  <button className="btn btn-primary">details</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="card card-side bg-base-100 shadow-xl mb-5">
            <figure className={"w-1/4"}><img src="src/assets/img/BL.jpg" width={"100px"} alt="United" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Blockline</h2>
              <p>
                <span className="indicator-item badge badge-secondary mr-1">modified</span>
                <span className="indicator-item badge badge-primary mr-1">new</span>
              </p>
              <p>Dodano nową trasę!</p>
              <div className="card-actions justify-end">
                <Link to="/climbingwalls/blok" className="link-hover label-text-alt link">
                  <button className="btn btn-primary">details</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="card card-side bg-base-100 shadow-xl mb-5">
            <figure className={"w-1/4"}><img src="src/assets/img/CS.jpg" width={"100px"} alt="United" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Climbing Spot</h2>
              <p>
                <span className="indicator-item badge badge-secondary mr-1">modified</span>
                <span className="indicator-item badge badge-primary mr-1">new</span>
              </p>
              <p>Zmieniono 2 trasy oraz dodano nową trasę!</p>
              <div className="card-actions justify-end">
                <Link to="/climbingwalls/spot" className="link-hover label-text-alt link">
                  <button className="btn btn-primary">details</button>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
