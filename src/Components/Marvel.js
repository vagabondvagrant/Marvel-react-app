import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const Marvel = () => {
  const { id } = useParams();
  const [char, setChar] = useState(null);

  useEffect(() => {
    const fetchMarvel = async () => {
      try {
        const givenLink = `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=2e1cdeec426ae323484f29024084c206&hash=d516513ba95b9407c7aca0f73b241f8a`;
        const response = await axios.get(givenLink);
        setChar(response.data.data.results[0]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMarvel();
  }, [id]);

  if (!char) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex p-8">
      <div className="w-1/2 pr-4">
        <img
          src={`${char.thumbnail.path}.${char.thumbnail.extension}`}
          alt="Character"
          className="max-w-full rounded-lg"
        />
      </div>
      <div className="w-1/2">
        <h1 className="text-2xl font-bold mb-4">{char.name}</h1>
        {char.description ? (
          <p className="text-gray-700">{char.description}</p>
        ) : (
          <p className="text-gray-700">No description available.</p>
        )}
      </div>
    </div>
  );
};
