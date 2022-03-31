import React from 'react';

function Pagination(props) {
  const onPrevious = () => {
    props.previous();
  };

  const onNext = () => {
    props.next();
  };

  return (
    <React.Fragment>
      <section className="flex justify-center">
        {/* {props.prev ? (
          <button
            onClick={onPrevious}
            className="rounded bg-cyan-500 text-white px-4 py-1 m-4 w-28"
          >
            previous
          </button>
        ) : null} */}
        <button
          onClick={onPrevious}
          className={`rounded bg-cyan-500 text-white px-4 py-1 m-4 w-28 ${
            !props.prev && 'opacity-30'
          }`}
          disabled={!props.prev}
        >
          previous
        </button>
        <button
          onClick={onNext}
          className="rounded bg-cyan-500 text-white px-4 py-1 m-4 w-28"
        >
          Next
        </button>
      </section>
    </React.Fragment>
  );
}

export { Pagination };
