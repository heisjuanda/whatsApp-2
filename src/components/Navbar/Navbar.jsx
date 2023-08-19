import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { useContext } from "react";

import { AuthContext } from "../../context/authContext";

import whatsApp2Logo from "../../assets/img/icons/whatsApp2Logo.png";
//import userNoAvatar from "../../assets/img/icons/userNoAvatar.png";

import "./Navbar.css";

export const Navbar = () => {
  const currentUser  = useContext(AuthContext);

  const handleLogOut = () => {
    signOut(auth);
  };

  return (
    <nav className="nav-bar__container">
      <div>
        <img src={whatsApp2Logo} alt="whatsApp 2 logo" />
      </div>
      <div>
        <img src={currentUser.photoURL} alt="Current user picture" />
        <p>{currentUser.displayName}</p>
      </div>
      <div>
        <button onClick={handleLogOut}>LogOut</button>
      </div>
    </nav>
  );
};
