import { Link } from "react-router-dom";

export function ClimbingWalls() {
  return (
    <>
      <div className="dropdown dropdown-hover">
        <label tabIndex={0} className="btn m-1">Menu</label>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <Link to="/home">Home<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg></Link>
          </li>
          <li>
            <Link to="/climbingwalls">Climbing Walls
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0 1 12 12.75Zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 0 1-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 0 0 2.248-2.354M12 12.75a2.25 2.25 0 0 1-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 0 0-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 0 1 .4-2.253M12 8.25a2.25 2.25 0 0 0-2.248 2.146M12 8.25a2.25 2.25 0 0 1 2.248 2.146M8.683 5a6.032 6.032 0 0 1-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0 1 15.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 0 0-.575-1.752M4.921 6a24.048 24.048 0 0 0-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 0 1-5.223 1.082" />
              </svg>
            </Link>
          </li>
          <li>
            <Link to="/about">
              About
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              Contact
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
              </svg>
            </Link>
          </li>
        </ul>
      </div>

      <div className="overflow-x-auto">
        <table className="table" style={{ width: '100%' }}>
          {/* head */}
          <thead>
          <tr>
            <th style={{ textAlign: 'center', fontSize: '15px', fontWeight: 'bold' }}>Nazwa</th>
            <th style={{ textAlign: 'center', fontSize: '15px', fontWeight: 'bold' }}>Miasto</th>
            <th style={{ textAlign: 'center', fontSize: '15px', fontWeight: 'bold' }}>Adres</th>
            <th style={{ textAlign: 'center', fontSize: '15px', fontWeight: 'bold' }}>Ilość tras</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          {/* row 1 */}
          <tr>
            <td style={{ textAlign: 'center' }}>
              <div className="flex items-center justify-center">
                <div className="avatar">
                  <div className="mask w-80 h-80 relative">
                    <span className="indicator-item indicator-top indicator-start badge badge-primary" style={{ fontSize: '20px', fontWeight: 'bold' }}>Climbing Spot</span>
                    <img src="src/assets/img/CS.jpg" alt="Climbing Spot" />
                  </div>
                </div>
              </div>
            </td>
            <td style={{ textAlign: 'center', fontSize: '20px', fontWeight: 'bold' }}>Poznań</td>
            <td style={{ textAlign: 'center' }}>Pułaskiego 30</td>
            <td style={{ textAlign: 'center' }}>6</td>
            <th>
              <Link to="spot" className="link-hover label-text-alt link">
                <button className="btn btn-primary">details</button>
              </Link>
            </th>
          </tr>
          {/* row 2 */}
          <tr>
            <td style={{ textAlign: 'center' }}>
              <div className="flex items-center justify-center">
                <div className="avatar">
                  <div className="mask w-80 h-80 relative">
                    <span className="indicator-item indicator-top indicator-start badge badge-primary" style={{ fontSize: '20px', fontWeight: 'bold' }}>United Climbing</span>
                    <img src="src/assets/img/United.jpg" alt="United Climbing" />
                  </div>
                </div>
              </div>
            </td>
            <td style={{ textAlign: 'center', fontSize: '20px', fontWeight: 'bold' }}>Poznań</td>
            <td style={{ textAlign: 'center' }}>Unii Lubelskiej 3</td>
            <td style={{ textAlign: 'center' }}>8</td>
            <th>
              <Link to="united" className="link-hover label-text-alt link">
                <button className="btn btn-primary">details</button>
              </Link>
            </th>
          </tr>
          {/* row 3 */}
          <tr>
            <td style={{ textAlign: 'center' }}>
              <div className="flex items-center justify-center">
                <div className="avatar">
                  <div className="mask w-80 h-80 relative">
                    <span className="indicator-item indicator-top indicator-start badge badge-primary" style={{ fontSize: '20px', fontWeight: 'bold' }}>Poznański Rejon Wspinaczkowy</span>
                    <img src="src/assets/img/PRW.jpg" alt="Poznański Rejon Wspinaczkowy" />
                  </div>
                </div>
              </div>
            </td>
            <td style={{ textAlign: 'center', fontSize: '20px', fontWeight: 'bold' }}>Poznań</td>
            <td style={{ textAlign: 'center' }}>Wartostrada</td>
            <td style={{ textAlign: 'center' }}>10</td>
            <th>
              <Link to="prw" className="link-hover label-text-alt link">
                <button className="btn btn-primary">details</button>
              </Link>
            </th>
          </tr>
          {/* row 4 */}
          <tr>
            <td style={{ textAlign: 'center' }}>
              <div className="flex items-center justify-center">
                <div className="avatar">
                  <div className="mask w-80 h-80 relative">
                    <span className="indicator-item indicator-top indicator-start badge badge-primary" style={{ fontSize: '20px', fontWeight: 'bold' }}>Blok Line</span>
                    <img src="src/assets/img/BL.jpg" alt="Blok Line" />
                  </div>
                </div>
              </div>
            </td>
            <td style={{ textAlign: 'center', fontSize: '20px', fontWeight: 'bold' }}>Poznań</td>
            <td style={{ textAlign: 'center' }}>Bolesława Krzywoustego 72</td>
            <td style={{ textAlign: 'center' }}>14</td>
            <th>
              <Link to="blok" className="link-hover label-text-alt link">
                <button className="btn btn-primary">details</button>
              </Link>
            </th>
          </tr>
          </tbody>
          {/* foot */}
          <tfoot>
          <tr>
            <th style={{ textAlign: 'center', fontSize: '15px', fontWeight: 'bold' }}>Nazwa</th>
            <th style={{ textAlign: 'center', fontSize: '15px', fontWeight: 'bold' }}>Miasto</th>
            <th style={{ textAlign: 'center', fontSize: '15px', fontWeight: 'bold' }}>Adres</th>
            <th style={{ textAlign: 'center', fontSize: '15px', fontWeight: 'bold' }}>Ilość tras</th>
            <th></th>
          </tr>
          </tfoot>

        </table>
      </div>

    </>
  );
}
