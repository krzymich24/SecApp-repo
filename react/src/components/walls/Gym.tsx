import { BoulderCard } from "./BoulderCard";
import { GymCardProps } from "../GymCard";
import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { API } from "../../api";

const Route = (name, grade, author) => ({
  name, grade, author
});

const routes = [
  Route("Drabina", "4", "Ada"),
  Route("Krawądy", "6c", "Maria"),
  Route("Na rozgrzewkę", "5b", "Tosia"),
  Route("Ale to łatwe jest", "7a", "Misza")
];

export function Gym() {
  const { gymId } = useParams();
  const [props, setProps] = useState<GymCardProps>();
  const navigate = useNavigate();


  const fetchGym = async () => {
    const { data } = await API.get(`/gym/${gymId}`);
    setProps(data);
    if (!data) navigate("/home");
  };

  useEffect(() => {
    fetchGym();
  }, [gymId]);

  if (!props) return <></>;
  const { id, name, image, location } = props;

  return (
    <>
      <div className="flex justify-center">
        <div className={"container"}>
          <header className={"bg-base-200 sticky top-0 z-10"}>
            <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>{name}</h1>
            <p style={{ fontSize: "12px" }}>A gym in <strong>{location}</strong>, update at <strong>03.01.2024</strong>
            </p>
            <div className="divider"></div>
          </header>

          <main>
            <div style={{width: "100%", textAlign: "center"}}>
              <Link to={`newRoute`} className="link-hover label-text-alt link">
                <button className="btn">Add new route</button>
              </Link>
            </div>
            <br/>
            {routes.map(({ name, grade, author }, index) =>
              <BoulderCard key={index} id={index} name={name} grade={grade} author={author}
                           image={image} />
            )}
          </main>
        </div>
      </div>

    </>
  );
}
