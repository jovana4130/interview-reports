import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router";
import CandidateReports from "./components/CandidateReports/CandidateReports";

function App() {
  const [candidates, setCandidates] = useState([]);

  const fetchCandidates = () => {
    const url = "http://localhost:3333/api/candidates";

    fetch(url)
      .then((data) => data.json())
      .then((res) => {
        setCandidates(res);
      });
  };

  useEffect(() => {
    fetchCandidates();
  }, []);

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<MainContent candidates={candidates} />} />
        <Route path="/candidate/:id" element={<CandidateReports />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
