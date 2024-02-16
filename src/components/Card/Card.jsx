import React from 'react';

const Card = ({ user }) => {
  if (!user || !user.name || !user.name.first) {
    return <div>Loading...</div>; 
  }

  const gradientStyle = {
    background: `linear-gradient(90deg, #55A3FD, #AC78F8)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 'bold',
  };

  return (
    <div>
      <a href="#" className="flex flex-col border border-gray-600 items-center bg-[#2d2f30] rounded-lg md:flex-row md:p-2 lg:p-5 lg:gap-5">
        <img className="object-cover w-48 h-48 m-3 border border-gray-700  rounded-md" src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h1 className="mb-2 text-4xl text-white" style={gradientStyle}>{`${user.name.first} ${user.name.last}`}</h1>
          <div className="flex flex-col items-start">
            <p className="mb-1 text-2xl text-white capitalize">{user.gender}</p>
            <p className="mb-1 text-2xl text-white">{user.phone}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;

