
import { useParams } from "react-router"
import "./CandidateReports.css"

function CandidateReports () {

  const {id} = useParams(); 
  
  return (
    <div className="candidate-reports">
      <h1>Candidate Reports</h1>

      <h2> Candidate</h2>
      <p>Candidates Id: {id}</p>
    </div>
  )
}

export default CandidateReports;