import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import "./hero.css";

function Hero() {
  return (
    <>
      <div className="hero-container">
        <div>
          <p>Nwakaego</p>
          <p>
            A little kindness from everyone will make the word a better place
          </p>
          <div className="hero-buttons">
            <div className="hero-item hero-yard">
              <FontAwesomeIcon icon={faUsers} className="hero-yard" />
              <div className="hero-yard">Yard</div>
            </div>
            <div className="hero-item hero-request">
              <FontAwesomeIcon icon={faEnvelope} className="hero-request" />
              <div className="hero-request">Request</div>
            </div>
          </div>
        </div>
        <div className="hero-container-img">
          <Image
            src="/pretti.png"
            alt="My Image"
            className="hero-image"
            width={90}
            height={90}
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
