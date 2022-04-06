import React, { useEffect, useState } from 'react';

import { CharactersList } from '../components/CharactersList';
import { CharacterItem } from '../components/CharacterItem';
import { Header } from '../components/Header';
import { Search } from '../components/Search';
import { Pagination } from '../components/Pagination';

function App() {
  const [data, setData] = useState([]); // estos son estados independientes, tambien hay estados compuestos que son mas escalables y para proyectos grandes
  const [searchValue, setSearchValue] = useState('');
  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(true);

  const API_URL = 'https://rickandmortyapi.com/api/character';

  const apiFetch = async (url) => {
    try {
      const response = await fetch(url);
      const dataJSON = await response.json();

      setTimeout(() => {
        setData(dataJSON.results);
        setInfo(dataJSON.info);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    apiFetch(API_URL);
  }, []);

  const onPrevious = () => {
    apiFetch(info.prev);
  };

  const onNext = () => {
    apiFetch(info.next);
  };

  let filterCharacters = []; // se llaman estados derivados, que vienen a guardar datos a partir de otro estado para evitar crear mas estados indepedientes

  if (!searchValue.length >= 1) {
    filterCharacters = data;
  } else {
    filterCharacters = data.filter((todo) => {
      const todoText = todo.name.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  return (
    <React.Fragment>
      <div className="w-full min-h-screen bg-hero bg-cover bg-no-repeat bg-center">
        <div className="container mx-auto">
          <div>
            <Header>
              <Search
                searchValue={searchValue}
                setSearchValue={setSearchValue}
              />
            </Header>
          </div>

          <CharactersList
            filterCharacters={filterCharacters}
            searchValue={searchValue}
            loading={loading}
          >
            {loading && (
              <strong className="text-white text-xl text-shadow">
                Loading character...
              </strong>
            )}
            {filterCharacters.map((character) => (
              <CharacterItem
                key={character.id}
                name={character.name}
                image={character.image}
                status={character.status}
              />
            ))}
          </CharactersList>
          <Pagination prev={info.prev} previous={onPrevious} next={onNext} />
        </div>
      </div>
    </React.Fragment>
  );
}

export { App };
