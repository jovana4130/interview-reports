import { useEffect } from "react";
import "./InterviewReportModal.css";

function InterviewReportModal(props) {

  const closeModal = props.closeModal;
  const selectedReport = props.selectedReport;
  
  useEffect(() => {
    document.body.classList.add("modal-opened");

    return () => {
      document.body.classList.remove("modal-opened");
    }
  }, [])
  
  return (

    <div className="modal-overlay">
      <div className="modal">
        <h1>Modal</h1>
        <div>
          {
            selectedReport && (
              <div>
                <div>{selectedReport.candidateName}</div>
                <div>{selectedReport.companyName}</div>
                <div>{selectedReport.interviewDate}</div>
                <div>{selectedReport.phase}</div>
                <div>{selectedReport.status}</div>
                <div>{selectedReport.note}</div>
              </div>
            )
          }
        </div>
      </div>

      <div className="close-button" onClick={closeModal}>
        &times;
      </div>
    </div>
  )
}
export default InterviewReportModal;