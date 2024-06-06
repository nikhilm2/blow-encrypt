// pages/Team.js

import Image from 'next/image';
import React from 'react';


const teamMembers = [
  { name: 'Prince Kumar Pandit', image: '/1.jpg' },
  { name: 'Ronit Kumar', image: '/3.jpg' },
  { name: 'Chandan Kumar', image: '/2.jpg' },
  { name: 'Nikhil Murmu', image: '/4.jpg' },
];

const Team = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Our Team</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6">
              <div className="rounded-full overflow-hidden w-36 h-36">
                <Image src={member.image} alt={member.name} width={144} height={144} />
              </div>
              <p className="mt-4 text-xl font-semibold text-center text-primary">{member.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
