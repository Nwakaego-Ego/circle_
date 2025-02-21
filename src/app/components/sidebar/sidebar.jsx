import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHome,
  faBell,
  faUserGroup,
  faUsers,
  faEnvelope,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="main-sidebar">
      <div className="sidebar-container-profile">
        <div className="sidebar-container-img">
          <Image
            src="/talking_drum.png"
            className="sidebar-profile-image"
            alt="My Image"
            width={90}
            height={90}
          />
        </div>
      </div>
      <div className="sidebar-container-tools">
        <div className="sidebar-item sidebar-notification">
          <FontAwesomeIcon icon={faBell} className="notification" />
          <div className="notification">Notification</div>
        </div>
        <div className="sidebar-item sidebar-circle">
          <FontAwesomeIcon icon={faUserGroup} className="circle" />
          <div className="circle">Circle</div>
        </div>
        <div className="sidebar-item sidebar-yard">
          <FontAwesomeIcon icon={faUsers} className="yard" />
          <div className="yard">Yard</div>
        </div>
        <div className="sidebar-item sidebar-request">
          <FontAwesomeIcon icon={faEnvelope} className="request" />
          <div className="request">Request</div>
        </div>
        <div className="sidebar-item sidebar-setting">
          <FontAwesomeIcon icon={faGear} className="setting" />
          <div className="setting">Setting</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
