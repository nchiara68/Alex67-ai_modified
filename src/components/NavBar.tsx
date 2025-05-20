// src/components/NavBar.tsx

import { NavLink } from 'react-router'; // Corrected import
import LogoutButton from './LogoutButton';  // Adjust path as needed
//import './NavBar.css'; // Optional: for styling

export default function NavBar() {
  return (
    <div className="navbar">
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/chatReact"}>ChatReact</NavLink>
      <NavLink to={"/chatSimple"}>ChatSimple</NavLink>
      <NavLink to={"/generateReact"}>Generate React</NavLink>
      <NavLink to={"/generateSimple"}>Generate Simple</NavLink>
      <NavLink to={"/generateImage"}>Generate Image</NavLink>
      
      {/* Sign Out button as a styled element */}
      <div style={{ marginLeft: 'auto' }}>
        <LogoutButton />
      </div>
    </div>
  );
}
