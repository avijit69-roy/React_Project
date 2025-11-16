import React from 'react'

const Card = ({ item }) => {
  return (
    <div>
      <a href={item.url} target="_blank">
        <img className="h-40 w-full" src={item.download_url} alt="" />
        <h1 className="font-bold text-xl text-black">{item.author}</h1>
      </a>
    </div>
  );
};

export default Card

