import { Link } from "react-router-dom";
import { GymCard, GymCardProps } from "./GymCard";
import { useEffect, useState } from "react";
import { API } from "../api";

export function AdmView() {
  const [gyms, setGyms] = useState<GymCardProps[]>([])

  const fetchGyms = async () => {
    const {data} = await API.get(`/gym/`);
    // console.warn(data);
    setGyms(data)
  }

  useEffect(()=> {
    fetchGyms();
  }, [])

  return (
    <div className="flex justify-center">
      <div className={"container"}>
        <header className={"bg-base-200 sticky top-0 z-10"}>
          <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>Admin Panel</h1>
          <p style={{ fontSize: "12px" }}>03.01.2024</p>
          <div className="divider"></div>
        </header>
        <main>
          <div className="columns-3">
            <div>
              <p>Name of the gym</p>
              {gyms.map(({ id,  image, location, name}) =>
                <GymCard  id={id} image={image} location={location} name={name}/>
              )}
            </div>
            <div>
              <p>List of the route-setters</p>
              {gyms.map(({ id,  image, location, name}) =>
                <GymCard  id={id} image={image} location={location} name={name}/>
              )}
            </div>
            <div>
              <p>List of rest users</p>
              {gyms.map(({ id,  image, location, name}) =>
                <GymCard  id={id} image={image} location={location} name={name}/>
              )}
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
