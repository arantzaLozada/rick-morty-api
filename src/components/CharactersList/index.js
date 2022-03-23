import React from 'react';

function CharactersList({ children }) {
  return (
    <section className="flex justify-center pt-9 pb-8">
      <ul className="flex justify-center flex-wrap">{children}</ul>
    </section>
  );
}

export { CharactersList };
