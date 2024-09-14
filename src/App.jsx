import React, { useEffect, useState } from 'react';
import ThemeSwitcher from './components/themeSwitcher/ThemeSwitcher';
import iconArrow from './images/icon-arrow.svg';
import { HashLoader } from 'react-spinners';
import HomeMapContainer from './components/mapContainer/HomeMapContainer';
import './App.css';

const App = () => {
  const [apiData, setApiData] = useState(null);
  const [input, setInput] = useState('');
  const [isLoader, setIsLoader] = useState(false);

  const fetchApi = async (input) => {
    try {
      setIsLoader(true);
      const apiURL = `https://geo.ipify.org/api/v2/country,city?apiKey=${import.meta.env.VITE_GEO_IP_API_KEY}`;
      const res = await fetch(apiURL + (input ? `&ipAddress=${input}` : ''));
      const result = await res.json();
      setApiData(result);
    } catch (error) {
      console.error('Error fetching API data:', error);
    } finally {
      setIsLoader(false);
    }
  };

  const searchHandler = () => {
    try {
      fetchApi(input);
    } catch (error) {
      console.error('Error during search:', error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="min-h-screen bg-stone-200 dark:bg-stone-800 transition-all duration-500">
      <ThemeSwitcher />
      <header className="min-h-60 bg-hero-pattern text-center py-7">
        <h1 className="text-2xl sm:text-3xl font-bold text-white capitalize mb-6">IP Address Tracker</h1>
        <div className="max-w-96 mx-3 sm:mx-auto mb-10 rounded-xl overflow-hidden flex">
          <input
            className="px-3 py-2 sm:px-4 sm:py-3 w-full dark:bg-stone-800 dark:text-white focus:outline-none transition-all duration-500"
            type="text"
            placeholder="Search for any IP address or domain"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={searchHandler} className="bg-stone-800 px-5">
            <img src={iconArrow} alt="arrow-icon" />
          </button>
        </div>

        {isLoader ? (
          <HashLoader className="mx-auto" size="90px" color="#ffffff" />
        ) : (
          apiData && (
            <div className="rounded-xl sm:mb-10 mb-8 bg-white dark:bg-stone-800 dark:text-white p-3 sm:px-5 max-w-4xl mx-3 sm:mx-auto flex sm:flex-row flex-col justify-between sm:items-center transition-all duration-500">
              <div className="mb-4 sm:mb-0">
                <p className="mb-2 sm:mb-4 font-mono font-extrabold text-center sm:text-left uppercase text-stone-500 text-sm tracking-wider">
                  IP Address
                </p>
                <p className="text-2xl font-bold">{apiData.ip ? apiData.ip : 'Unknown'}</p>
              </div>
              <div className="mb-4 sm:mb-0">
                <p className="mb-2 sm:mb-4 font-mono font-extrabold text-center sm:text-left uppercase text-stone-500 text-sm tracking-wider">
                  Location
                </p>
                <p className="text-2xl font-bold">
                  {`${apiData.location.city}, ${apiData.location.country}, ${apiData.location.postalCode}`}
                </p>
              </div>
              <div className="mb-4 sm:mb-0">
                <p className="mb-2 sm:mb-4 font-mono font-extrabold text-center sm:text-left uppercase text-stone-500 text-sm tracking-wider">
                  Timezone
                </p>
                <p className="text-2xl font-bold">{apiData.location.timezone ? apiData.location.timezone : 'NA'}</p>
              </div>
              <div className="mb-4 sm:mb-0">
                <p className="mb-2 sm:mb-4 font-mono font-extrabold text-center sm:text-left uppercase text-stone-500 text-sm tracking-wider">
                  ISP
                </p>
                <p className="text-2xl font-bold">{apiData.isp ? apiData.isp : 'NA'}</p>
              </div>
            </div>
          )
        )}
      </header>
      <div className="w-full h-96 dark:invert">
        {apiData && apiData.location && apiData.location.lat && apiData.location.lng ? (
          <HomeMapContainer lat={apiData.location.lat} lng={apiData.location.lng} />
        ) : (
          <p className="text-center">Location data is unavailable for this IP.</p>
        )}
      </div>
    </div>
  );
};

export default App;
