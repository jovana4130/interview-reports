import "./CandidateCard.css";

function CandidateCard (props) {

  const item = props.item;
  console.log(item);
  const imgSrc =item.avatar;


  return (

    <div className="card">
      
      <img src={imgSrc} alt="A Candidate" />
      <h3>{item.name}</h3>
      <p>{item.email}</p>
    
    </div>
  )

}

export default CandidateCard;