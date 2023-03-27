import CandidatesPlaceholderCard from "../CandidatesPlaceholderCard/CandidatesPlaceholderCard";
import CandidateCard from "../CandidateCard/CandidateCard";
import "./MainContent.css"

function MainContent () {


  let candidatesPlaceholderCard = [];
  for (let i = 0; i < 8; i++) {
    candidatesPlaceholderCard.push(null);
  }

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
          <CandidateCard />
        }

      </div>
    </div>
  )
}

export default MainContent;
