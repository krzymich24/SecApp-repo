import { Link } from "react-router-dom";

export function ClimbingWalls() {
  return (
    <>
      <form style={{ textAlign: 'center'}}>
        <p> <b>Add new gym</b></p>
        <input type="text" placeholder="Name" className="input input-bordered input-primary w-full max-w-xs" />
        <br/>
        <input type="text" placeholder="City" className="input input-bordered input-primary w-full max-w-xs" />
        <br/>
        <input type="text" placeholder="Address" className="input input-bordered input-primary w-full max-w-xs" />
        <br/>
        <button className="btn btn-primary">Add Gym</button>
      </form>
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
