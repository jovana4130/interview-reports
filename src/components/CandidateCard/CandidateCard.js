import "./CandidateCard.css";
import { useNavigate } from "react-router-dom";

function CandidateCard(props) {
  const navigate = useNavigate();
  const item = props.item;
  const imgSrc = item.avatar;

  return (
    <div>
      <div className="card" onClick={() => navigate("/candidate/" + item.id)}>
        <div className="candidate-image">
          <img src={imgSrc} alt="A Candidate" />
        </div>

        <div className="candidate-info">
          <h3>{item.name}</h3>
          <p>{item.email}</p>
        </div>
      </div>
    </div>
  );
}

export default CandidateCard;
