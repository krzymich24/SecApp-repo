import { Link } from "react-router-dom";
import { useState } from "react";
import { API } from "../api";
import { Maybe } from "typescript-functional-extensions";
import { AxiosError } from "axios";

export function NewGym() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");

  const addGym = async () => {
    try {
      const location = address ? `${city}, ${address}` : city;
      const { data } = await API.post(`/gym`, {
        name,
        location
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
              await addGym();
            }}>
        <p><b>Add new gym</b></p>
        <input type="text" placeholder="Name" className="input input-bordered input-primary w-full max-w-xs"
               onChange={(event) => {
                 setName(event.target.value);
               }}
               value={name}
               required
        />
        <br />
        <input type="text" placeholder="City" className="input input-bordered input-primary w-full max-w-xs"
               onChange={(event) => {
                 setCity(event.target.value);
               }}
               value={city}
               required
        />

        <br />
        <input type="text" placeholder="Address" className="input input-bordered input-primary w-full max-w-xs"
               onChange={(event) => {
                 setAddress(event.target.value);
               }}
               value={address} />
        <br />
        <button className="btn btn-primary">Add Gym</button>
      </form>
    </>
  );
}
