import "./CandidateCard.css";

function CandidateCard(props) {

  const item = props.item;
  console.log(item);
  const imgSrc = item.avatar;


  return (

    <div className="card">

      <div className="candidate-image">
        <img src={imgSrc} alt="A Candidate" />
      </div>

      <div className="candidate-info">
        <h3>{item.name}</h3>
        <p>{item.email}</p>
      </div>

    </div>
  )

}

export default CandidateCard;