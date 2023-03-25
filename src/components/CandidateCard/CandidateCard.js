import "./CandidateCard.css";

function CandidateCard ({ candidateCard }) {

  return (

    <div className="card">
      <div className="avatar">{candidateCard.avatar}</div>
      <img src="" alt="Candidate Name" />
      <h3>Candidate Name</h3>
      <p>Email</p>
    </div>
  )

}

export default CandidateCard;