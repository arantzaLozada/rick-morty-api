import React from 'react';

function CharacterItem(props) {
  return (
    <React.Fragment>
      <li className="bg-indigo-500 rounded-md px-2 py-2 mx-2 my-2 w-60 h-72">
        <h2 className="text-center text-white text-lg font-medium pb-1">
          {props.name}
        </h2>
        <div className="flex justify-center items-center">
          <span className="text-cyan-900 pr-1">{props.status}</span>
          {props.status === 'Alive' ? (
            <div className="rounded-full bg-lime-500 w-3 h-3"></div>
          ) : (
            <div className="rounded-full w-3 h-3 bg-red-700"></div>
          )}
        </div>
        <img
          className="rounded-full w-48 h-48 mx-auto pt-3"
          src={props.image}
          alt={props.name}
        />
      </li>
    </React.Fragment>
  );
}

export { CharacterItem };
