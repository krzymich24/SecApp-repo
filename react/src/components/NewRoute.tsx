import { Link } from "react-router-dom";
import { useState } from "react";
import { API } from "../api";
import { Maybe } from "typescript-functional-extensions";
import { AxiosError } from "axios";

export function NewRoute() {
  const [name, setName] = useState("");
  const [grade, setGrade] = useState("");

  const addRoute = async () => {
    try {

      const { data } = await API.post(`/gym`, {
        name,

      });
      console.log(data);
    } catch (e) {
      const message: string = Maybe.from((e as AxiosError)?.response?.data)
        .map((data) => (data as { statusCode: number; message: string; error: string }).message)
        .getValueOrDefault((e as Error).message);
      console.error(message);
    }
  };

  return (
    <>
      <form style={{ textAlign: "center" }}
            onSubmit={async (e) => {
              e.preventDefault();
              await addRoute();
            }}>
        <p><b>Add new route</b></p>
        <input type="text" placeholder="Name" className="input input-bordered input-primary w-full max-w-xs"
               onChange={(event) => {
                 setName(event.target.value);
               }}
               value={name}
               required
        />
        <br />
        <input type="text" placeholder="Grade" className="input input-bordered input-primary w-full max-w-xs"
               onChange={(event) => {
                 setGrade(event.target.value);
               }}
               value={grade}
               required
        />

        <br />

        <button className="btn btn-primary">Add Route</button>
      </form>
    </>
  );
}
