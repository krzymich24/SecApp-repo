import { Link, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { GymCard, GymCardProps } from './GymCard';
import { API } from '../api';

export function LogOut() {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: 'url(https://i.ytimg.com/vi/U4OeUm4DJkE/maxresdefault.jpg)' }}
    >
      <div className="hero-overlay bg-opacity-75" />
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Logged out!</h1>
          <p className="mb-5">Sad to see you go 😢 We hope to see you again soon!</p>
          <Link to="/gym">
            <button className="btn-primary btn">Back to gyms!</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
