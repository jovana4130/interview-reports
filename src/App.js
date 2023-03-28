import "./App.css"
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import { useState, useEffect } from 'react';
import { Route, Routes } from "react-router";
//import CandidateReports from "./components/CandidateReports/CandidateReports";

function App() {

  const [candidates, setCandidates] = useState([]);
  //const [users, setUsers] = useState([]);



  const fetchCandidates = () => {

    const url = "http://localhost:3333/api/candidates";

    fetch(url)
      .then(data => data.json())
      .then(res => {
        setCandidates(res);
      }
      )
  }



  /* const fetchUsers = () => {
     const url = "http://localhost:3333/api/users";
     fetch(url)
     .then(data => data.json())
     .then(res => {
     setUsers(res);
     }
   )
   }*/

  useEffect(() => {

    fetchCandidates();
    //fetchUsers();

  }, [])



  return (

    <div className="App">

      <Header />

      <Routes>
        <Route path="/candidates" element={<MainContent candidates={candidates} />} />
      </Routes>


        
      <Footer />
    </div>
  )
}

export default App;
