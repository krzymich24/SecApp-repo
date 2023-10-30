// import "./index.css";
import { createRoot } from "react-dom/client";
import { HashRouter, Outlet, Route, Routes } from "react-router-dom";
import React from "react";
import { LogIn } from "./components/LogIn";

const App = document.getElementById("root");

function Header() {
  return (
    <>
    <header className={"navbar bg-base-100"}>
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">MasterGarageHub</a>
      </div>

      <div className="flex-none gap-2">
        <button className="btn btn-primary ">Log In</button>

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fget.wallhere.com%2Fphoto%2Fartwork-car-concept-art-colorful-custom-made-Fernando-Correa-1755033.jpg&f=1&nofb=1&ipt=2cd8e67f96d1d6b4dbfa054e9d3669229cf491f9db3899a3984b9eceadf28a02&ipo=images" />
              {/*<img src="src/assets/img_avatar_site.png" />*/}
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
    </>
  );
}

function Body() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
const Root = () => (<>
  <HashRouter>
    <Routes>
      <Route path={"/"} element={<Body />}>
        <Route path={'login'} element={<LogIn/>} />
      </Route>
    </Routes>
  </HashRouter>
</>);

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(App!).render(<Root />);
