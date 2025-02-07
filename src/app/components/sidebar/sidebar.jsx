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
    <>
      <div className="sidebar-container-profile">
        <div className="circle-outer">
          <div className="circle-middle">
            <div className="sidebar-container-img">
              <Image src="/ego.png" alt="My Image" width={90} height={90} />
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar-container-tools">
        <div className="sidebar-name">Nwakaego</div>
        <div className="sidebar-code">ar17m59om345</div>
        <div className="sidebar-item sidebar-notification">
          <FontAwesomeIcon icon={faBell} className="" />
          <div>Notification</div>
        </div>
        <div className="sidebar-item sidebar-circle">
          <FontAwesomeIcon icon={faUserGroup} className="" />
          <div>Circle</div>
        </div>
        <div className="sidebar-item sidebar-yard">
          <FontAwesomeIcon icon={faUsers} className="" />
          <div>Yard</div>
        </div>
        <div className="sidebar-item sidebar-request">
          <FontAwesomeIcon icon={faEnvelope} className="" />
          <div>Request</div>
        </div>
        <div className="sidebar-item sidebar-setting">
          <FontAwesomeIcon icon={faGear} className="sidebar-setting" />
          <div>Setting</div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
