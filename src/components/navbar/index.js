import React  from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default function NavBar({site: siteData, firstName}) {
  const {title, logoImage} = siteData;
  return (
    <div className='navbar'>
      <Link to='/' className="navbar__avatar"><img src={logoImage} alt="fireSpot" height={30} width={30}/></Link>
      <h2 className="navbar__title">
        {title}
      </h2>
      <span className="navbar__profile">
        <Link to='/profile'>
          Welcome {firstName}
        </Link>
      </span>
    </div>
  );
}