import React from 'react';
import kodefanten from '../img/kodeFanten-tegnet2.png';

const BigLogo = () => {
  return (
    <div className="container topcol text-center">


      <h1 className="display-4 pt-3 kodeFantLogo">{'{ kodeFant }'}
      <img src={kodefanten} alt="kodefant-maskotten" style={{height: '200px'}} />
    </h1>
  </div>
  )
}

export default BigLogo;