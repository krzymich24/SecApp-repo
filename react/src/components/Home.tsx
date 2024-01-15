import { Link } from "react-router-dom";
import { GymCard, GymCardProps } from "./GymCard";
import { useEffect, useState } from "react";
import { API } from "../api";

export function Home() {
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
          <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>News Feed</h1>
          <p style={{ fontSize: "12px" }}>03.01.2024</p>
          <div className="divider"></div>
        </header>
        <main>
          {gyms.map(({ id,  image, location, name}) =>
            <GymCard  id={id} image={image} location={location} name={name}/>
          )}
        </main>
      </div>
    </div>
  );
}
