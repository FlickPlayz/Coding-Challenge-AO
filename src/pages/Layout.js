import '../Layout.css';
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="navbar">
        <span className="navbar-brand">AO Coding Challenge</span>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Week1">Week 1</Link>
        </li>
        <li>
          <Link to="/Week2">Week 2</Link>
        </li>
        <li>
          <Link to="/Week3">Week 3</Link>
        </li>
        <li>
          <Link to="/Week4">Week 4</Link>
        </li>
      </ul>
    </nav>
      <Outlet />
    </>
  )
};

export default Layout;