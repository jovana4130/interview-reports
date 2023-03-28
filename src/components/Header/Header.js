import "./Header.css";
function Header() {

  return (
    <div className="header">
      
      <div className="main-title">
        <a href="homepage">
          <h1>Interviews Reports</h1>
        </a>
      </div>

      <div className="candidates-button">
        <a href="homepage">
          <h3>Candidates</h3>
        </a>
      </div>
    </div>
  )

}

export default Header;