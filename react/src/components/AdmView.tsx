import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { GymCard, GymCardProps } from './GymCard';
import { API } from '../api';

export class RouteSetterDto {
  person!: { id: number; username: string; [key: string]: any };
  gym?: string;
}

export function AdmView() {
  const [gyms, setGyms] = useState<GymCardProps[]>([]);
  const [selectedGym, setSelectedGym] = useState<string | number>();
  const [routeSetters, setRouteSetters] = useState<RouteSetterDto[]>([]);

  const fetchGyms = async () => {
    const { data } = await API.get('/gym/');
    // console.warn(data);
    setGyms(data);
  };

  const fetchSetters = async () => {
    if (!selectedGym) return;
    const { data } = await API.get(`/gym/${selectedGym}/person`);
    console.log(data)
    setRouteSetters(data);
  }

  useEffect(() => {
    fetchGyms();
  }, []);

  useEffect(() => {
    fetchSetters()
  }, [selectedGym]);

  return (
    <div className="flex justify-center">
      <div className="container">
        <header className="sticky top-0 z-10 bg-base-200">
          <h1 style={{ fontSize: '40px', fontWeight: 'bold' }}>Admin Panel</h1>
          <p style={{ fontSize: '12px' }}>03.01.2024</p>
          <div className="divider" />
        </header>

        <main className={''}>
          <div className="grid grid-cols-3 gap-5">
            <div className={''}>
              <p>Name of the gym</p>
              {gyms.map(({ id, location, name }) => (
                <div key={`gym-${id}`} className="card mb-5 bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>
                      <strong>{location}</strong>
                    </p>
                    <div className="card-actions justify-end">
                      <button type="button" className="btn-primary btn" onClick={() => {
                        console.warn(`setSelectedGym(${id})`);
                        setSelectedGym(id);
                      }}>
                        select
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <p>List of the route-setters</p>
              {routeSetters.map(({ gym, person }, index) => (
                <div key={`setter-${gym}-${person.id}-${index}`} className="card mb-5 bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">{person.username}</h2>
                    <div className="card-actions justify-end">
                      <button type="button" className="btn-error btn" onClick={() => {}}>
                        delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <form>
                <p>Add user to gym</p>
                {selectedGym &&
                  <div className="card mb-5 bg-base-100 shadow-xl">
                    <h2 className="card-title">{selectedGym}</h2>
                    <br/>
                    <label className="label">
                      <span className="label-text">User ID</span>
                    </label>
                    <input
                      type="number"
                      className="input-bordered input"
                      required
                    />
                    <div>
                      <button className="btn-primary btn">
                        Add
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
