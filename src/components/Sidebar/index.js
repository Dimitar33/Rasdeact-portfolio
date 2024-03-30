import "./index.scss";
import { NavLink } from "react-router-dom";
import LogoD from "../../public/logo.svg.png";
import logo from "../../public/Dimitar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiagramProject, faEnvelope, faGraduationCap, faHome, faUser, faSchool } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Sidebar() {
  return (
    <div className="nav-bar">
      <NavLink className="logo" to='/'>
        <img src={LogoD} alt="logo"></img>
        <img className="sub-logo" src={logo} alt="dimitar"></img>
      </NavLink>
      <nav>
        <NavLink
          className="about"
          exact="true"
          activeclassname="active"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e"></FontAwesomeIcon>
        </NavLink>
        <NavLink
          className="contacts"
          exact="true"
          activeclassname="active"
          to="/contacts"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"></FontAwesomeIcon>
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/diplomas">
          <FontAwesomeIcon icon={faSchool} color="#4d4d4e"></FontAwesomeIcon>
        </NavLink>
        <NavLink
          className="courses"
          exact="true"
          activeclassname="active"
          to="/courses"
        >
          <FontAwesomeIcon icon={faGraduationCap} color="#4d4d4e"></FontAwesomeIcon>
        </NavLink>
        <NavLink
          className="projects"
          exact="true"
          activeclassname="active"
          to="/projects"
        >
          <FontAwesomeIcon icon={faDiagramProject} color="#4d4d4e"></FontAwesomeIcon>
        </NavLink>
      </nav>
      <ul className="navLinks">
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/feed/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="4d4d4e"></FontAwesomeIcon>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Dimitar33"
          >
            <FontAwesomeIcon icon={faGithub} color="4d4d4e"></FontAwesomeIcon>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/dimitar.petkov.54"
          >
            <FontAwesomeIcon icon={faFacebook} color="4d4d4e"></FontAwesomeIcon>
          </a>
        </li>
      </ul>
    </div>
  );
}
