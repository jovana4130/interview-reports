 
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import "./CandidateReports.css"
import {TfiEye} from 'react-icons/tfi';
import InterviewReportModal from "../InterviewReportModal/InterviewReportModal";

function CandidateReports() {
  const {id} = useParams(); 
  const [candidate,setCandidate] = useState([])
  const [candidateReports,setCandidateReports] = useState([])
  const [modalOpened, setModalOpened] = useState(false);
  const [selectedReport, setSelectedReport] = useState([]);
  const candidateFetch = (id) =>{
    const url = 'http://localhost:3333/api/candidates?id='+id;
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
      if(data[0] && data[0].id){
        console.log(data);
        setCandidate(data[0]);
      }
    })
  }

  const candidateReportsFetch = (id) =>{
    const url = 'http://localhost:3333/api/reports?candidateId='+id;
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
      if(data && Array.isArray(data)){
        setCandidateReports(data);
      }
    })
  }
  
  useEffect(()=>{
    candidateFetch(id)
    candidateReportsFetch(id)
  },[id])

  const _handleClickView =(report)=>{
    setModalOpened(true);
    setSelectedReport(report);

  }

  const closeModal =()=>{
    setModalOpened(false);
    setSelectedReport(null);
  }

  console.log(candidate);
  return (
    <div className="candidate-reports">
      <div onClick={CandidateReports}></div>
      <p>Name:</p>
      <p>{candidate.name}</p>
      <p>Date of birth:</p>
      <p>{candidate.birthday}</p>
      <p>Email:</p>  
      <p>{candidate.email}</p>
      <p>Education:</p>
      <p>{candidate.education}</p>
  
      <p>Reports</p>
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Interview Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {candidateReports.map((item)=>{
            const dateString = `${item.interviewDate}`;
            const date = new Date(dateString);
            const formattedDate = date.toLocaleString();
            return (
              <tr key={item.id}>
                <td>{item.companyName}</td>
                <td>{formattedDate}</td>
                <td>{item.status}</td>
                <td><span onClick={(e)=>{_handleClickView(item)}}><TfiEye/></span></td>
              </tr>
            )
          })}
        </tbody>
      </table>
      {modalOpened && (<InterviewReportModal closeModal={closeModal} selectedReport={selectedReport}/>)}

    </div>
  )
}

export default CandidateReports;