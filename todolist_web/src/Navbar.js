import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>The Maple TodoList</h1>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/create">
            New Todo
            </Link>
        </div>
      </nav>
    );
  }
   
export default Navbar;