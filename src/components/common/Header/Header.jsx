import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="content">
      <div className="logo">
        <Link to="/">
          <h1>D</h1>
        </Link>
      </div>
      <div className="nav-menu">
        <div className="ul-list">
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
          </ul>
        </div>
        <div className="ul-list">
          <ul>
            <li>
              <Link to="/">BLOG</Link>
            </li>
          </ul>
        </div>
        <div className="ul-list">
          <ul>
            <li>
              <Link to="/">BOOKMARKS</Link>
            </li>
          </ul>
        </div>
        <div className="ul-list">
          <ul>
            <li>
              <Link to="/">ELEMENT</Link>
            </li>
          </ul>
        </div>
        <div className="ul-list">
          <ul>
            <li>
              <Link to="/">PLAYLIST</Link>
            </li>
          </ul>
        </div>
        <div className="ul-list">
          <ul>
            <li>
              <Link to="/">BOOKS</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
