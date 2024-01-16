import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BoulderCard } from './BoulderCard';
import { GymCardProps } from '../GymCard';
import { API } from '../../api';

type Boulder = {
  id: string;
  name: string;
  author: string;
  grade: string;
};

export function Gym() {
  const { gymId } = useParams();
  const [gym, setGym] = useState<GymCardProps>();
  const [boulders, setBoulders] = useState<Boulder[]>([]);
  const navigate = useNavigate();

  const fetchGym = async () => {
    const { data: props } = await API.get<GymCardProps>(`/gym/${gymId}`);
    setGym(props);
    if (!props) navigate('/home');
    const { data: boulders } = await API.get(`/route/gym/${gymId}`);
    setBoulders(boulders);
  };

  useEffect(() => {
    fetchGym();
  }, [gymId]);

  if (!gym) return <></>;
  const { id, name, image, location } = gym;

  return (
    <div className="flex justify-center">
      <div className="container">
        <header className="sticky top-0 z-10 bg-base-200">
          <h1 style={{ fontSize: '40px', fontWeight: 'bold' }}>{name}</h1>
          <p style={{ fontSize: '12px' }}>
            A gym in <strong>{location}</strong>, update at <strong>03.01.2024</strong>
          </p>
          <div className="divider" />
        </header>

        <main>
          {boulders.map(({ name, grade, author }, index) => (
            <BoulderCard key={index} id={index} name={name} grade={grade} author={author} image={image} />
          ))}
        </main>
      </div>
    </div>
  );
}
