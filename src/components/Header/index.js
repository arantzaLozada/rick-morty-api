import React from 'react';

function Header({ children }) {
  return (
    <React.Fragment>
      <h1 className="text-white text-5xl font-bold text-center pt-20 text-shadow">
        Rick and Morty API
      </h1>
      {children}
    </React.Fragment>
  );
}

export { Header };
