import React from "react";
import Zuri from "../assets/Zuri.Internship_Logo.png";
import IG4 from "../assets/I4G.png";

const FooterSection = () => {
  return (
    <footer>
      <div className="line">
        <hr />
      </div>
      <div className="about">
        <div>
          <img src={Zuri} />
        </div>
        <div>HNG Internship 9 Frontend Task</div>
        <div>
          <img src={IG4} />
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
