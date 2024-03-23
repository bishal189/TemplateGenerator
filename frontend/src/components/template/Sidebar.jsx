import React from 'react';
import { NavLink } from 'react-router-dom';
// Import icons if using React Icons
// import { AiFillCaretDown } from 'react-icons/ai';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Sidebar</h2>
      <ul>
        <li>
          <NavLink to="#">Lease Type</NavLink>
          {/* Add dropdown icon here if using React Icons */}
          {/* <AiFillCaretDown /> */}
          <ul className="dropdown">
            <li>
              <NavLink to="/lease-types/standard">Standard Lease</NavLink>
            </li>
            <li>
              <NavLink to="/lease-types/commercial">Commercial Lease</NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to="#">Premises</NavLink>
          {/* Add dropdown icon here if using React Icons */}
          {/* <AiFillCaretDown /> */}
          <ul className="dropdown">
            <li>
              <NavLink to="/premises/residential">Residential</NavLink>
            </li>
            <li>
              <NavLink to="/premises/commercial">Commercial</NavLink>
            </li>
          </ul>
        </li>
        {/* Add similar dropdown structures for Parties, Payment, etc. */}
      </ul>
    </div>
  );
};

export default Sidebar;
