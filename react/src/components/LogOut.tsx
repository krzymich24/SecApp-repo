import { Link } from "react-router-dom";
import { GymCard, GymCardProps } from "./GymCard";
import { useEffect, useState } from "react";
import { API } from "../api";

export function LogOut() {

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-6xl font-bold">Logged Out</h1>
          <p className="py-6">
            Log in again or check <a href="#/home" style={{ textDecoration: 'underline' }}>main page</a>
          </p>
        </div>
      </div>
    </div>
  );
}
