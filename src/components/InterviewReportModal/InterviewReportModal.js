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

  const date = selectedReport.interviewDate;
  const interviewDate = new Date (date);
  const interviewDateString  = interviewDate.toLocaleString();
  
  return (

    <div className="modal-overlay">
      <div className="modal">
        {/* <h1>Modal</h1> */}
        <div>
          {
        
            selectedReport && (
              <div>
                <div className="interviewee">
                  <div>{selectedReport.candidateName}</div>
                  <div className="close-button" onClick={closeModal}>
                    &times;
                  </div>
                </div>
                <hr></hr>
                <div className="company-report">
                  <div className="report-info">
                    <p className="company-name">Company</p>
                    <p>{selectedReport.companyName}</p>
                    <p className="interview-date">Interview Date</p>
                    <p>{selectedReport.interviewDate}</p>
                    <p className="phase">Phase</p>
                    <p>{selectedReport.phase}</p>
                    <p className="status">Status</p>
                    <p>{selectedReport.status}</p>
                  </div>
                  <div className="note">
                    <p className="notes">Notes</p>
                    <p>{selectedReport.note}</p>
                  </div>
                </div>

              </div>
            )
          }
        </div>
      </div>

      {/* <div className="close-button" onClick={closeModal}>
        &times;
      </div> */}
    </div>
  )
}
export default InterviewReportModal;