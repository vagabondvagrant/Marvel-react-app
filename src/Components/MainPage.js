import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Main = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const fetchMarvel = async () => {
      try {
        setLoading(true);
        setError(false);

        const exactUrl =
          "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=2e1cdeec426ae323484f29024084c206&hash=d516513ba95b9407c7aca0f73b241f8a";

        const response = await axios.get(exactUrl);
        setData(response.data.data.results);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
        console.error(error);
      }
    };

    fetchMarvel();
  }, []);

  const searchMarvel = async () => {
    const searchUrl = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=2e1cdeec426ae323484f29024084c206&hash=d516513ba95b9407c7aca0f73b241f8a`;

    try {
      setLoading(true);
      setError(false);

      const response = await axios.get(searchUrl);
      setData(response.data.data.results);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <div
      className={`min-h-screen bg-${
        darkMode ? "gray-900" : "gradient-to-r from-purple-400 to-pink-500"
      } p-8`}
    >
      <div className="flex justify-start items-center mb-4">
        <button
          className={`p-2 rounded-md ${
            darkMode ? "bg-yellow-300" : "bg-blue-500"
          } text-white`}
          onClick={toggleDarkMode}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      <div className="flex flex-col items-center justify-start mt-20vh">
        <div className="mb-4">
          <input
            type="search"
            className="p-2 border border-gray-300 rounded-md mr-2"
            value={search}
            placeholder="Search here"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="p-2 bg-blue-500 text-white rounded-md"
            onClick={searchMarvel}
          >
            Fetch
          </button>
        </div>

        {loading && <p>Loading...</p>}
        {error && <p>Error occurred while fetching data.</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.map((character) => (
            <Link key={character.id} to={`/${character.id}`}>
              <div className="p-4 bg-white rounded-md shadow-md">
                <h2 className="text-xl font-semibold mb-2">{character.name}</h2>
                <img
                  className="mx-auto w-40 h-40 rounded-full"
                  src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                  alt={character.name}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
