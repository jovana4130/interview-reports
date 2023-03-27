import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import { useState, useEffect } from 'react';

function App() {

  const [candidates, setCandidates] = useState ([]);
  
  useEffect(() => {
      fetch( `http://localhost:3333/api/candidates`)
      .then(data => data.json())
      .then(res => {
      setCandidates(res);
      }
    )
  }, [])

  return (
    
    <div className="App">

      <Header />
      <MainContent candidates={candidates}/>
      <Footer />
    </div>
  )
}

export default App;
