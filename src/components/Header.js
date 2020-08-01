import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const name = useSelector((state) => state.name);
  const designation = useSelector((state) => state.designation);

  return (
    <div>
      <div className="header">
        <div className="info">
          <h2 className="name">{name}</h2>
          <p className="title">
            {designation}
            {/* <span className="divider"> || </span> Game
              Enthusiast */}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Header;

// Tejas Bhosale
