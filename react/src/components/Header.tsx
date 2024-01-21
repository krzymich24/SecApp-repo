import { Link } from 'react-router-dom';
import * as _ from 'lodash';
import React from 'react';
import { useAuth } from '../useAuth.hooks';

function AdminButton({ linksTo, text }: { linksTo: string; text: string }) {
  const { auth } = useAuth();
  if (!auth?.isAdmin) return <></>;

  return (
    <Link to={linksTo} className="link-hover label-text-alt link">
      <button className="btn-primary btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="mr-2 h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
          />
        </svg>
        {text}
      </button>
    </Link>
  );
}

export function Header() {
  const { auth, unauthorize } = useAuth();

  return (
    <header className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/gym">
          <p className="btn-ghost btn text-xl normal-case">Boulderline</p>
        </Link>
      </div>

      <div className="flex-none gap-2">
        <AdminButton linksTo="/gym/create" text="Create a Gym" />
        <AdminButton linksTo="/admin" text="Manage Route-Setters" />

        {_.isNull(auth) ? (
          <Link to="/auth/login">
            <button className="btn ">Log In</button>
          </Link>
        ) : (
          <Link to="/logout">
            <button className="btn" onClick={() => unauthorize()}>
              Log Out
            </button>
          </Link>
        )}
      </div>
    </header>
  );
}
