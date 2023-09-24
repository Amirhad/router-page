import { NavLink } from "react-router-dom";

export const Header:React.FC = () => {
  return (
    <div >
      <header>
        <div className="Cover">
        Cover
        </div>
        <div className="nav">
          
            <NavLink to="/">Home</NavLink>
            <NavLink to="/features">Features</NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
          
        </div>
      </header>
    </div>
  );
};
