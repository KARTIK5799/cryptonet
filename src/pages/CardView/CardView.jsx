import React from 'react';
import Card from '../../components/Card/Card';
import useFetchUser from '../../Api/Api';
import './CardView.module.css'

const CardView = () => {
  const user = useFetchUser();
  return (
    <div className="flex justify-center items-center bg-black h-screen">

      {user ? <Card user={user} /> : <div>Loading...</div>}
    </div>
  );
};

export default CardView;
