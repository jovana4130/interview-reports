import CandidatesPlaceholderCard from "../CandidatesPlaceholderCard/CandidatesPlaceholderCard";
import CandidateCard from "../CandidateCard/CandidateCard";
import { useState, useEffect } from 'react';
import "./MainContent.css"

function MainContent ({ children }) {

  
  let candidatesPlaceholderCard = [];
  for (let i = 0; i < 8; i++) {
    candidatesPlaceholderCard.push(null);
  }

  const [candidateCard, setCandidateCard] = useState ([]);
  useEffect(() => {
      fetch( `http://localhost:3333/api/candidates`)
      .then(data => data.json())
      .then(res => {
      setCandidateCard(res);
      }
    )
  }, [])


  return (

    
    <div className="main-content">
      <h1>Candidates</h1>
      <input type="text" placeholder="Search..." />
      <hr></hr>
      
      <div className="candidates">
      
      {
          
          candidatesPlaceholderCard.map((item, index) => {
            return (
              <CandidatesPlaceholderCard /> 
            )
          })
      }

      {
          
            
              candidateCard.map((item) => {
                return (
                  <CandidateCard candidateCard={candidateCard}/>

                )
              })
          }
      
      </div>
    </div>
  )
}

export default MainContent;
