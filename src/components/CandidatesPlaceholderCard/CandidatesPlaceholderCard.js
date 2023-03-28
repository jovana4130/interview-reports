//import React from 'react';
import  './CandidatesPlaceholderCard';

const CandidatesPlaceholderCard = () => {


 
  return (
    <div className='card card--placeholder'>
        <h3>Waiting For Data...</h3>
        <div className='image-placeholder'></div>
        <div className='placeholder-info'>
          <div className='name-placeholder'></div>
          <div className='email-placeholder'></div>
        </div>
    </div>
  );
};


export default CandidatesPlaceholderCard;