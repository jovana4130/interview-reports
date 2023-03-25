import React from 'react';
import  './CandidatesPlaceholderCard';
import CandidateCard from './candidateCard/CandidateCard';

const CandidatesPlaceholderCard = () => {


 
  return (
    <div className='card card--placeholder'>
        <h3>Waiting For Data...</h3>
        <div className='candidateCard'>
          <CandidateCard />
        </div>
    </div>
  );
};


export default CandidatesPlaceholderCard;