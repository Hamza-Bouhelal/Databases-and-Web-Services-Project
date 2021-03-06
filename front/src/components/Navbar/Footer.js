import React from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <div id="footer">
      <div id="footer-top">
        <div>
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6 text-center">
              <h3>Chess Openings</h3>
              <p className="footer-text">
                Copyright &copy;2021
                <br />
                All rights reserved
              </p>
              <div className="credits">
                Made by: Hamza Bouhelal, Mohamed Reda Arsalane, Badr Essefiany,
                Saad El Jadouries
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
