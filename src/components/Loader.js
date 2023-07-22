import React from 'react';
import { Audio } from 'react-loader-spinner'
const Loader = () => {
  return (
    <div className="overlay">
      <div className="modal">
        { 
                  <Audio
                      height={80}
        width={80}
        radius={9}
        color="green"
        ariaLabel="loading"
        wrapperStyle={{}}
        wrapperClass=""
      />}
      </div>
    </div>
  );
};

export default Loader;
