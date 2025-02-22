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
          <p className="hero-profile-text">
            A little kindness from everyone will make the word a better place A
            little kindness from everyone will make the world a better place. A
            simple smile or a helping hand can brighten someone's day.
            Compassion and understanding can create ripples of positive change.
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
        <div className="hero-container-profile">
          <div className="hero-outer">
            <div className="hero-middle">
              <div className="hero-container-img">
                <Image
                  src="/ego.png"
                  className="hero-profile-image"
                  alt="My Image"
                  width={90}
                  height={90}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
