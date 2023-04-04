import "./Header.css";
import { Link } from 'react-router-dom';
function Header() {

  return (
    <div className="header">
      
      <Link to='/'>
        <div className="main-title">
          <button>
            <h1>Interviews Reports</h1>
          </button>
        </div>
      </Link>

      <Link to='/'>
        <div className="candidates-button">
          <button>
            <h3>Candidates</h3>
          </button>
        </div>
      </Link>
      
    </div>
  )

}

export default Header;