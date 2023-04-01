import CandidatesPlaceholderCard from "../CandidatesPlaceholderCard/CandidatesPlaceholderCard";
import CandidateCard from "../CandidateCard/CandidateCard";

import "./MainContent.css"

function MainContent(props) {

  const candidates = props.candidates;
  //const users = props.users;


  let candidatesPlaceholderCard = [];
  for (let i = 0; i < 7; i++) {
    candidatesPlaceholderCard.push(null);
  }

  return (


    <div className="main-content">

      <div className="candidates">
        <h1>Candidates</h1>
        <input type="text" placeholder="Search..." />
      </div>
      <hr></hr>

      <div className="candidates-list">

        {
          candidates.length === 0 &&
          candidatesPlaceholderCard.map((item, index) => {
            return (
              <CandidatesPlaceholderCard key={index} />
            )
          })
        }

        {

          candidates.length > 0 &&
          candidates.map((item) => {
            return (
              <CandidateCard key={item.id} candidate={item} />

            )
          })
        }
      </div>
      
    </div>
  )
}

export default MainContent;
