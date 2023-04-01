import "./CandidateCard.css";
import {useNavigate} from 'react-router-dom'


function CandidateCard({candidate}) {
  const navigate = useNavigate()
  
 
  

  return (
    //()=> navigate('/candidates/'+`${id}`)
    <div>
      <div className="card" onClick={()=> navigate('/candidate/'+candidate.id)}>

      <div className="candidate-image">
        <img src={candidate.avatar} alt="A Candidate" />
      </div>

      <div className="candidate-info">
        <h3>{candidate.name}</h3>
        <p>{candidate.email}</p>
      </div> 
      </div>
    {/*<Outlet/>*/} 
    </div>
    
  )

}

export default CandidateCard;