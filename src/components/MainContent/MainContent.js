import CandidatesPlaceholderCard from "../CandidatesPlaceholderCard/CandidatesPlaceholderCard";
import CandidateCard from "../CandidateCard/CandidateCard";
import { useState } from "react";

import "./MainContent.css";

function MainContent(props) {
  const candidates = props.candidates;
  //const users = props.users;
  const [search, setSearch] = useState("");

  let candidatesPlaceholderCard = [];
  for (let i = 0; i < 7; i++) {
    candidatesPlaceholderCard.push(i);
  }
  const filteringCandidates = candidates.filter((item) => {
    if (search.trim() === "") {
      return true;
    } else {
      if (item.name.toUpperCase().includes(search.toUpperCase())) {
        return true;
      }
      return false;
    }
  });

  return (
    <div className="main-content">
      <div className="candidates">
        <h1>Candidates</h1>
        <input
          type="text"
          placeholder="Search..."
          name="search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <hr></hr>

      <div className="candidates-list">
        {candidates.length === 0 &&
          candidatesPlaceholderCard.map((item, index) => {
            return <CandidatesPlaceholderCard key={index} />;
          })}

        {candidates.length > 0 &&
          filteringCandidates.map((item) => {
            return <CandidateCard key={item.id} item={item} />;
          })}
      </div>
    </div>
  );
}

export default MainContent;
