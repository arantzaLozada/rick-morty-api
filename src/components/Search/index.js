import React from 'react';

function Search() {
  return (
    <React.Fragment>
      <section className="pt-20 flex justify-center">
        <input
          className="w-72 h-10 focus:outline-none rounded-md bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white placeholder:text-white/75"
          placeholder="  🔍 search for your character"
        />
      </section>
    </React.Fragment>
  );
}

export { Search };
