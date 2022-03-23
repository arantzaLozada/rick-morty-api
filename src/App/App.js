import React, { useEffect, useState } from 'react';

import { CharactersList } from '../components/CharactersList';
import { CharacterItem } from '../components/CharacterItem';
import { Header } from '../components/Header';
import { Search } from '../components/Search';

import './App.css';

function App() {
  const [data, setData] = useState([]);

  const URL = 'https://rickandmortyapi.com/api/character';

  const apiFetch = async () => {
    try {
      const response = await fetch(URL);
      const dataJSON = await response.json();

      setData(dataJSON.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    apiFetch();
  }, []);

  return (
    <React.Fragment>
      <div className="w-full h-full bg-hero bg-cover bg-no-repeat bg-center">
        <div className="container mx-auto">
          <div>
            <Header>
              <Search />
            </Header>
          </div>

          <CharactersList>
            {data.map((character) => (
              <CharacterItem
                key={character.id}
                name={character.name}
                image={character.image}
                status={character.status}
              />
            ))}
          </CharactersList>
        </div>
      </div>
    </React.Fragment>
  );
}

export { App };
