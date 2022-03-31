import React from 'react';

function CharactersList({ children, filterCharacters, searchValue }) {
  return (
    <React.Fragment>
      <section className="flex justify-center pt-9 pb-8">
        {!filterCharacters.length && (
          <p className="text-white text-2xl">No result for {searchValue}</p>
        )}
        <ul className="flex justify-center flex-wrap">{children}</ul>
      </section>
    </React.Fragment>
  );
}

export { CharactersList };
