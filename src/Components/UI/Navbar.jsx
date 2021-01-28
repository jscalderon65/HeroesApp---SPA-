import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useFirebaseUser } from "my-customhook-collection";
import { firebase } from "../../Firebase/FirebaseConfig";
import { logout, googleAuth } from "../../Firebase/FirebaseAuth";
import { Button } from "antd";
import { Image } from "antd";
const Navbar = () => {
  const [UserInfo, isOn] = useFirebaseUser(firebase);
  return (
    <nav
      style={{ padding: "20px", display: "flex", flexFlow: "row wrap" }}
      className="navbar navbar-expand navbar-dark bg-dark"
    >
      <Link to="/" className="navbar-brand">
        HeroesApp
      </Link>
      <div style={{ flex: "1" }} className="collapse navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            exact
            activeClassName="active"
            to="/marvel"
            className="nav-item nav-link "
          >
            Marvel
          </NavLink>
          <NavLink
            exact
            activeClassName="active"
            to="/dc"
            className="nav-item nav-link"
          >
            DC
          </NavLink>
          <NavLink
            exact
            activeClassName="active"
            to="/search"
            className="nav-item nav-link"
          >
            Búsqueda
          </NavLink>
        </div>
      </div>
      <div
        style={{ display: "flex", alignItems: "center",justifyContent:"space-around",width:"200px"}}
        className="navbar-nav animate__animated animate__fadeIn"
      >

          {isOn ? (
            <Button className="animate__animated animate__fadeIn" type="primary" onClick={logout} danger>
              LogOut
            </Button>
          ) : (
            <Button className="animate__animated animate__fadeIn" type="primary" onClick={googleAuth}>
              Ingresa
            </Button>
          )}

        {UserInfo && (
          <Image
          className="animate__animated animate__fadeInRight"
            style={{ borderRadius: "100%", height: "50px", width: "50px" }}
            src={UserInfo.photoURL}
            alt={UserInfo.name}
          />
        )}
      </div>
    </nav>
  );
};
export default Navbar;
